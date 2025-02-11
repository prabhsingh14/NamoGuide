const { contactUsEmail } = require("../mail/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req, res) => {
    const { email, firstname, lastname, message, phoneNo, countrycode } = req.body;

    // Input validation
    if (!email || !firstname || !lastname || !message || !phoneNo || !countrycode) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        const emailContent = contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode);
        const emailRes = await mailSender(email, "Your Data sent successfully", emailContent);

        if (!emailRes) {
            return res.status(500).json({
                success: false,
                message: "Failed to send email",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
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