const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")

const {
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getPastBookings,
} = require("../controllers/profile")

router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.get("/getPastBookings", auth, getPastBookings)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router