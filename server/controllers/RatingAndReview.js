const RatingAndReview = require("../models/RatingAndReview");
const Tours = require("../models/Tours");
const mongoose = require("mongoose");

exports.createRating = async (req, res) => {
    try {
        const userId = req.user.id;
        const { rating, review, tourId } = req.body;
        const tourDetails = await Tours.findOne({ _id: tourId });

        if (!tourDetails) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }

        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            tour: tourId,
        });

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Tour already reviewed by user",
            });
        }

        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            tour: tourId,
            user: userId,
        });

        const updatedRatingCount = tourDetails.ratings.count + 1;
        const updatedAverageRating =
        (tourDetails.ratings.average * tourDetails.ratings.count + rating) /
        updatedRatingCount;

        tourDetails.ratings.count = updatedRatingCount;
        tourDetails.ratings.average = updatedAverageRating;

        await tourDetails.save();

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

exports.getAverageRating = async (req, res) => {
    try {
        const { tourId } = req.body;
        const tourDetails = await Tours.findOne({ _id: tourId });

        if (!tourDetails) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }

        return res.status(200).json({
            success: true,
            averageRating: tourDetails.ratings.average,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the average rating for the tour",
            error: error.message,
        });
    }
};

exports.getAllRatingReview = async (req, res) => {
    try {
        const allReviews = await RatingAndReview.find({})
        .sort({ rating: "desc" })
        .populate({
            path: "user",
            select: "firstName lastName email image",
        })
        .populate({
            path: "tour",
            select: "title location",
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
            message: "Failed to retrieve the rating and review for the tours",
            error: error.message,
        });
    }
};