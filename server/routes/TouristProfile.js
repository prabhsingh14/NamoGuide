import express from "express";
import {
    editProfile,
    deleteAccount,
    getUserDetails,
    updateDisplayPicture
} from "../controllers/Tourist-Profile.js";
import auth from "../middleware/auth.tourist.js";

const router = express.Router();

// Routes
router.post("/edit-profile", auth, editProfile);
router.post("/delete-account", auth, deleteAccount);
router.get("/get-user-details", auth, getUserDetails);
router.post("/update-display-picture", auth, updateDisplayPicture);

export default router; 