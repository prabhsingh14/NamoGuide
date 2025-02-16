import mongoose from "mongoose";

function arrayLimit(val) {
    return val.length <= 10;
}

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
			match: [/^\d+$/, "Contact number must contain only digits"],
        },
        guidesBooked: {
            type: [
				{
					guideId: { type: mongoose.Schema.Types.ObjectId, ref: "Guide" },
					date: { type: Date, required: true },
					reviewed: { type: Boolean, default: false },
					status: { type: String, enum: ["Upcoming", "Completed", "Canceled"], default: "Upcoming" },
				},
			],
			validate: [arrayLimit, "Exceeded the limit of 10"],
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
