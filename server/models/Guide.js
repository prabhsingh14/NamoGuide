import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const GuideSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            minlength: 10,
            maxlength: 15,
            match: [/^\d+$/, "Contact number must contain only digits"],
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },
        address: {
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
            default: null,
        },
        verifiedAt: {
            type: Date,
            default: null,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "GuideProfile",
            default: null,
        },
        documents: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Document",
        }]
    },
    { timestamps: true }
);

// Indexes for efficient querying
GuideSchema.index({ email: 1 });
GuideSchema.index({ phone: 1 });
GuideSchema.index({ verificationStatus: 1 });

// Hash password before saving
GuideSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare entered password with hashed password
GuideSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate access token
GuideSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// Generate refresh token
GuideSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export default mongoose.model("Guide", GuideSchema);