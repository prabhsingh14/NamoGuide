import { FaRobot, FaRegLifeRing, FaCheckCircle } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

// New Launches data
const futureFeatures = [
    {
        title: "Guide Dashboard",
        description: "A comprehensive dashboard for guides to manage their tours, bookings, and customer interactions. The dashboard will offer enhanced control and insights into their business.",
        icon: <FaTrophy size={40} className="text-blue-500" />,
    },
    {
        title: "AI System",
        description: "A smart AI-driven recommendation system that personalizes tour and guide suggestions for tourists based on preferences, location, and previous activities.",
        icon: <FaRobot size={40} className="text-green-500" />,
    },
    {
        title: "SOS System",
        description: "A real-time emergency SOS system for both tourists and guides to ensure safety during tours. Tourists can report emergencies, and guides can receive alerts in case of danger.",
        icon: <FaRegLifeRing size={40} className="text-red-500" />,
    },
];

// MVP Features (Already Launched)
const mvpFeatures = [
    {
        title: "Guide Booking System",
        description: "Tourists can book verified guides for their tours, ensuring they get a safe and authentic experience.",
        icon: <FaCheckCircle size={40} className="text-yellow-500" />,
    },
    {
        title: "Secure Payment Gateway",
        description: "Tourists make secure advance payments for bookings, and guides are compensated directly after the tour.",
        icon: <FaCheckCircle size={40} className="text-yellow-500" />,
    },
];

export default function NewLaunches() {
    return (
        <div>
            <div className="container mx-auto px-6 py-12 min-h-screen">
                <h2 className="text-4xl font-bold text-center mb-8 text-[#1D4ED8]">Let's make travel easier and safer!</h2>

                {/* MVP Features Section */}
                <h3 className="text-3xl font-semibold text-center mb-6 text-[#F97316]">MVP Features</h3>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl">
                        {mvpFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl text-center"
                            >
                                {feature.icon}
                                <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Future Features Section */}
                <h3 className="text-3xl font-semibold text-center mb-6 text-[#F97316]">Upcoming Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {futureFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl text-center"
                        >
                            {feature.icon}
                            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}