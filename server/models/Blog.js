import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    authorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        refPath: "authorType"  // Dynamically reference "Tourist" or "Guide"
    },
    authorType: { 
        type: String, 
        enum: ["Tourist", "Guide"],  // Ensures only valid types are used
        required: true 
    },
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    images: [String], 
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Blog", BlogSchema);