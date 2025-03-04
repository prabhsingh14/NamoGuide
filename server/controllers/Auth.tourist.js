import bcrypt from "bcrypt"
import Tourist from "../models/Tourist.js"
import OTP from "../models/OTP.js"
import otpGenerator from "otp-generator"
import mailSender from "../utils/mailSender.js"
import passwordUpdated from "../mail/passwordUpdate.js"
import TouristProfile from "../models/TouristProfile.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();


const generateAccessAndRefreshTokens = async(userId) => {
    try{
        const user = await Tourist.findById(userId)
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}
    } catch(error){
        console.error("Error occurred while generating access and refresh tokens:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while generating access and refresh tokens",
            error: error.message
        })
    }
}

export const signup = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
        } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match. Please try again.",
            });
        }

        const existingUser = await Tourist.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login to continue.",
            });
        }

        // Fetch latest OTP entry for the user
        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        if (response.length === 0) {
            return res.status(400).json({
                success: false,
                message: "OTP not found. Please request a new OTP.",
            });
        }

        const latestOTP = response[0];
        if (String(otp) !== String(latestOTP.otp)) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP. Please try again.",
            });
        }

        if (latestOTP.expiresAt < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "OTP Expired. Please request a new OTP.",
            });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);

        // Step 1: Create the Tourist (User)
        const user = await Tourist.create({
            firstName,
            lastName,
            email,
            password,
            additionalDetails: null,  // Set it after profile creation
        });

        // Step 2: Create Tourist Profile & Link it to the User
        const profileDetails = await TouristProfile.create({
            tourist: user._id,  // Associate the profile with the user
            gender: null,
            contactNumber: null,
            image: "",
            guidesBooked: [],
            reviewsGiven: [],
        });

        // Step 3: Update User with Profile ID
        user.additionalDetails = profileDetails._id;
        await user.save();

        return res.status(200).json({
            success: true,
            user,
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            })
        }

        const user = await Tourist.findOne({ email }).populate("additionalDetails")
        if (!user) {
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us Please signup to Continue`,
            })
        }
        
        const isPasswordValid = await user.isPasswordCorrect(password)
        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }

        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)
        const loggedInUser = await Tourist.findById(user._id).select("-password -refreshToken")

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true
        }

        return res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json({
            success: true,
            user: loggedInUser,
            accessToken,
            refreshToken,
            message: `User logged in successfully`,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
}

export const sendotp = async (req, res) => {
    try {
        const { email } = req.body
        const checkUserPresent = await Tourist.findOne({ email })
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: `User is Already Registered`,
            })
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        const result = await OTP.findOne({ otp: otp })
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
            })
        }

        const otpPayload = { email, otp }
        const otpBody = await OTP.create(otpPayload)
        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: error.message })
    }
}

export const changePassword = async (req, res) => {
    try {
        const userDetails = await Tourist.findById(req.user.id)
        console.log(req.user.id)
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })
        }
        const { oldPassword, newPassword } = req.body
        const isPasswordMatch = await bcrypt.compare(
            oldPassword,
            userDetails.password
        )

        if (!isPasswordMatch) {
            return res.status(401).json({ 
                success: false, 
                message: "The password is incorrect" 
            })
        }

        const encryptedPassword = await bcrypt.hash(newPassword, 10)
        const updatedUserDetails = await Tourist.findByIdAndUpdate(
            req.user.id,
            { password: encryptedPassword },
            { new: true }
        )

        try {
            const emailResponse = await mailSender(
                updatedUserDetails.email,
                "Password for your account has been updated",
                passwordUpdated(
                    updatedUserDetails.email,
                    `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
                )
            )

            console.log("Email sent successfully:", emailResponse.response)
        } catch (error) {
            console.error("Error occurred while sending email:", error)
            return res.status(500).json({
                success: false,
                message: "Error occurred while sending email",
                error: error.message,
            })
        }

        return res.status(200).json({ 
            success: true, 
            message: "Password updated successfully" 
        })
    } catch (error) {
        console.error("Error occurred while updating password:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating password",
            error: error.message,
        })
    }
}

export const logout = async (req, res) => {
    try{
        await Tourist.findByIdAndUpdate(req.user._id, {
            $set: {
                refreshToken: undefined
            },
        },{ new: true })
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch(error){
        console.error("Error occurred while logging out:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while logging out",
            error: error.message
        })
    }
}

export const refreshAccessToken = async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
        return res.status(401).json({ 
            success: false, 
            message: "Refresh token not found" 
        })
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        if(!decodedToken){
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            })
        }
    
        const user = await Tourist.findById(decodedToken?._id)
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
    
        if(user.refreshToken !== incomingRefreshToken){
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            })
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", newRefreshToken, options).json({
            success: true,
            accessToken,
            refreshToken: newRefreshToken
        })
    } catch (error) {
        console.error("Error occurred while refreshing access token:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while refreshing access token",
            error: error.message
        })
    }
}