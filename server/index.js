import express from "express";
import userRoutes from "./routes/User.js";
import contactUsRoute from "./routes/Contact.js"
import touristProfileRoutes from "./routes/TouristProfile.js";
import database from "./config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { cloudinaryConnect } from "./config/cloudinary.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

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

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/contact", contactUsRoute);
app.use("/api/v1/tourist", touristProfileRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});