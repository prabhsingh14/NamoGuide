// todo: view all tours with filtering options
import Tour from "../models/Tour.js";
import GuideProfile from "../models/GuideProfile.js";
import Guide from "../models/Guide.js";
import { getAverageRating } from "./RatingAndReview.js";
import Booking from "../models/Booking.js";

export const getGuideProfileForTour = async(req, res) => {
    try {
        const guideId = req.user.id;
        const guide = await Guide.findById(guideId).select("fullName phone");
        if (!guide) {
            return res.status(404).json({
                success: false,
                message: "Guide not found",
            });
        }

        const guideProfile = await GuideProfile.findOne({ guideId })
        .select("languages location profilePicture ratingAndReviews")
        .populate("ratingAndReviews", "rating");

        if(!guideProfile){
            return res.status(404).json({
                success: false,
                message: "Profile not found, please create your profile first!",
            });
        }

        let averageRating = null;
        if(guideProfile.ratingAndReviews && guideProfile.ratingAndReviews.length > 0){
            averageRating = getAverageRating(guideProfile._id);
        }

        return res.status(200).json({
            success: true,
            guide,
            guideProfile: {
                ...guideProfile.toObject(),
                averageRating,
            }
        });
    } catch (error) {
        console.error("Error fetching guide profile for tour:", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching guide profile for tour",
            error: error.message,
        });
    }
}

// set if guide is not verified, he can't create tours
export const createTour = async(req, res) => {
    try {
        const { description, startingPrice, maxAvailability, location } = req.body;
        const guideId = req.user.id;

        const guideProfile = await GuideProfile.findOne({ guideId });
        if (!guideProfile) {
            return res.status(404).json({
                success: false,
                message: "Profile not found, please create your profile first!",
            });
        }

        const guide = await Guide.findById(guideId);
        if(!guide || !guide.verificationStatus === "Approved") {
            return res.status(404).json({
                success: false,
                message: "Only verified guides can create tours!",
            });
        }

        const isLocationPermitted = guideProfile.location.some(loc => 
            loc.toLowerCase() === location.toLowerCase()
        );
        if (!isLocationPermitted) {
            return res.status(403).json({
                success: false,
                message: "You are not permitted to create tours in this location",
            });
        }

        const newTour = new Tour({
            guideId: guideProfile._id,
            description,
            startingPrice,
            maxAvailability,
            location,
        });

        await newTour.save();

        return res.status(201).json({
            success: true,
            message: "Tour created successfully",
            tour: newTour,
        });
    } catch (error) {
        console.error("Error creating tour:", error);
        return res.status(500).json({
            success: false,
            message: "Error creating tour",
            error: error.message,
        });
    }
}

export const editTour = async(req, res) => {
    try{
        const { tourId, description, location, startingPrice, maxAvailability } = req.body;
        const guideId = req.user.id;

        const tour = await Tour.findById(tourId);
        if(!tour){
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }

        const guideProfile = await GuideProfile.findOne({ guideId });
        if(!guideProfile){
            return res.status(404).json({
                success: false,
                message: "Profile not found",
            });
        }

        if(tour.guideId.toString() !== guideProfile._id.toString()){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to edit this tour",
            });
        }

        const bookings = await Booking.find({ 
            guideId: tour.guideId,
            status: { $in: ["Pending", "Confirmed"] },
        });

        if(bookings.length > 0){
            return res.status(400).json({
                success: false,
                message: "Cannot edit with existing bookings",
            });
        }

        if(location && location !== tour.location){
            const isLocationPermitted = guideProfile.location.some(loc => 
                loc.toLowerCase() === location.toLowerCase()
            );

            if(!isLocationPermitted){
                return res.status(403).json({
                    success: false,
                    message: "You are not permitted to create tours in this location",
                });
            }
        }

        const updatedTour = await Tour.findByIdAndUpdate(
            tourId,
            { 
                description: description || tour.description, 
                location: location || tour.location, 
                startingPrice: startingPrice || tour.startingPrice, 
                maxAvailability: maxAvailability || tour.maxAvailability 
            },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Tour updated successfully",
            tour: updatedTour,
        });
    } catch(error){
        console.error("Error editing tour:", error);
        return res.status(500).json({
            success: false,
            message: "Error editing tour",
            error: error.message,
        });
    }
}

export const deleteTour = async(req, res) => {
    try {
        const { tourId } = req.params;
        const guideId = req.user.id;

        const tour = await Tour.findById(tourId);
        if(!tour){
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }

        const guideProfile = await GuideProfile.findOne({ guideId });
        if(!guideProfile){
            return res.status(404).json({
                success: false,
                message: "Profile not found",
            });
        }

        if(tour.guideId.toString() !== guideProfile._id.toString()){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this tour",
            });
        }

        const bookings = await Booking.find({
            guideId: tour.guideId,
            status: { $in: ["Pending", "Confirmed"] },
        });

        if(bookings.length > 0){
            return res.status(400).json({
                success: false,
                message: "Cannot delete with existing bookings",
            });
        }

        await Tour.findByIdAndDelete(tourId);

        return res.status(200).json({
            success: true,
            message: "Tour deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting tour:", error);
        return res.status(500).json({
            success: false,
            message: "Error deleting tour",
            error: error.message,
        });
    }
}