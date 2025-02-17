import { Guide } from "../models/GuideProfile.js";

// get available guides for a particular destination and date
export const getAvailableGuides = async (req, res) => {
    try {
        const { destination, date } = req.query;
        if(!destination || !date) return res.status(400).json({ message: "Destination and date are required" });

        const selectedDate = new Date(date);
        const guides = await Guide.find({ location: {$in: destination}, availability: { $in: selectedDate } });

        res.status(200).json(guides);
    } catch (error) {
        console.error("Error fetching guides: ", error);
        res.status(500).json({ message: "Server Error" });
    }
}