import mongoose from "mongoose";

const GuideEarningsSchema = new mongoose.Schema({
    guideId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Guide", 
        required: true,
        unique: true,
    },
    totalEarnings: { type: mongoose.Schema.Types.Decimal128, default: 0.0 },
    transactions: [
        {
            bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
            amount: Number,
            date: { type: Date, default: Date.now }
        }
    ],
    lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

GuideEarningsSchema.pre("findOneAndUpdate", function (next) {
    this.set({ lastUpdated: Date.now() });
    next();
});

module.exports = mongoose.model("GuideEarnings", GuideEarningsSchema);