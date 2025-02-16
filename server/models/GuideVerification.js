import mongoose from "mongoose";

const GuideVerificationSchema = new mongoose.Schema({
    guideId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Guide", 
        required: true, 
        unique: true 
    },
    documentType: { type: String, required: true },  // Example: "Aadhar", "Passport"
    documentURL: { type: String, required: true },  // Cloudinary/other storage URL
    status: { 
        type: String, 
        enum: ["Pending", "Verified", "Rejected"], 
        default: "Pending" 
    },
    rejectionReason: { type: String, trim: true, default: null },  // If rejected
}, { timestamps: true });

// Ensure `rejectionReason` is only set when status is "Rejected"
GuideVerificationSchema.pre("save", function (next) {
    if (this.status !== "Rejected") {
        this.rejectionReason = null;
    }
    next();
});

module.exports = mongoose.model("GuideVerification", GuideVerificationSchema);