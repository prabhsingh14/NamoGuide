import RatingAndReview from "../models/RatingandReview.js";
import Guide from "../models/Guide.js";
import mongoose from "mongoose";

exports.createRating = async (req, res) => {
    try {
        const touristId = req.user._id
        const { rating, review, guideId } = req.body

        const guideDetails = await Guide.findById({
            _id: guideId,
            touristsServed: { $elemMatch: { $eq: touristId } },
        })

        if (!guideDetails) {
            return res.status(404).json({
                success: false,
                message: "You can't give a review to a guide that you haven't booked",
            })
        }

        // Check if the user has already reviewed the guide
        const alreadyReviewed = await RatingAndReview.findOne({
            tourist: touristId,
            guide: guideId,
        })

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Guide already reviewed",
            })
        }

        // Create a new rating and review
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            tourist: touristId,
            guide: guideId,
        })

        // Add the rating and review to the guide
        await Guide.findByIdAndUpdate(guideId, {
            $push: {
                ratingAndReviews: ratingReview,
            },
        })
        await guideDetails.save();

        return res.status(201).json({
            success: true,
            message: "Rating and review created successfully",
            ratingReview,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

// Get the average rating for a guide
exports.getAverageRating = async (req, res) => {
    try {
        const guideId = req.body.guideId

        // Calculate the average rating using the MongoDB aggregation pipeline
        const result = await RatingAndReview.aggregate([
            {
                $match: {
                    guide: new mongoose.Types.ObjectId(guideId), // Convert guideId to ObjectId
                },
            },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" },
                },
            },
        ])

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            })
        }

        // If no ratings are found, return 0 as the default rating
        return res.status(200).json({ success: true, averageRating: 0 })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating for the guide",
            error: error.message,
        })
    }
}

// Get all rating and reviews
exports.getAllRatingReview = async (req, res) => {
    try {
        const allReviews = await RatingAndReview.find({})
        .sort({ rating: "desc" })
        .populate({
            path: "tourist",
            select: "firstName lastName email",
        })
        .populate({
            path: "guide",
            select: "fullName email",
        })
        .exec()

        res.status(200).json({
            success: true,
            data: allReviews,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating and review for the guide",
            error: error.message,
        })
    }
}