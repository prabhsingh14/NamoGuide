import { contactUsEmail } from "../mail/contactFormRes.js";
import mailSender from "../utils/mailSender.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Get admin email from .env

// pending to be work with just phone number
const contactUsController = async (req, res) => {
    const { email, firstname, lastname, message, phoneNo, countrycode } = req.body;

    // Input validation
    if (!email || !firstname || !lastname || !message || !phoneNo || !countrycode) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        // Email content for user
        const userEmailContent = contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode);
        const userEmailRes = await mailSender(email, "Your Data sent successfully", userEmailContent);

        // Email content for admin
        const adminEmailContent = `
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
        `;
        const adminEmailRes = await mailSender(ADMIN_EMAIL, "New Contact Form Submission", adminEmailContent);

        if (!userEmailRes || !adminEmailRes) {
            return res.status(500).json({
                success: false,
                message: "Failed to send email",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Email sent to both user and admin successfully",
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong...",
            error: error.message,
        });
    }
};

export { contactUsController };