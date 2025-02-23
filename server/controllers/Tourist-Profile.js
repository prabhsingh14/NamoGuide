import mongoose from "mongoose"
import TouristProfile from "../models/TouristProfile.js"
import Tourist from "../models/Tourist.js"
import GuideProfile from "../models/GuideProfile.js"
import {uploadImageToCloudinary} from "../utils/imageUploader.js"

export const editProfile = async (req, res) => {
    try {
        const {
            firstName = "",
            lastName = "",
            contactNumber = "",
            gender = "",
        } = req.body
        const id = req.user.id
        const userDetails = await Tourist.findById(id)

        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found!",
            })
        }

        const profile = await TouristProfile.findById(userDetails.additionalDetails)

        const user = await Tourist.findByIdAndUpdate(id, {
            firstName,
            lastName,
        })
        await user.save()

        profile.contactNumber = contactNumber
        profile.gender = gender

        await profile.save()

        const updatedUserDetails = await Tourist.findById(id)
        .populate("additionalDetails")
        .exec()

        return res.json({
            success: true,
            message: "Profile updated successfully",
            updatedUserDetails,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await Tourist.findById({ _id: id });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        await TouristProfile.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(user.additionalDetails),
        });

        for(const guideId of user.guidesBooked){
            await GuideProfile.findByIdAndUpdate(
                guideId,
                { $pull: { touristsServed: id } },
                { new: true }
            );
        }

        await Tourist.findByIdAndDelete({ _id: id });
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
        const userDetails = await Tourist.findById(id)
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
        let userId = req.user.id; // ID of the tourist

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

        // Check if tourist profile exists
        const existingProfile = await TouristProfile.findOne({ tourist: userId });
        console.log("Existing Profile:", existingProfile);

        if (!existingProfile) {
            return res.status(404).json({
                success: false,
                message: "Tourist profile not found",
            });
        }

        // Update profile picture
        const updatedProfile = await TouristProfile.findOneAndUpdate(
            { tourist: userId }, // Find profile by tourist ID
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
