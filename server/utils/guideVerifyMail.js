import nodemailer from "nodemailer";

const sendVerificationEmail = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            secure: false,
        });

        let info = await transporter.sendMail({
            from: `"NamoGuide" <${process.env.MAIL_USER}>`, // sender address
            to: email, // list of receivers
            subject: title, // Subject line
            html: body, // html body
        });

        console.log(info.response);
        return info;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};

export default sendVerificationEmail;