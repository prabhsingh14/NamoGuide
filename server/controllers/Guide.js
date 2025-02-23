import GuideProfile from "../models/GuideProfile.js";7

export const searchGuides = async (req, res) => {
    try {
        const { destinations, date } = req.body;

        // Validate input
        if (!destinations || destinations.length === 0 || !date) {
            return res.status(400).json({ message: "Destination and date are required." });
        }

        // Convert the date to a Date object
        const selectedDate = new Date(date);

        // Step 1: Find guides who are available on the selected date
        const availableGuides = await GuideProfile.find({
            availability: { $in: [selectedDate] },
        }).populate("guideId");

        // Step 2: Filter guides who serve the selected destinations
        const filteredGuides = availableGuides.filter((guideProfile) => {
            const guideLocations = guideProfile.location.map((loc) => loc.name);
            return destinations.some((destination) => guideLocations.includes(destination));
        });

        // Step 3: Extract guide details and send the response
        const guides = filteredGuides.map((guideProfile) => {
            const guide = guideProfile.guideId;
            return {
                id: guide._id,
                fullName: guide.fullName,
                email: guide.email,
                phone: guide.phone,
                about: guideProfile.about,
                languages: guideProfile.languages,
                location: guideProfile.location,
                profilePicture: guideProfile.profilePicture,
                ratingAndReviews: guideProfile.ratingAndReviews,
            };
        });

        res.status(200).json({ success: true, guides });
    } catch (error) {
        console.error("Error searching guides:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};