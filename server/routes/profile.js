const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")

const {
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getPastBookings,
    cancelBooking,
} = require("../controllers/profile")

router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.get("/getPastBookings", auth, getPastBookings)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.put("/cancelBooking", auth, cancelBooking)

module.exports = router