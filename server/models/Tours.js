const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Tour title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Tour description is required"],
        },
        location: {
            type: String,
            required: [true, "Tour location is required"],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, "Tour price is required"],
            min: [0, "Price cannot be negative"],
        },
        availableDates: [
            {
                type: Date,
                required: true,
            },
        ],
        availableSlots: { type: Number, default: 50 },
        agencyId: {
            type: String, // Shared unique identifier for the Agency (e.g., UUID or ObjectId)
            required: [true, "Agency ID is required"],
        },
        ratings: {
            average: {
                type: Number,
                default: 0,
                min: [0, "Rating cannot be less than 0"],
                max: [5, "Rating cannot be more than 5"],
            },
            count: {
                type: Number,
                default: 0,
            },
        },
        touristsBooked: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tours", TourSchema);
