import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    guide: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guide",
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    verificationStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    rejectionReason: {
        type: String,
        default: "",
    },
}, { timestamps: true });

const Document = mongoose.model("Document", DocumentSchema);
export default Document;