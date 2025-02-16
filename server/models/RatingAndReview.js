import mongoose from "mongoose";

const ratingAndReviewSchema = new mongoose.Schema(
    {
        tourist: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Tourist",
        },
        guide: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Guide",
            index: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,  // Restrict rating range
        },
        review: {
            type: String,
            required: false, // Allow ratings without reviews
            trim: true,
        },
    },
    { timestamps: true } 
);

// ✅ Prevent duplicate reviews for the same guide
ratingAndReviewSchema.index({ tourist: 1, guide: 1 }, { unique: true });

const RatingAndReview = mongoose.model("RatingAndReview", ratingAndReviewSchema);
export default RatingAndReview;