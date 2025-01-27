const express = require("express")
const router = express.Router()
const {
    capturePayment,
    verifyPayment,
    sendPaymentSuccessEmail,
} = require("../controllers/payments")
const { auth } = require("../middleware/auth")

router.post("/capturePayment", auth, capturePayment)
router.post("/verifyPayment", auth, verifyPayment)

router.post(
    "/sendPaymentSuccessEmail",
    auth,
    sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

module.exports = router