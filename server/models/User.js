const mongoose = require("mongoose")
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
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
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
        },
        tours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tours",
        },
        ],
        resetPasswordExpires: {
            type: Date,
        },
        image: {
            type: String,
        },
        refreshToken: {
            type: String,
        }    
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        { 
            id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName,
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        { 
            id: this._id,
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
}

module.exports = mongoose.model("User", userSchema)