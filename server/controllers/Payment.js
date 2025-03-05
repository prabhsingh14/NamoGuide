import Booking from "../models/Booking.js";
import Guide from "../models/Guide.js";
import Payment from "../models/Payment.js";
import Tourist from "../models/Tourist.js";
import GuideProfile from "../models/GuideProfile.js";
import crypto from "crypto";
import Razorpay from "razorpay";
import { guideBookedEmail } from "../mail/guideBookedEmail.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const capturePayment = async (req, res) => {
    try {
        const { guideId } = req.body;
        const guideProfile = await GuideProfile.findOne({ guideId }).lean();
        
        if (!guideProfile) {
        return res.status(404).json({ success: false, message: "Guide not found" });
        }
        
        const amount = guideProfile.price * 100; 
        const options = {
            amount,
            currency: "INR",
            receipt: Date.now().toString(),
        };

        const paymentResponse = await razorpay.orders.create(options);
        res.status(200).json({ success: true, order: paymentResponse });
    } catch (error) {
        res.status(500).json({ success: false, message: "Payment initiation failed", error });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, guides } = req.body;
        const userId = req.user.id;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
                                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                                .update(body)
                                .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Invalid payment signature" });
        }

        const payment = new Payment({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });
        await payment.save();

        await bookTourist(guides, userId, res);
    } catch (error) {
        res.status(500).json({ success: false, message: "Payment verification failed", error });
    }
};

const bookTourist = async (guides, userId, date, numberOfPeople, res) => {
    try {
        const bookedGuide = await GuideProfile.findById(guides);
        const tourist = await Tourist.findById(userId);

        if (!bookedGuide || !tourist) {
        return res.status(404).json({ success: false, message: "Tourist or Guide not found" });
        }

        const newBooking = new Booking({
            touristId: userId,
            guideId: guides,
            date,
            numberOfPeople,
            amount: bookedGuide.location.price,
            status: "Confirmed",
            paymentId: razorpay_payment_id,
        });

        await newBooking.save();
        
        bookedGuide.guidesBooked.push(userId);
        await bookedGuide.save();

        await guideBookedEmail(tourist.email, bookedGuide.name);

        res.status(200).json({ success: true, message: "Guide booked successfully", booking: newBooking });

        // Send email to guide
    } catch (error) {
        res.status(500).json({ success: false, message: "Booking failed", error });
    }
};
