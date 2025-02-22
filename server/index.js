import express from "express";
import userRoutes from "./routes/user.js";
import profileRoutes from "./routes/profile.js";
import toursRoutes from "./routes/Tours.js";
import paymentRoutes from "./routes/Payments.js";
import contactUsRoute from "./routes/Contact.js";
import database from "./config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { cloudinaryConnect } from "./config/cloudinary.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

cloudinaryConnect();

// integration with 0Auth pending	

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/tours", toursRoutes); //frontend updation pending
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/contact", contactUsRoute);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// chat system, blogs, notify feature pending