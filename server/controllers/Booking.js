// todo: update it in such a way these controllers can be used by both tourists and guides.
import Booking from "../models/Booking.js";
import Tourist from "../models/Tourist.js";

export const getUpcomingBookings = async (req, res) => {
    try {
        const { touristId } = req.params;
        const upcomingBookings = await Booking.find({
            touristId,
            date: { $gte: new Date() },
            status: { $in: ["Pending", "Confirmed"] }
        }).populate("guideId");

        res.status(200).json(upcomingBookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching upcoming bookings", error });
    }
};


export const getPastBookings = async (req, res) => {
    try {
        const { touristId } = req.params;
        const pastBookings = await Booking.find({
            touristId,
            date: { $lt: new Date() },
            status: "Completed"
        }).populate("guideId");

        res.status(200).json(pastBookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching past bookings", error });
    }
};

// Cancel a booking with no refund for now
export const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { cancellationReason } = req.body;

        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.status !== "Pending" && booking.status !== "Confirmed") {
            return res.status(400).json({ message: "Only pending or confirmed bookings can be canceled" });
        }

        booking.status = "Cancelled";
        booking.cancellationReason = cancellationReason;
        await booking.save();

        res.status(200).json({ message: "Booking canceled successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Error canceling booking", error });
    }
};