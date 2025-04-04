import React from 'react';
import Footer from '../components/layout/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FF6F0026]">
            <div className="flex-1 py-10 px-5 sm:px-10 lg:px-20 
                [@media(max-width:768px)]:px-6 
                [@media(max-width:425px)]:px-4 
                [@media(max-width:320px)]:px-2">
                
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 
                    [@media(max-width:768px)]:p-6 
                    [@media(max-width:425px)]:p-4 
                    [@media(max-width:320px)]:p-3">
                    
                    <h1 className="text-3xl font-bold mb-6 text-gray-800 
                        [@media(max-width:768px)]:text-2xl 
                        [@media(max-width:425px)]:text-xl 
                        [@media(max-width:320px)]:text-lg">
                        Terms and Conditions
                    </h1>
                    
                    <p className="text-gray-600 mb-4 
                        [@media(max-width:425px)]:text-sm 
                        [@media(max-width:320px)]:text-xs">
                        Welcome to our platform! Please read these terms and conditions carefully before using our services.
                    </p>

                    {/* Sections with responsive font sizes */}
                    {[
                        { title: "1. Acceptance of Terms", content: "By accessing or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must discontinue use." },
                        { title: "2. Use of Services", content: "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment." },
                        { title: "3. Intellectual Property", content: "All content on this platform, including text, images, and logos, is our intellectual property. You may not reproduce, distribute, or modify any part of it without prior written consent." },
                        { title: "4. Limitation of Liability", content: "We are not responsible for any damages resulting from your use of our services. This includes, but is not limited to, data loss or service interruptions." },
                        { title: "5. Amendments", content: "We reserve the right to update these terms and conditions at any time. Changes will be effective immediately upon posting on this page." },
                        { title: "6. Contact Us", content: "If you have any questions about these terms, please contact us at " }
                    ].map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700 
                                [@media(max-width:768px)]:text-lg 
                                [@media(max-width:425px)]:text-base 
                                [@media(max-width:320px)]:text-sm">
                                {section.title}
                            </h2>
                            <p className="text-gray-600 mb-4 
                                [@media(max-width:425px)]:text-sm 
                                [@media(max-width:320px)]:text-xs">
                                {section.content}  
                                {section.title === "6. Contact Us" && (
                                    <a href="mailto:prabhsingh1407@gmail.com" className="text-blue-500 hover:underline">
                                        prabhsingh1407@gmail.com
                                    </a>
                                )}
                            </p>
                        </div>
                    ))}

                    <p className="text-gray-500 text-sm mt-10 
                        [@media(max-width:425px)]:text-xs 
                        [@media(max-width:320px)]:text-[10px]">
                        Last updated: January 2025
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <Footer className="w-full" />
        </div>
    );
};

export default TermsAndConditions;
