import mongoose from "mongoose";

const touristProfileSchema = new mongoose.Schema(
    {
        tourist: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Tourist",
            unique: true, // One profile per tourist
			index: true,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        },
        image: {
            type: String, // Profile picture (uploaded later)
            default: null,
        },
        contactNumber: {
            type: String,
            trim: true,
			minLength: 10,
			maxLength: 15,
        },
        reviewsGiven: [
            {
                reviewId: { type: mongoose.Schema.Types.ObjectId, ref: "RatingAndReview" },
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("TouristProfile", touristProfileSchema);
