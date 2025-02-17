import express from "express";
import { createBooking, getTouristBookings, getGuideBookings } from "../controllers/Booking.js";

const router = express.Router();

router.post("/create-booking", createBooking);  
router.get("/tourist/:touristId", getTouristBookings);  
router.get("/guide/:guideId", getGuideBookings);  

export default router;
