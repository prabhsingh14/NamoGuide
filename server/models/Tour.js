import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    guideId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GuideProfile",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startingPrice: {
        type: Number,
        required: true, //this is the starting price of the tour i.e. per person per day
    },
    maxAvailability:{
        type: Number,
        required: true, //maximum days available, nights will be calculated
    }
}, { timestamps: true });

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;