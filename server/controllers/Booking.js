import Booking from "../models/Booking.js";
import Tourist from "../models/Tourist.js";
import Guide from "../models/Guide.js";

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