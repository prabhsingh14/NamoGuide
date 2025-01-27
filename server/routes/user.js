const express = require("express")
const router = express.Router()

const {
    login,
    signup,
    sendotp,
    changePassword,
} = require("../controllers/Auth")

const {
    resetPasswordToken,
    resetPassword,
} = require("../controllers/resetPassword")

const { auth } = require("../middleware/auth")

router.post("/login", login)
router.post("/signup", signup)
router.post("/verify-email", sendotp)
router.post("/update-password", auth, changePassword)
router.post("/forgot-password-token", resetPasswordToken)
router.post("/forgot-password", resetPassword)

module.exports = router