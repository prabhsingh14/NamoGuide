import bcrypt from "bcrypt"
import Guide from "../models/Guide.js"
import OTP from "../models/OTP.js"
import otpGenerator from "otp-generator"
import mailSender from "../utils/mailSender.js"
import passwordUpdated from "../mail/passwordUpdate.js"
import GuideProfile from "../models/GuideProfile.js"
import Document from "../models/Document.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { verifyLicenseWithDigiLockerXML, verifyLicenseWithDigiLockerFile } from "../utils/digiLocker.js"
dotenv.config();

const generateAccessAndRefreshTokens = async(userId) => {
    try{
        const user = await Guide.findById(userId)
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

// OCR Pending, token ni liya abhi digilocker website se pehle
export const register = async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            confirmPassword,
            otp,
            dateOfBirth,
            phone,
            gender,
            address,
            documents
        } = req.body;

        // as many guides in India, might not have/know their mail, we are not making email compulsory
        if (!fullName || !password || !confirmPassword || !otp || !dateOfBirth || !phone || !gender || !address || !documents 
            || !documents.length) {
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

        let existingUser;
        
        if(email){
            existingUser = await Guide.findOne({ email });
        } else if(phone){
            existingUser = await Guide.findOne({ phone });
        } else{
            return res.status(400).json({
                success: false,
                message: "Please provide either email or phone number",
            });
        }

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login to continue.",
            });
        }

        // Fetch latest OTP entry for the user
        let response;
        
        if(email){
            response = await OTP.find({ email }).sort({ createdAt: -1 });
        } else if(phone){
            response = await OTP.find({ phone }).sort({ createdAt: -1 });
        } else{
            return res.status(400).json({
                success: false,
                message: "Please provide either email or phone number",
            });
        }
        
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

        const user = await Guide.create({
            fullName,
            email: email || null,
            password,
            dateOfBirth,
            phone,
            gender,
            address,
            additionalDetails: null,  // Set it after profile creation
        });

        const profileDetails = await GuideProfile.create({
            guideId: user._id,  // Associate the profile with the user
            about: "",
            languages: [],
            location: [],
            touristsServed: [],
            availability: [],
            profilePicture: ""
        });
        
        user.additionalDetails = profileDetails._id;

        const uploadedDocuments = await Promise.all(
            documents.map(async (doc) => {
                const createdDoc = await Document.create({
                    guide: user._id,
                    type: doc.type,
                    fileURL: doc.fileURL,
                });

                // license verification starts here
                try{
                    const digiLockerAccessToken = process.env.DIGILOCKER_ACCESS_TOKEN;

                    let xmlVerificationResult = null;
                    if(doc.fileURL){
                        xmlVerificationResult = await verifyLicenseWithDigiLockerXML(doc.fileURL, digiLockerAccessToken);
                    }

                    if(xmlVerificationResult && xmlVerificationResult.success){
                        createdDoc.verificationStatus = "Approved";
                        createdDoc.licenseDetails = xmlVerificationResult.licenseDetails;
                        await createdDoc.save();
                    } else{
                        if(doc.fileURL){
                            const fileVerificationResult = await verifyLicenseWithDigiLockerFile(doc.fileURL, digiLockerAccessToken);

                            if(fileVerificationResult && fileVerificationResult.success){
                                createdDoc.verificationStatus = "Approved";
                                // need to use OCR library here to extract license details from the file, and then store it.

                                await createdDoc.save();
                            } else{
                                console.error("License verification failed!", fileVerificationResult);
                                createdDoc.verificationStatus = "Rejected";
                                createdDoc.rejectionReason = "License verification failed";
                                await createdDoc.save();
                            }
                        } else{
                            createdDoc.verificationStatus = "Rejected";
                            createdDoc.rejectionReason = "License verification failed";
                            await createdDoc.save();
                        }
                    }

                } catch(verificationError){
                    console.error("License verification failed!", verificationError);
                    createdDoc.verificationStatus = "Rejected";
                    createdDoc.rejectionReason = "License verification failed";
                    await createdDoc.save();
                }

                return createdDoc;
            })
        )

        user.documents = uploadedDocuments.map((doc) => doc._id);
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
        const { email, phone, password } = req.body
        
        if ((!email && !phone) || !password) {
            return res.status(400).json({
                success: false,
                message: `Please provide either email or phone, and password`,
            })
        }

        let user;
        
        if(email){
            user = await Guide.findOne({ email }).populate("additionalDetails")
        } else{
            user = await Guide.findOne({ phone }).populate("additionalDetails")
        }
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us. Please signup to Continue`,
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
        const loggedInUser = await Guide.findById(user._id).select("-password -refreshToken")

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
        const { email, phoneNumber } = req.body
        if((!email && !phoneNumber)){
            return res.status(400).json({
                success: false,
                message: `Please provide either email or phone number`,
            })
        }
        
        let checkUserPresent;
        if(email){
            checkUserPresent = await Guide.findOne({ email })
        } else if(phoneNumber){
            checkUserPresent = await Guide.findOne({ phoneNumber })
        }

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
                lowerCaseAlphabets: false,
                specialChars: false,
            })
        }

        const otpPayload = { otp }
        if(email){
            otpPayload.email = email
        } 
        if(phoneNumber){
            otpPayload.phoneNumber = phoneNumber
        }
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
        const userDetails = await Guide.findById(req.user.id)
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
        const updatedUserDetails = await GuideProfile.findByIdAndUpdate(
            req.user.id,
            { password: encryptedPassword },
            { new: true }
        )

        // manychat integration for integrating whatsapp pending
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
        await Guide.findByIdAndUpdate(req.user._id, {
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
    
        const user = await Guide.findById(decodedToken?._id)
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