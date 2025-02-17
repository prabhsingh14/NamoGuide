import { Booking } from "../models/Booking.js";
import { GuideProfile } from "../models/GuideProfile.js";
import { instance } from "../config/razorpay.js";

// Helper function to check time conflicts
const isTimeConflict = (start1, end1, start2, end2) => {
    return (start1 < end2 && start2 < end1); // Overlapping time check
};

// Create Booking with Time Validation
export const createBooking = async (req, res) => {
    try {
        const { guideId, touristId, date, destination, numberOfPeople, amount, startTime, endTime } = req.body;

        if (!guideId || !touristId || !date || !destination || !startTime || !endTime) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const selectedDate = new Date(date);

        // Fetch guide details
        const guide = await GuideProfile.findById(guideId);
        if (!guide) {
            return res.status(404).json({ success: false, message: "Guide not found" });
        }

        // Convert guide's working hours to Date objects
        const guideStartTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${guide.startTime}:00`);
        const guideEndTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${guide.endTime}:00`);

        const newBookingStartTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${startTime}:00`);
        const newBookingEndTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${endTime}:00`);

        // Ensure new booking is within guide's working hours
        if (newBookingStartTime < guideStartTime || newBookingEndTime > guideEndTime) {
            return res.status(400).json({ success: false, message: "Booking time is outside guide's working hours" });
        }

        // Fetch all bookings for this guide on the selected date
        const existingBookings = await Booking.find({ guideId, date: selectedDate });

        // Check for time conflicts
        for (let booking of existingBookings) {
            const existingStartTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${booking.startTime}:00`);
            const existingEndTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${booking.endTime}:00`);

            if (isTimeConflict(existingStartTime, existingEndTime, newBookingStartTime, newBookingEndTime)) {
                return res.status(400).json({ success: false, message: "Guide is not available at this time" });
            }
        }

        // If no conflicts, create the booking
        const newBooking = new Booking({
            touristId,
            guideId,
            date: selectedDate,
            numberOfPeople,
            amount,
            startTime,
            endTime,
            status: "Pending",
        });

        await newBooking.save();
        res.status(200).json({ success: true, message: "Booking created successfully", booking: newBooking });

        const paymentOptions = {
            amount: amount * 100,
            currency: "INR",
            receipt: newBooking._id.toString(),
        };

        try {
            const paymentResponse = await instance.orders.create(paymentOptions);
            newBooking.paymentId = paymentResponse.id;
            await newBooking.save();

            res.status(200).json({
                success: true,
                message: "Booking created successfully",
                booking: newBooking, paymentResponse,
            });
        } catch (error) {
            console.error("Error creating payment:", error);
            res.status(500).json({ message: "Server Error", error: error.message });
        }
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


// Fetch bookings for a tourist
export const getTouristBookings = async (req, res) => {
    try {
        const { touristId } = req.params;
        const bookings = await Booking.find({ touristId }).populate("guideId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Fetch bookings for a guide
export const getGuideBookings = async (req, res) => {
    try {
        const { guideId } = req.params;
        const bookings = await Booking.find({ guideId }).populate("touristId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// cancel booking by tourist
// cancel booking by guide
// refund amount to tourist