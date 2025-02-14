const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    bookingId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
    date: { type: Date, required: true },
    numberOfPeople: {
        adults: {
            type: Number,
            required: true,
        },
        children: {
            type: Number,
            required: true,
        },
    },
    amount: {type: Number, required: true},
    status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);