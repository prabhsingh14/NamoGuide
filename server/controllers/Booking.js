import Booking from "../models/Booking.js";
import Tourist from "../models/Tourist.js";
import Guide from "../models/Guide.js";
import GuideProfile from "../models/GuideProfile.js";

/* Frontend integration: Guide Dashboard (Adding Availability)
Provide a date picker to select dates.
Allow guides to add time slots dynamically (e.g., "10:00 AM - 12:00 PM").
Call the addAvailability API to save data.*/

export const bookSlot = async (req, res) => {
    try {
        const { guideId, date, startTime } = req.body;

        let guideProfile = await GuideProfile.findOne({ guideId });

        if (!guideProfile) {
            return res.status(404).json({ message: "Guide profile not found" });
        }

        let dateEntry = guideProfile.availability.find(
            entry => entry.date.toISOString().split("T")[0] === date
        );

        if (!dateEntry) {
            return res.status(400).json({ message: "Guide not available on this date" });
        }

        let slot = dateEntry.slots.find(slot => slot.startTime === startTime && !slot.isBooked);

        if (!slot) {
            return res.status(400).json({ message: "Slot not available" });
        }

        slot.isBooked = true;
        await guideProfile.save();

        res.status(200).json({ message: "Slot booked successfully", guideProfile });
    } catch (error) {
        res.status(500).json({ message: "Error booking slot", error });
    }
};

export const getUpcomingBookings = async (req, res) => {
    try{
        const userId = req.user.id;
        const isTourist = await Tourist.findById({ userId }).lean();

        const query = {
            date: { $gte: new Date() },
            status: { $in: ["Pending", "Confirmed"] }
        };

        if(isTourist){
            query.touristId = userId;
        } else{
            const isGuide = await Guide.findById({ userId }).lean();
            if(!isGuide){
                return res.status(404).json({ message: "User not found" });
            }

            query.guideId = userId;
        }

        const upcomingBookings = await Booking.find(query).populate("touristId", "firstName lastName email").populate("guideId", "fullName phone")
                                            .sort({ date: 1, startTime: 1 });
                                            
        return res.status(200).json({
            success: true,
            upcomingBookings,
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: "Error fetching bookings", error });
    }
};

export const getPastBookings = async (req, res) => {
    try {
        const userId = req.user.id; 
        const isTourist = await Tourist.findById(userId).lean();
        const query = {
            date: { $lt: new Date() },
            status: { $in: ["Completed", "Cancelled"] } 
        };

        if (isTourist) {
            query.touristId = userId; 
        } else {
            const isGuide = await Guide.findById(userId).lean();
            if (!isGuide) {
                return res.status(404).json({ message: "User not found" });
            }
            query.guideId = userId; 
        }

        const pastBookings = await Booking.find(query)
            .populate("touristId", "firstName lastName email")
            .populate("guideId", "fullName phone")
            .sort({ date: -1, startTime: -1 }); // Show most recent first

        res.status(200).json({ success: true, bookings: pastBookings });
    } catch (error) {
        console.error("Error fetching past bookings:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

//cancellation and refund system pending