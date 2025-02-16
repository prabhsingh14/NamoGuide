const express = require("express")
const router = express.Router()

const {
    login,
    signup,
    sendotp,
    changePassword,
    logout,
    refreshAccessToken
} = require("../controllers/Auth")

const {
    resetPasswordToken,
    resetPassword,
} = require("../controllers/resetPassword")

const { auth } = require("../middleware/auth")

router.post("/login", login)
router.post("/signup", signup)
router.post("/verify-email", sendotp)

// secure routes
router.post("/update-password", auth, changePassword)
router.post("/forgot-password-token", auth, resetPasswordToken)
router.post("/forgot-password", auth, resetPassword)
router.post("/logout", auth, logout)
router.post("/refresh-token", auth, refreshAccessToken)

module.exports = router

//routes for login using google and facebook for tourists pending