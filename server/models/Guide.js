import mongoose from "mongoose";
import bcrypt from "bcrypt";

const GuideSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phone: { 
        type: String, 
        required: true, 
        unique: true,
        min: 10,
        max: 15,
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
    govtId: {
        type: String,
        required: true,
    },
    verificationStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GuideProfile",
        default: null,
    },
}, { timestamps: true });

GuideSchema.index({ email: 1 });
GuideSchema.index({ phone: 1 });
GuideSchema.index({ verificationStatus: 1 });

GuideSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

GuideSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate access token
GuideSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            fullName: `${this.firstName} ${this.lastName}`,
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

module.exports = mongoose.model("Guide", GuideSchema);
