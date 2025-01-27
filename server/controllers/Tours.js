const Tour = require("../models/Tours"); 
const Booking = require("../models/Booking"); 

exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find(); // Fetch all tours
        res.status(200).json({ 
            success: true, 
            data: tours 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Failed to fetch tours", error 
        });
    }
};

exports.getTourById = async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.status(404).json({ 
                success: false, 
                message: "Tour not found" 
            });
        }

        res.status(200).json({ 
            success: true, 
            data: tour 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Failed to fetch tour", error 
        });
    }
};

exports.searchTours = async (req, res) => {
    try {
        const { query, location, date } = req.query; 
        const filter = {};

        if (query) {
            filter.title = { $regex: query, $options: "i" }; // Case-insensitive search
        }
        if (location) {
            filter.location = { $regex: location, $options: "i" };
        }
        if (date) {
            filter.date = new Date(date); // Match specific date
        }

        const tours = await Tour.find(filter);
        
        res.status(200).json({ 
            success: true, 
            data: tours 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Failed to search tours", error 
        });
    }
};

exports.bookTour = async (req, res) => {
    try {
        const { tourId, userId, paymentDetails } = req.body;
        const tour = await Tour.findById(tourId);
        
        if (!tour) {
            return res.status(404).json({ 
                success: false, 
                message: "Tour not found" 
            });
        }

        if (tour.availableSlots <= 0) {
            return res.status(400).json({ 
                success: false, 
                message: "No available slots for this tour" 
            });
        }

        const booking = new Booking({
            userId,
            tourId,
            paymentDetails,
            status: "Pending", // Initially pending, can be updated later
        });

        await booking.save();

        tour.availableSlots -= 1;
        await tour.save();

        res.status(201).json({ 
            success: true, 
            message: "Tour booked successfully", 
            data: booking 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Failed to book tour", error 
        });
    }
};
