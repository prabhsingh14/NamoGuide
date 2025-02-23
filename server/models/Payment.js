import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentId: { type: String, required: true, unique: true },
    orderId: { type: String, required: true, unique: true },
    touristId: { type: mongoose.Schema.Types.ObjectId, ref: "Tourist", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Success", "Failed", "Pending"], default: "Pending" },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;