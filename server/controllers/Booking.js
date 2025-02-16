// work pending


import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import Tours from "../models/Tours.js";
import User from "../models/User.js";
import { mailSender } from "../utils/mailSender.js";
import { tourBookedEmail } from "../mail/tourBookedEmail.js";

exports.bookTourists = async (tours, userId, date, adults, children, res) => {
    if (!tours || !userId || !date || !numberOfPeople) {
        return res.status(400).json({ 
            success: false, 
            message: "Please provide all details" 
        })
    }

    const session = await mongoose.startSession();
    session.startTransaction(); // Start a new transaction, so that we can rollback if any error occurs

    try {
        for (const tourId of tours) {
            const bookedTour = await Tours.findOneAndUpdate(
                { _id: tourId },
                { $push: { touristsBooked: userId } },
                { new: true }
            )
    
            if (!bookedTour) {
                await session.abortTransaction();
                session.endSession();
    
                return res.status(500).json({ 
                    success: false, 
                    error: "Tour not found" 
                })
            }
            
            const bookedTourist = await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        tours: tourId,
                    },
                },
                { new: true, session }
            );
    
            if(!bookedTourist) {
                await session.abortTransaction();
                session.endSession();
    
                return res.status(500).json({ 
                    success: false, 
                    error: "User not found" 
                })
            }
            
            const amountPaidForAdults = bookedTour.price * adults;
            const amountPaidForChildren = (bookedTour.price / 2) * children;
            const amountPaid = amountPaidForAdults + amountPaidForChildren;

            const newBooking = new Booking({
                userId,
                tourId,
                date,
                numberOfPeople,
                amount: amountPaid,
                status: "Confirmed",
                createdAt: new Date(),
            });

            await newBooking.save({ session });

            await mailSender(
                bookedTourist.email,
                `Successfully Enrolled into ${bookedTour.tourName}`,
                tourBookedEmail(
                    bookedTour.tourName,
                    `${bookedTourist.firstName} ${bookedTourist.lastName}`
                )
            )
        }

        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            success: true,
            message: "Booking confirmed!",
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("Transaction error", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong...",
            error: error.message,
        });
    }
}

exports.getPastBookings = async (req, res) => {
    try {
        const userId = req.user.id;
        const userDetails = await User.findOne({ _id: userId })
            .populate({
                path: "tours",
                select: "title description location price availableDates ratings touristsBooked",
            })
            .exec();

        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: `User with id ${userId} not found.`,
            });
        }

        const pastTours = userDetails.tours.filter((tour) => {
            // Filter tours where the latest available date is in the past
            const latestDate = Math.max(...tour.availableDates.map(date => new Date(date)));
            return new Date(latestDate) < new Date();
        });

        // Format the data to include necessary details
        const formattedTours = pastTours.map((tour) => ({
            title: tour.title,
            description: tour.description,
            location: tour.location,
            price: tour.price,
            ratings: tour.ratings,
            totalTourists: tour.touristsBooked.length,
            lastAvailableDate: Math.max(...tour.availableDates.map(date => new Date(date))),
        }));

        return res.status(200).json({
            success: true,
            data: formattedTours,
        });
    } catch (error) {
        console.error("Error fetching past bookings:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching past bookings.",
        });
    }
};

// refund system pending
exports.cancelBooking = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
        const { bookingId } = req.params;
        const touristId = req.user.id;

        // Find the booking
        const booking = await Booking.findById(bookingId).session(session);
        if (!booking) {
            await session.abortTransaction();
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        if (booking.userId.toString() !== touristId) {
            await session.abortTransaction();
            return res.status(403).json({
                success: false,
                message: "You are not authorized to cancel this booking",
            });
        }

        if (booking.status === "Cancelled") {
            await session.abortTransaction();
            return res.status(400).json({
                success: false,
                message: "Booking has already been cancelled",
            });
        }

        // Find the associated tour
        const tour = await Tours.findById(booking.tourId).session(session);
        if (!tour) {
            await session.abortTransaction();
            return res.status(404).json({
                success: false,
                message: "Associated tour not found",
            });
        }

        // Update booking status to "Cancelled"
        booking.status = "Cancelled";
        await booking.save({ session });

        // Remove tourist from `touristsBooked` array
        tour.touristsBooked = tour.touristsBooked.filter(
            (id) => id.toString() !== touristId
        );

        // Increase available slots
        tour.availableSlots += booking.numberOfPeople.adults + booking.numberOfPeople.children;
        await tour.save({ session });

        // Commit transaction
        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            success: true,
            message: "Booking cancelled successfully",
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("Error cancelling booking:", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while cancelling booking",
            error: error.message,
        });
    }
};


// update booking, AI recommend system, wishlist pending
exports.updateBooking = async (req, res) => {
    //also handle pricing and payment
}