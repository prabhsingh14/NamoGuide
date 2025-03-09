import mongoose from "mongoose"
import Guide from "../models/Guide.js"
import GuideProfile from "../models/GuideProfile.js"
import { verifyGuide } from "./GuideVerification.js"
import { uploadImageToCloudinary } from "../utils/imageUploader.js"

export const editProfile = async (req, res) => {
    // on hold
}

// to automatically add the details from registration to the profile
export const getGuideProfile = async (req, res) => {
    try {
        const guideId = req.user._id; 

        // Find guide and populate the additionalDetails
        const guide = await Guide.findById(guideId)
            .populate("additionalDetails")
            .populate("documents");

        if (!guide) {
            return res.status(404).json({
                success: false,
                message: "Guide not found"
            });
        }

        const guideProfile = await GuideProfile.findOne({ guideId });

        // Prepare response data
        const profileData = {
            guide: {
                fullName: guide.fullName,
                email: guide.email,
                dateOfBirth: guide.dateOfBirth,
                phone: guide.phone,
                gender: guide.gender,
                address: guide.address,
                verificationStatus: guide.verificationStatus
            },
            profile: guideProfile ? {
                about: guideProfile.about || "",
                languages: guideProfile.languages || [],
                location: guideProfile.location || [],
                availability: guideProfile.avilability || [],
                profilePicture: guideProfile.profilePicture || ""
            } : {},
            documents: guide.documents || []
        };

        return res.status(200).json({
            success: true,
            data: profileData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const guideId = req.user.id;
        const guide = await Guide.findById({ _id: guideId });

        if (!guide) {
            return res.status(404).json({
                success: false,
                message: "Guide not found",
            });
        }

        if (guide.additionalDetails) {
            await GuideProfile.findByIdAndDelete(guide.additionalDetails);
        }

        await GuideProfile.updateMany(
            { touristsServed: guideId },
            { $pull: { touristsServed: guideId } }
        );

        await Guide.findByIdAndDelete({ _id: guideId });
        return res.status(200).json({
            success: true,
            message: "Account deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete account",
            error: error.message,
        })
    }
}

export const getUserDetails = async (req, res) => {
    try {
        const id = req.user.id
        const userDetails = await Guide.findById(id)
        .populate("additionalDetails")
        .exec()

        res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: userDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture;
        let userId = req.user.id; // ID of the guide

        console.log("Received User ID:", userId);

        if (!displayPicture) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
        }

        userId = new mongoose.Types.ObjectId(userId); // Convert to ObjectId

        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        );

        console.log("Uploaded Image URL:", image.secure_url);

        // Check if guide profile exists
        const existingProfile = await GuideProfile.findOne({ guideId: userId });
        console.log("Existing Profile:", existingProfile);

        if (!existingProfile) {
            return res.status(404).json({
                success: false,
                message: "Guide profile not found",
            });
        }

        // Update profile picture
        const updatedProfile = await GuideProfile.findOneAndUpdate(
            { guideId: userId }, 
            { image: image.secure_url },
            { new: true }
        );

        if (!updatedProfile) {
            return res.status(500).json({
                success: false,
                message: "Failed to update image",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Image updated successfully",
            data: updatedProfile,
        });
    } catch (error) {
        console.error("Error updating display picture:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// availability management