import mongoose from "mongoose"
import Guide from "../models/Tourist.js"
import GuideProfile from "../models/GuideProfile.js"
import {uploadImageToCloudinary} from "../utils/imageUploader.js"

export const editProfile = async (req, res) => {
    try{
        const guideId = req.user.id;
        const { guideProfileUpdates, guideUpdates } = req.body;

        const guide = await Guide.findById(guideId);
        if(!guide){
            return res.status(404).json({
                success: false,
                message: "Guide not found",
            });
        }

        const restrictedFields = ["fullName", "email", "dateOfBirth", "gender"];
        for(let field of restrictedFields){
            if(guideUpdates?.[field]){
                return res.status(403).json({
                    success: false,
                    message: `Field '${field}' cannot be updated`,
                });
            }
        }

        if(guideUpdates && Object.keys(guideUpdates).length > 0){
            Object.assign(guide, guideUpdates);
        }
        
        await guide.save();
        // trigger verification process

        let guideProfile = await GuideProfile.findOne({ guide: guideId });
        if(!guideProfile){
            return res.status(404).json({
                success: false,
                message: "Guide profile not found",
            });
        }

        if(guideProfileUpdates?.location){
            return res.status(403).json({
                success: false,
                message: "Location cannot be updated. For updation, contact our team directly.",
            });
        }

        Object.assign(guideProfile, guideProfileUpdates);
        await guideProfile.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: guideProfile,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update profile",
            error: error.message,
        });
    }
}

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