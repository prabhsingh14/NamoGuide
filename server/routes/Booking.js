import express from "express"
const router = express.Router()

// rating and reviews
import { createRating, getAverageRating, getAllRatingReview } from "../controllers/RatingAndReview.js"

// middleware
import { auth } from "../middleware/auth.tourist.js"

// routes
router.post("/createRating", auth, createRating) 
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRatingReview)

export default router;