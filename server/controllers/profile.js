// work pending


const Profile = require("../models/Profile")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")

exports.updateProfile = async (req, res) => {
    try {
        const {
            firstName = "",
            lastName = "",
            dateOfBirth = "",
            about = "",
            contactNumber = "",
            gender = "",
        } = req.body
        const id = req.user.id
        const userDetails = await User.findById(id)
        const profile = await Profile.findById(userDetails.additionalDetails)

        const user = await User.findByIdAndUpdate(id, {
            firstName,
            lastName,
        })
        await user.save()

        profile.dateOfBirth = dateOfBirth
        profile.about = about
        profile.contactNumber = contactNumber
        profile.gender = gender

        await profile.save()

        const updatedUserDetails = await User.findById(id)
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

exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id
        const userDetails = await User.findById(id)
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

exports.updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture
        const userId = req.user.id
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        const updatedProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { image: image.secure_url },
            { new: true }
        )
        res.send({
            success: true,
            message: `Image Updated successfully`,
            data: updatedProfile,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
