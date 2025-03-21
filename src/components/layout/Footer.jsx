import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-white mt-12 p-8 shadow-md">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="flex flex-col">
                    <Link to={'/'} className='flex flex-col' style={{ fontFamily: '"Segoe Script", cursive' }}>
                        <p className='text-[#1D4ED8] text-[32px] leading-[51.39px] font-bold'>
                            Namo<span className='text-[#F97316]'>Guide</span>
                        </p>
                        <p className='text-[12px] leading-[19.27px]'>Not just a tour, but a memory!</p>
                    </Link>
                    <p className="text-gray-500 mt-4">© {new Date().getFullYear()} NamoGuide. All rights reserved.</p>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Work with Us */}
                    <div>
                        <h2 className="font-bold text-lg mb-2">Work with Us</h2>
                        <ul className="text-gray-600">
                            <Link to={'/guide-registration'}>
                                <li className="mb-1 cursor-pointer hover:underline">As a Guide</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h2 className="font-bold text-lg mb-2">Support</h2>
                        <ul className="text-gray-600">
                            <Link to={'/contact'}>
                                <li className="mb-1 cursor-pointer hover:underline">Contact Us</li>
                            </Link>
                            <Link to={'/privacy-policy'}>
                                <li className="mb-1 cursor-pointer hover:underline">Privacy Policy</li>
                            </Link>
                            <Link to={'/terms-and-conditions'}>
                                <li className="mb-1 cursor-pointer hover:underline">Terms and Conditions</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h2 className="font-bold text-lg mb-2">Company</h2>
                        <ul className="text-gray-600">
                            <Link to={'/about-us'}>
                                <li className="mb-1 cursor-pointer hover:underline">About Us</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="font-bold text-lg mb-2">Social Media</h2>
                        <div className="flex flex-row space-x-4 text-[#F97316]">
                            <FaFacebook size={20} className="cursor-pointer hover:text-gray-700" />
                            <FaInstagram size={20} className="cursor-pointer hover:text-gray-700" />
                            <Link to="https://www.linkedin.com/company/namoguide/">
                                <FaLinkedin size={20} className="cursor-pointer hover:text-gray-700" />
                            </Link>
                            <FaXTwitter size={20} className="cursor-pointer hover:text-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;