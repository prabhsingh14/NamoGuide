import mongoose from "mongoose";

const GuideVerificationSchema = new mongoose.Schema(
    {
        guideId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Guide",
            required: true,
            unique: true,
        },
        documentURL: {
            type: String,
            required: true, // Cloudinary or other storage URL
        },
        status: {
            type: String,
            enum: ["Pending", "Verified", "Rejected"],
            default: "Pending",
        },
        rejectionReason: {
            type: String,
            trim: true,
            default: null, // Only set if status is "Rejected"
        },
    },
    { timestamps: true }
);

// Ensure `rejectionReason` is only set when status is "Rejected"
GuideVerificationSchema.pre("save", function (next) {
    if (this.status !== "Rejected") {
        this.rejectionReason = null;
    }
    next();
});

// Index for faster lookup
GuideVerificationSchema.index({ guideId: 1 });

export default mongoose.model("GuideVerification", GuideVerificationSchema);