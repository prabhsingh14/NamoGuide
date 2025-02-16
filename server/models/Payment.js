import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
    touristId: { type: mongoose.Schema.Types.ObjectId, ref: "Tourist" },
    amount: Number,
    status: { type: String, enum: ["Pending", "Successful", "Failed", "Refunded"], default: "Pending" },
    transactionId: String,
    createdAt: { type: Date, default: Date.now }
});  

module.exports = mongoose.model("Payment", PaymentSchema);