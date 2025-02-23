import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        touristId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Tourist", 
            required: true,
            index: true,
        },
        guideId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Guide",
            required: true,
            index: true,
        },
        date: { 
            type: Date, 
            required: true,
            index: true,
        },
        startTime: { 
            type: String,
            required: true,
        },
        endTime: { 
            type: String,
            required: true,
        },
        numberOfPeople: { 
            type: Number, 
            required: true,
            min: 1, //if > 7, then need to book one more guide -> will be handled in controllers and frontend
        },
        amount: { 
            type: Number, 
            required: true 
        },
        status: { 
            type: String, 
            enum: ["Pending", "Confirmed", "Cancelled", "Completed"], 
            default: "Pending" 
        },
        cancellationReason: { 
            type: String, 
            trim: true,
            default: "", 
        },
        paymentId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Payment", 
            required: true 
        },
    },
    { timestamps: true }
);

bookingSchema.index({ guideId: 1, date: 1, startTime: 1, endTime: 1 });

bookingSchema.statics.isSlotAvailable = async function (guideId, date, startTime, endTime) {
    const overlappingBooking = await this.findOne({
        guideId,
        date,
        $or: [
            { startTime: { $lt: endTime, $gte: startTime } },
            { endTime: { $gt: startTime, $lte: endTime } }
        ]
    }).lean();
    return !overlappingBooking;
};

const Booking = mongoose.model("Booking", OTPSchema);
export default Booking;