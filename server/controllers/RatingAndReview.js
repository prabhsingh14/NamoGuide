import RatingAndReview from "../models/RatingAndReview.js";
import TouristProfile from "../models/TouristProfile.js";
import GuideProfile from "../models/GuideProfile.js";
import mongoose from "mongoose";

// Create a new rating and review for a guide
export const createRating = async (req, res) => {
    try {
        const touristId = req.user.id; // Assuming the authenticated user is a tourist
        const { rating, review, guideId } = req.body;

        // Check if the tourist has already reviewed the guide
        const alreadyReviewed = await RatingAndReview.findOne({
            tourist: touristId,
            guide: guideId,
        });

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "You have already reviewed this guide",
            });
        }

        // Create a new rating and review
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            guide: guideId,
            tourist: touristId,
        });

        // Add the rating and review to the guide's profile
        await GuideProfile.findOneAndUpdate(
            { guideId: guideId },
            { $push: { ratingAndReviews: ratingReview._id } }
        );

        // Add the review to the tourist's profile
        await TouristProfile.findOneAndUpdate(
            { tourist: touristId },
            { $push: { reviewsGiven: { reviewId: ratingReview._id } } }
        );

        return res.status(201).json({
            success: true,
            message: "Rating and review created successfully",
            ratingReview,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Get the average rating for a guide
export const getAverageRating = async (req, res) => {
    try {
        const { guideId } = req.body;

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
        ]);

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            });
        }

        // If no ratings are found, return 0 as the default rating
        return res.status(200).json({ success: true, averageRating: 0 });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating for the guide",
            error: error.message,
        });
    }
};

// Get all ratings and reviews for a guide
export const getAllRatingReview = async (req, res) => {
    try {
        const { guideId } = req.body;

        const allReviews = await RatingAndReview.find({ guide: guideId })
                                                .sort({ rating: "desc" })
                                                .populate({
                                                    path: "tourist",
                                                    select: "firstName lastName email image", // Populate tourist details
                                                })
                                                .populate({
                                                    path: "guide",
                                                    select: "about languages location", // Populate guide details
                                                })
                                                .exec();

        res.status(200).json({
            success: true,
            data: allReviews,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating and review for the guide",
            error: error.message,
        });
    }
};