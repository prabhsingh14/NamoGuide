import GuideProfile from "../models/GuideProfile.js";

export const searchGuides = async (req, res) => {
    try {
        const { destination, date } = req.body;
        if(!destination || !date){
            return res.status(400).json({
                success: false,
                message: "Destination and date are required",
            });
        }

        const searchDate = new Date(date);
        
        const guides = await GuideProfile.find({
            "location.name": destination,
            availability: { $in: [searchDate] }
        }).populate({
            path: "guideId",
            select: "fullName phone gender verificationStatus",
        }).populate({
            path: "ratingAndReviews",
            select: "rating review",
        }).select("profilePicture languages location");

        if(guides.length <= 0){
            return res.status(404).json({
                success: false,
                message: "No guides found for the given destination and date",
            });
        }

        // format response
        const guideResults = guides.map((guide) => ({
            fullName: guide.guideId.fullName,
            phone: guide.guideId.phone,
            gender: guide.guideId.gender,
            verificationStatus: guide.guideId.verificationStatus,
            profilePicture: guide.profilePicture,
            languages: guide.languages,
            location: guide.location,
            rating: guide.ratingAndReviews,
        }));

        return res.status(200).json({
            success: true,
            message: "Guides found successfully!",
            guides: guideResults,
        });
    } catch (error) {
        console.error("Error searching for guides:", error);
        return res.status(500).json({
            success: false,
            message: "Error searching for guides",
            error: error.message,
        });
    }
}