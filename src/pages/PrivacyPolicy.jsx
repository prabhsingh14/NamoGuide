import React from 'react';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FF6F0026]">
            <div className="flex-1 py-10 px-5 sm:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We collect personal information that you voluntarily provide to us, such as your name, email address, and payment details. Additionally, we collect data about your interactions with our platform, including IP address, browser type, and usage patterns.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        2. How We Use Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The information we collect is used to:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Provide and improve our services</li>
                            <li>Process transactions and send notifications</li>
                            <li>Ensure platform security and prevent fraud</li>
                            <li>Respond to customer support inquiries</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        3. Sharing Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We do not sell your personal information. However, we may share it with trusted third-party service providers to facilitate our services, comply with legal obligations, or protect our platform and users.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        4. Data Security
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        5. Your Rights
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at{' '}
                        <a href="mailto:privacy@example.com" className="text-blue-500 hover:underline">
                            prabhsingh1407@gmail.com
                        </a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                        6. Changes to This Policy
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will include the effective date.
                    </p>

                    <p className="text-gray-500 text-sm mt-10">
                        Last updated: January 2025
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <Footer className="w-full" />
        </div>
    );
};

export default PrivacyPolicy;