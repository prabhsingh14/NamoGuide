// todo: make it work for both tourists and guides
import User from "../models/Tourist.js"
import mailSender from "../utils/mailSender.js"
import bcrypt from "bcrypt"
import crypto from "crypto"

export const resetPasswordToken = async (req, res) => {
    try {
        const email = req.body.email
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.json({
                success: false,
                message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
            })
        }

        const token = crypto.randomBytes(20).toString("hex")

        const updatedDetails = await User.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    token: token,
                    resetPasswordExpires: Date.now() + 3600000,
                }
            },
            { new: true }
        )

        // console.log("Printing", updatedDetails);
        const url = `http://localhost:3000/update-password/${token}`

        await mailSender(
            email,
            "Password Reset",
            `Your Link for email verification is ${url}. Please click this url to reset your password.`
        )

        res.json({
            success: true,
            message:
                "Email Sent Successfully, Please Check Your Email to Continue Further",
        })
    } catch (error) {
        return res.json({
            error: error.message,
            success: false,
            message: `Some Error in Sending the Reset Message`,
        })
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { password, confirmPassword, token } = req.body
        if (confirmPassword !== password) {
            return res.json({
                success: false,
                message: "Password and Confirm Password Does not Match",
            })
        }

        const userDetails = await User.findOne({ token: token })
        // console.log(token)
        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Token is Invalid",
            })
        }

        if (!(userDetails.resetPasswordExpires > Date.now())) {
            return res.status(403).json({
                success: false,
                message: `Token is Expired, Please Regenerate Your Token`,
            })
        }

        const encryptedPassword = await bcrypt.hash(password, 10)
        await User.findOneAndUpdate(
            { token: token },
            { password: encryptedPassword },
            { new: true }
        )

        res.json({
            success: true,
            message: `Password Reset Successful`,
        })
    } catch (error) {
        return res.json({
            error: error.message,
            success: false,
            message: `Some Error in Updating the Password`,
        })
    }
}