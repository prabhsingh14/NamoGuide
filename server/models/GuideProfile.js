import mongoose from "mongoose";

const GuideProfileSchema = new mongoose.Schema({
    guideId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Guide", 
        required: true,
        unique: true 
    },
    about: { type: String, trim: true },
    languages: [{ type: String }],
    location: [{ name: String, price: Number }],
    touristsServed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tourist" }],
    profilePicture: { type: String },  // URL to profile image
    ratingAndReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "RatingAndReview" }],

    availability: [
        {
            date: { type: Date, required: true },  // Only store date, not time
            slots: [
                {
                    startTime: { type: String, required: true }, // Example: "10:00 AM"
                    endTime: { type: String, required: true },   // Example: "12:00 PM"
                    isBooked: { type: Boolean, default: false } // Track booked status
                }
            ]
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model("GuideProfile", GuideProfileSchema);