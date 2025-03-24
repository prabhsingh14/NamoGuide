import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";
import emailTemplate from "../mail/emailVerificationTemplate.js";

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: false,
	},
	phoneNumber: {
		type: String,
		required: false,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

OTPSchema.pre("validate", function(next) {
	if(!this.email && !this.phoneNumber){
		next(new Error('Either email or phone number is required'));
	} else{
		next();
	}
})

async function sendVerificationEmail(email, otp) {
    try {
        console.log("Attempting to send email to:", email);
        console.log("Generated OTP:", otp);

        const mailResponse = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        );

        console.log("Email sent successfully: ", mailResponse.response);
    } catch (error) {
        console.error("Error occurred while sending email: ", error);
        throw error;
    }
}


//sendVerificationWhatsApp

// post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
    console.log("New document saved to database");

    // Only send a verification message when a new document is created
    if (this.isNew) {
        if (this.email) {
            await sendVerificationEmail(this.email, this.otp);
        }
        if (this.phoneNumber) {
            // sendVerificationWhatsApp(this.phoneNumber, this.otp);
        }
    }
    next();
});

const OTP = mongoose.model("OTP", OTPSchema);
export default OTP;