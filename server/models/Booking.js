const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
    paymentDetails: Object, // Store payment metadata
    status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);