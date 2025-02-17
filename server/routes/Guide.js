import express from "express";
import { getAvailableGuides } from "../controllers/Guide.js";

const router = express.Router();

router.get("/get-guides", getAvailableGuides);       

module.exports = router;
