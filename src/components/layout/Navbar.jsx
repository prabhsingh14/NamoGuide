import React from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileDropDown from './ProfileDropDown';

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.wishlist);

    return (
        <div className='bg-white shadow-[0px_24px_20px_-10px_rgba(255,111,0,0.15)] w-full'>
            <div className='h-[84px] flex items-center justify-between px-6 container mx-auto max-w-screen-lg'>

                {/* logo */}
                <Link to={'/'} className='flex flex-col' style={{ fontFamily: '"Segoe Script", cursive' }}>
                    <p className='text-[#1976D2] text-[32px] leading-[51.39px] font-bold'>
                        Tour<span className='text-[#FF6F00]'>Ease</span>
                    </p>
                    <p className='text-[12px] leading-[19.27px]'>Not just a tour, but a memory!</p>
                </Link>

                <nav className='hidden md:block'>
                    {/* routes */}
                    <div className="flex gap-x-6">
                        <Link to='/#tours-section' className="text-gray-700 hover:text-[#FF6F00] font-medium">Discover Tours</Link>
                        <Link to="/contactus" className="text-gray-700 hover:text-[#FF6F00] font-medium">Contact Us</Link>
                        <Link to="/blogs" className="text-gray-700 hover:text-[#FF6F00] font-medium">Blogs</Link>
                        <Link to="/wishlist" className="text-gray-700 hover:text-[#FF6F00] font-medium">Wishlist</Link>
                    </div>
                </nav>

                {/* buttons */}
                <div className="md:flex items-center gap-x-4 hidden">
                    {user && (
                        <Link to="/dashboard/wishlist" className="relative">
                            <AiOutlineShoppingCart className="text-2xl text-black" />
                            {totalItems > 0 && (
                                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full text-black text-center text-xs font-bold bg-[#FF6F00]">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    )}
                    {token === null && (
                        <>
                            <Link to="/login">
                                <button className="border border-[#FF6F00] text-[#FF6F00] px-4 py-2 rounded-md font-medium hover:bg-orange-100">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-[#FF6F00] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600">
                                    Signup
                                </button>
                            </Link>
                        </>
                    )}
                    {token !== null && (
                        <Link>
                            <Link to="/dashboard">
                                <button className="bg-[#FF6F00] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600">
                                    Dashboard
                                </button>
                            </Link>
                            <Link to="/">
                                <button className="border border-[#FF6F00] text-[#FF6F00] px-4 py-2 rounded-md font-medium hover:bg-orange-100">
                                    Logout
                                </button>
                            </Link>
                        </Link>
                    )}
                </div>
                <button className='mr-4 md:hidden'>
                    <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;