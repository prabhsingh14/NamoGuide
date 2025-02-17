import crypto from "crypto";
import { mailSender } from "../utils/mailSender.js";
import { Booking } from "../models/Booking.js";
import { Tourist } from "../models/Tourist.js";
import { paymentSuccessEmail } from "../mail/paymentSuccessEmail.js";

// verify the payment and send mail to tourist
exports.verifyPayment = async (req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const { touristId } = req.user._id

    if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature ||
        !touristId
    ) {
        return res.status(200).json({ 
            success: false, 
            message: "Payment Failed" 
        })
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        try {
            const booking = await Booking.findOne({ paymentId: razorpay_order_id });
            if (!booking) {
                return res.status(200).json({ 
                    success: false, 
                    message: "Payment Failed" 
                })
            }

            booking.status = "Confirmed";
            await booking.save();

            const tourist = await Tourist.findById(touristId);
            if (!tourist) {
                return res.status(200).json({ 
                    success: false, 
                    message: "Payment Failed" 
                })
            }

            await mailSender(
                tourist.email,
                "Payment Success",
                paymentSuccessEmail(
                    tourist.email,
                    "Payment Success",
                    paymentSuccessEmail(`${tourist.firstName} ${tourist.lastName}`, booking.amount/100, razorpay_order_id, razorpay_payment_id)
                ),
            );

            return res.status(200).json({ 
                success: true, 
                message: "Payment Successful" 
            })
        } catch (error) {
            console.log("error in verifying payment", error)
            return res.status(400).json({ 
                success: false, 
                message: "Payment Failed" 
            })
        }
    }

    return res.status(400).json({ 
        success: false, 
        message: "Payment Failed" 
    })
};