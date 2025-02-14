const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")

const {
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
} = require("../controllers/profile")

router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router