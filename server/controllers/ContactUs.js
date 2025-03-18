// contacting via whatsapp pending
import { contactUsEmail } from "../mail/contactFormRes.js";
import mailSender from "../utils/mailSender.js";
import dotenv from "dotenv";

dotenv.config(); 

const ADMIN_EMAIL = process.env.ADMIN_EMAIL; 

const contactUsController = async (req, res) => {
    const { email, firstname, lastname, message, phoneNo, countrycode } = req.body;

    // Input validation - ensure at least one contact method is provided
    if ((!email && !phoneNo) || !firstname || !lastname || !message) {
        return res.status(400).json({
            success: false,
            message: "Name, message, and at least one contact method (email or phone) are required",
        });
    }

    // If phone number is provided, country code is required
    if (phoneNo && !countrycode) {
        return res.status(400).json({
            success: false,
            message: "Country code is required when providing a phone number",
        });
    }

    try {
        // Prepare admin notification
        const adminEmailContent = `
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${phoneNo ? `<p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>` : ''}
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
        `;
        
        // Always notify admin via email
        const adminEmailRes = await mailSender(ADMIN_EMAIL, "New Contact Form Submission", adminEmailContent);

        // Initialize response tracking
        let userNotificationSent = false;
        let notificationMethod = [];

        // Send confirmation to user via email if provided
        if (email) {
            const userEmailContent = contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode);
            const userEmailRes = await mailSender(email, "Your Data sent successfully", userEmailContent);
            
            if (userEmailRes) {
                userNotificationSent = true;
                notificationMethod.push("email");
            }
        }

        // Send confirmation to user via whatsapp if phone provided
        if (phoneNo) {
            // pending
        }

        // Check if any notification to user was successful
        if (!userNotificationSent) {
            return res.status(500).json({
                success: false,
                message: "Failed to send confirmation to user",
            });
        }

        // Check if admin notification was successful
        if (!adminEmailRes) {
            return res.status(500).json({
                success: false,
                message: "Failed to notify admin about this contact request",
            });
        }

        return res.status(200).json({
            success: true,
            message: `Your message has been sent successfully. We've sent a confirmation via ${notificationMethod.join(" and ")}.`,
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while processing your request",
            error: error.message,
        });
    }
};

export { contactUsController };