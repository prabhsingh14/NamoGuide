import React from "react";
import ContactUsForm from "./contactUsForm";

const ContactForm = () => {
    return (
        <div className="border border-[#1976D2] text-black rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold text-black">
                Got a vision? Let&apos;s revolutionize travel together!
            </h1>
            <p className="text-black text-lg leading-8">
                Share your ideas or feedback to help us make Tour-Ease the ultimate platform for connecting tourists and guides.
            </p>
            <div className="mt-7">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactForm;