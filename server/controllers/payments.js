const { instance } = require("../config/razorpay")
const Tours = require("../models/Tours")
const crypto = require("crypto")
const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const mongoose = require("mongoose")
const {
    tourBookedEmail,
} = require("../mail/tourBookedEmail")
const { paymentSuccessEmail } = require("../mail/paymentSuccessEmail")

exports.capturePayment = async (req, res) => {
    const { tours } = req.body
    const userId = req.user.id
    if (tours.length === 0) {
        return res.json({ 
            success: false, 
            message: "Please Provide Tour ID" 
        })
    }

    let total_amount = 0

    for (const tour_id of tours) {
        let tour
        try {
            tour = await Tours.findById(tour_id)
            if (!tour) {
                return res.status(200).json({ 
                    success: false, 
                    message: "Could not find the Tour" 
                })
            }

            const uid = new mongoose.Types.ObjectId(userId)
            if (tour.touristsBooked.includes(uid)) {
                return res.status(200).json({ 
                    success: false, 
                    message: "You have already booked the tour" 
                })
            }

            total_amount += tour.price
        } catch (error) {
            console.log(error)
            return res.status(500).json({ 
                success: false, 
                message: error.message 
            })
        }
    }

    const options = {
        amount: total_amount * 100,
        currency: "INR",
        receipt: Math.random(Date.now()).toString(),
    }

    try {
        // Initiate the payment using Razorpay
        const paymentResponse = await instance.orders.create(options)
        res.json({
            success: true,
            data: paymentResponse,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false, 
            message: "Could not initiate order." 
        })
    }
}

// verify the payment
exports.verifyPayment = async (req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const tours = req.body?.tours

    const userId = req.user.id

    if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature ||
        !tours ||
        !userId
    ) {
        return res.status(200).json({ 
            success: false, 
            message: "Payment Failed" 
        })
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex")

    if (expectedSignature === razorpay_signature) {
        await bookTourists(tours, userId, res)
        return res.status(200).json({ 
            success: true, 
            message: "Payment Verified" 
        })
    }

    return res.status(400).json({ 
        success: false, 
        message: "Payment Failed" 
    })
}

exports.sendPaymentSuccessEmail = async (req, res) => {
    const { orderId, paymentId, amount } = req.body
    const userId = req.user.id

    if (!orderId || !paymentId || !amount || !userId) {
        return res.status(400).json({ 
            success: false, 
            message: "Please provide all the details" 
        })
    }

    try {
        const bookedTourist = await User.findById(userId)

        await mailSender(
            bookedTourist.email,
            `Payment Received`,
            paymentSuccessEmail(
                `${bookedTourist.firstName} ${bookedTourist.lastName}`,
                amount / 100,
                orderId,
                paymentId
            )
        )
    } catch (error) {
        console.log("error in sending mail", error)
        return res.status(400).json({ 
            success: false, 
            message: "Could not send email" 
        })
    }
}

const bookTourists = async (tours, userId, res) => {
    if (!tours || !userId) {
        return res.status(400).json({ 
            success: false, 
            message: "Please Provide Tour ID and User ID" 
        })
    }

    for (const tourId of tours) {
        try {
            const bookedTour = await Tours.findOneAndUpdate(
                { _id: tourId },
                { $push: { touristsBooked: userId } },
                { new: true }
            )

            if (!bookedTour) {
                return res.status(500).json({ 
                    success: false, 
                    error: "Tour not found" 
                })
            }
            
            const bookedTourist = await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        tours: tourId,
                    },
                },
                { new: true }
            )

            const emailResponse = await mailSender(
                bookedTourist.email,
                `Successfully Enrolled into ${bookedTour.tourName}`,
                tourBookedEmail(
                    bookedTour.tourName,
                    `${bookedTourist.firstName} ${bookedTourist.lastName}`
                )
            )
        } catch (error) {
            console.log(error)
            return res.status(400).json({ 
                success: false, 
                error: error.message 
            })
        }
    }
}