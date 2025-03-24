import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    // State for mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='bg-white shadow-[0px_24px_20px_-10px_rgba(0,0,0,0.08)] w-full z-50'>
            <div className='h-[84px] flex items-center justify-between px-6 container mx-auto max-w-screen-lg'>

                {/* Logo */}
                <Link to={'/'} className='flex flex-col' style={{ fontFamily: '"Segoe Script", cursive' }}>
                    <p className='text-[#1D4ED8] text-[32px] leading-[51.39px] font-bold'>
                        Namo<span className='text-[#F97316]'>Guide</span>
                    </p>
                    <p className='text-[12px] leading-[19.27px]'>Not just a tour, but a memory!</p>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className='hidden md:block'>
                    <div className="flex gap-x-6">
                        <Link to='/' className="text-gray-700 hover:text-[#F97316] font-medium">Home</Link>
                        <Link to="/special" className="text-gray-700 hover:text-[#F97316] font-medium">Holi Special</Link>
                        <Link to='/guide-registration' className="text-gray-700 hover:text-[#F97316] font-medium">Join as a Guide</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-[#F97316] font-medium">Contact Us</Link>
                    </div>
                </nav>

                {/* Desktop Buttons */}
                <div className="md:flex items-center gap-x-4 hidden">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                                <button className="border border-[#F97316] text-[#F97316] px-4 py-2 rounded-md font-medium hover:bg-orange-100">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-[#F97316] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600">
                                    Signup
                                </button>
                            </Link>
                        </>
                    ) : (
                        <div className="flex gap-x-4">
                            <Link to="/dashboard">
                                <button className="bg-[#F97316] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600">
                                    Dashboard
                                </button>
                            </Link>
                            <button className="border border-[#F97316] text-[#F97316] px-4 py-2 rounded-md font-medium hover:bg-orange-100"
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.error("Logged out!");
                                }}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* Hamburger Menu Icon (Visible on small screens) */}
                <button 
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu (Visible on small screens) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg fixed top-[84px] left-0 w-full z-40">
                    <div className="flex flex-col gap-y-4 p-6">
                        <Link to='/' className="text-gray-700 hover:text-[#F97316] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link to="/special" className="text-gray-700 hover:text-[#F97316] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Holi Special</Link>
                        <Link to='/guide-registration' className="text-gray-700 hover:text-[#F97316] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Join as a Guide</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-[#F97316] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                        
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="border border-[#F97316] text-[#F97316] px-4 py-2 rounded-md font-medium w-full">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="bg-[#F97316] text-white px-4 py-2 rounded-md font-medium w-full">
                                        Signup
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/dashboard" className="text-gray-700 hover:text-[#F97316] font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                    Dashboard
                                </Link>
                                <button className="border border-[#F97316] text-[#F97316] px-4 py-2 rounded-md font-medium w-full"
                                    onClick={() => {
                                        setIsLoggedIn(false);
                                        toast.error("Logged out!");
                                        setIsMobileMenuOpen(false);
                                    }}>
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;