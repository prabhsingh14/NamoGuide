import React from 'react';
import Footer from '../components/layout/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FF6F0026] ">
            <div className="flex-1 py-10 px-5 sm:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Welcome to our platform! Please read these terms and conditions carefully before using our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 mb-4">
                        By accessing or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must discontinue use.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        2. Use of Services
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        3. Intellectual Property
                    </h2>
                    <p className="text-gray-600 mb-4">
                        All content on this platform, including text, images, and logos, is our intellectual property. You may not reproduce, distribute, or modify any part of it without prior written consent.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        4. Limitation of Liability
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We are not responsible for any damages resulting from your use of our services. This includes, but is not limited to, data loss or service interruptions.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        5. Amendments
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We reserve the right to update these terms and conditions at any time. Changes will be effective immediately upon posting on this page.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-600 mb-4">
                        If you have any questions about these terms, please contact us at{' '}
                        <a href="mailto:prabhsingh1407@gmail.com" className="text-blue-500 hover:underline">
                            prabhsingh1407@gmail.com
                        </a>.
                    </p>

                    <p className="text-gray-500 text-sm mt-10">Last updated: January 2025</p>
                </div>
            </div>

            {/* Footer Section */}
            <Footer className="w-full" />
        </div>
    );
};

export default TermsAndConditions;