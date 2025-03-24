import React from 'react';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FF6F0026]">
            {/* Main Content */}
            <div className="flex-1 py-6 [@media(max-width:425px)]:py-4 [@media(max-width:375px)]:py-3 [@media(max-width:320px)]:py-2 px-4 [@media(max-width:425px)]:px-3 [@media(max-width:375px)]:px-2 [@media(max-width:320px)]:px-1 sm:px-6 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 [@media(max-width:425px)]:p-4 [@media(max-width:375px)]:p-3 [@media(max-width:320px)]:p-2">
                    {/* Privacy Policy Heading */}
                    <h1 className="text-2xl [@media(max-width:425px)]:text-xl [@media(max-width:375px)]:text-lg [@media(max-width:320px)]:text-base font-bold mb-4 text-gray-800">
                        Privacy Policy
                    </h1>

                    {/* Introduction */}
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                    </p>

                    {/* Section 1: Information We Collect */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        1. Information We Collect
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        We collect personal information that you voluntarily provide to us, such as your name, email address, and payment details. Additionally, we collect data about your interactions with our platform, including IP address, browser type, and usage patterns.
                    </p>

                    {/* Section 2: How We Use Your Information */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        2. How We Use Your Information
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        The information we collect is used to:
                        <ul className="list-disc ml-6 mt-2">
                            <li className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px]">Provide and improve our services</li>
                            <li className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px]">Process transactions and send notifications</li>
                            <li className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px]">Ensure platform security and prevent fraud</li>
                            <li className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px]">Respond to customer support inquiries</li>
                        </ul>
                    </p>

                    {/* Section 3: Sharing Your Information */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        3. Sharing Your Information
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        We do not sell your personal information. However, we may share it with trusted third-party service providers to facilitate our services, comply with legal obligations, or protect our platform and users.
                    </p>

                    {/* Section 4: Data Security */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        4. Data Security
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    {/* Section 5: Your Rights */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        5. Your Rights
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at{' '}
                        <a href="mailto:prabhsingh1407@gmail.com" className="text-blue-500 hover:underline">
                            prabhsingh1407@gmail.com
                        </a>.
                    </p>

                    {/* Section 6: Changes to This Policy */}
                    <h2 className="text-xl [@media(max-width:425px)]:text-lg [@media(max-width:375px)]:text-base [@media(max-width:320px)]:text-sm font-semibold mt-6 mb-2 text-gray-700">
                        6. Changes to This Policy
                    </h2>
                    <p className="text-sm [@media(max-width:425px)]:text-xs [@media(max-width:375px)]:text-[11px] [@media(max-width:320px)]:text-[10px] text-gray-600 mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will include the effective date.
                    </p>

                    {/* Last Updated */}
                    <p className="text-xs [@media(max-width:425px)]:text-[11px] [@media(max-width:375px)]:text-[10px] [@media(max-width:320px)]:text-[9px] text-gray-500 mt-10">
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