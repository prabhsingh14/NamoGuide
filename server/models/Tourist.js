import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function arrayLimit(val) {
    return val.length <= 10;
}

const touristSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        guidesBooked: {
            type: [
                {
                    guideId: { type: mongoose.Schema.Types.ObjectId, ref: "Guide" },
                    date: { type: Date, required: true },
                    reviewed: { type: Boolean, default: false },
                    status: { type: String, enum: ["Upcoming", "Completed", "Canceled"], default: "Upcoming" },
                },
            ],
            validate: [arrayLimit, "Exceeded the limit of 10"],
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TouristProfile",
        },
        active: {
            type: Boolean,
            default: true,
        },
        token: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
);

// Hash password before saving
touristSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        console.log("Password not modified, skipping hash.");
        return next();
    }
    console.log("Hashing password:", this.password);
    this.password = await bcrypt.hash(this.password, 10);
    console.log("New hashed password:", this.password);
    next();
});


// Check password correctness
touristSchema.methods.isPasswordCorrect = async function (password) {
    // console.log("Comparing:", password, "with", this.password);
    return await bcrypt.compare(password, this.password);
};

// Generate access token
touristSchema.methods.generateAccessToken = function () {
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
touristSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export default mongoose.model("Tourist", touristSchema);