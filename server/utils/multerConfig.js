import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Cloudinary Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Configure Multer for Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        const allowedFormats = ["png", "jpeg", "jpg", "pdf"];
        const fileExtension = file.mimetype.split("/")[1]; // Extract format from MIME type

        // Ensure format is allowed, otherwise default to "png"
        const format = allowedFormats.includes(fileExtension) ? fileExtension : "png";

        return {
            folder: "guide-verification",
            format: format,
            public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`, // Remove spaces
            resource_type: fileExtension === "pdf" ? "raw" : "image", // PDFs should be stored as "raw"
        };
    },
});

const upload = multer({ storage }).single("govtId"); // Expecting a single file

export { upload };