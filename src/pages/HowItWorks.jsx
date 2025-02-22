import { FaUserTie, FaMapMarkedAlt, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/layout/Footer";

// FAQs data
const faqs = [
    {
        question: "How do I sign up as a tourist?",
        answer: "Simply click on the Sign-Up button, fill in your details, and you're ready to start exploring tours and booking guides!",
    },
    {
        question: "How do I become a verified guide?",
        answer: "Guides can apply via the registration page, but they will be manually verified by our team to ensure authenticity.",
    },
    {
        question: "How do I make a payment for the tour?",
        answer: "You can make an advance payment online during the booking process to confirm your slot.",
    },
    {
        question: "What happens if I need to cancel my tour?",
        answer: (
            <div>
                <p>If you wish to cancel your tour, the following cancellation policies apply:</p>
                <ul>
                    <li>
                        <strong>For cancellations made 48 hours or more before the scheduled tour date:</strong> 
                        <br/>
                        A cancellation fee of 4% of the total tour price will be applied.
                    </li>
                    <li>
                        <strong>For cancellations made between 24 to 48 hours before the scheduled tour date:</strong> A cancellation fee of 10% of the total tour price will be applied.
                    </li>
                    <li>
                        <strong>For cancellations made 24 hours or less before the scheduled tour date:</strong> Unfortunately, no refund will be provided.
                    </li>
                </ul>
                <p>This policy helps ensure that our guides are fairly compensated for their time and effort.</p>
                <p>We appreciate your understanding and encourage you to carefully consider your booking before making any cancellations. Thank you for your cooperation.</p>
            </div>
        ),
    },
];

// Steps data for tourists
const touristSteps = [
    {
        title: "Sign Up",
        description: "Tourists create an account on NamoGuide.",
        icon: <FaUserTie size={40} className="text-blue-500" />,
        link: "/signup",
    },
    {
        title: "Explore & Book",
        description: "Tourists browse verified guides and book a tour.",
        icon: <FaMapMarkedAlt size={40} className="text-green-500" />,
        link: "/",
    },
    {
        title: "Secure Payment",
        description: "Tourists make an advance payment to confirm their slot, and guides are paid in-person.",
        icon: <FaCreditCard size={40} className="text-purple-500" />,
    },
    {
        title: "Enjoy the Tour",
        description: "Meet your guide and experience a memorable journey!",
        icon: <FaCheckCircle size={40} className="text-yellow-500" />,
    },
];

// Steps data for guides
const guideSteps = [
    {
        title: "Sign Up",
        description: "Guides can apply and provide necessary details to be verified by the platform.",
        icon: <FaUserTie size={40} className="text-blue-500" />,
        link: "/signup-guide",
    },
    {
        title: "Get Verified",
        description: "Guides are manually verified by the platform to ensure authenticity and safety.",
        icon: <FaCheckCircle size={40} className="text-yellow-500" />,
    },
    {
        title: "Complete Profile",
        description: "After verification, our team will call the guide to discuss some final details.",
        icon: <FaMapMarkedAlt size={40} className="text-green-500" />,
        link: "/profile",
    },
    {
        title: "Start Taking Tours",
        description: "Once verified, their profile is uploaded on the platform. And, our informed about bookings via mail/whatsapp.",
        icon: <FaCreditCard size={40} className="text-purple-500" />,
    },
];

export default function HowItWorks() {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="container mx-auto px-6 py-12 min-h-screen">
                <h2 className="text-4xl font-bold text-center mb-8 text-[#1D4ED8]">How It Works</h2>

                {/* For Tourists Section */}
                <h3 className="text-3xl font-semibold text-center mb-6 text-[#F97316]">For Tourists</h3>
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {touristSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl text-center cursor-pointer"
                            onClick={() => navigate(step.link)}
                        >
                            {step.icon}
                            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* For Guides Section */}
                <h3 className="text-3xl font-semibold text-center mb-6 text-[#F97316]">For Guides</h3>
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {guideSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl text-center cursor-pointer"
                            onClick={() => navigate(step.link)}
                        >
                            {step.icon}
                            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.description}</p>
                        </motion.div>
                    ))}

                    <p className="text-gray-600 text-center col-span-4 mt-4">
                        Don't worry! We are working 10+ hours a day to make a perfect dashboard for guides, giving them more control over their tours,
                        while ensuring authenticity and safety for tourists.
                    </p>
                </div>

                {/* FAQ Section */}
                <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-[#1D4ED8]">FAQs</h2>
                <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 shadow-lg rounded-lg mb-4">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="text-gray-600 mt-2">
                                {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                            </div>
                        )}
                    </div>
                ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}