import express from "express";
import {
    login,
    signup,
    sendotp,
    changePassword,
    logout
} from "../controllers/Auth.tourist.js";
import {
    resetPasswordToken,
    resetPassword
} from "../controllers/resetPassword.js"; 
import auth from "../middleware/auth.tourist.js";

const router = express.Router();

// Routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);
router.post("/logout", auth, logout);
router.post("/changepassword", auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

export default router; 