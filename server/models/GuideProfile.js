import mongoose from "mongoose";

const GuideProfileSchema = new mongoose.Schema({
    guideId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Guide", 
        required: true,
        unique: true 
    },
    about: { 
        type: String, 
        trim: true 
    },
    languages: [
        { 
            type: String 
        }
    ],
    location: { //location where guide is available
        type: String, 
        required: true,
        index: true,
    },  
    profilePicture: { type: String },  // URL to profile image
    ratings: { type: Number, default: 0 },  // Aggregate rating
}, {
    timestamps: true
});

module.exports = mongoose.model("GuideProfile", GuideProfileSchema);