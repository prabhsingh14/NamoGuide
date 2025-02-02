import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Booking from "../components/Booking";
import Explore from "../components/tours/Explore";
import TourPackages from '../components/tours/TourPackages';
import ChooseUs from '../components/ChooseUs';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Home = () => {
    const [selectedButton, setSelectedButton] = useState("tour"); 
    const navigate = useNavigate();

    const handleSearch = (destination, selectedDate) => {
        const encodedDestination = encodeURIComponent(destination); // Handle spaces in city names
        if(selectedButton === "tour") {
            navigate(`/explore-tours?destination=${encodedDestination}&date=${selectedDate}`);
        } else if(selectedButton === "guide"){
            navigate(`/hire-guide?destination=${encodedDestination}&date=${selectedDate}`);
        }
    };    

    return (
        <div>
            <div className='flex flex-row mt-40'>
                {/* part-1 */}
                <h1 className='text-[40px] leading-[60px] ml-10 font-bold'>
                    <span className='text-[#1976D2]'>Arrive, Relax, Explore </span>
                    <span className='text-[#0000001A]'>•</span>
                    <br/>
                    <span className='text-[#FF6F00]'> Punjab’s Warm Welcome 
                    <br/>
                    Awaits You!
                    </span>
                </h1>

                {/* part-2 */}
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <button
                        className={`font-bold rounded-[16px] p-[16px] ml-44 
                        ${selectedButton === "tour" ? "bg-[#FF6F00] text-white" : "border-[#FF6F00] border-[2px] text-black"}`}
                        onClick={() => setSelectedButton("tour")}>
                            Get customized Trip
                        </button>

                        <button
                        className={`font-bold rounded-[16px] p-[14px] ml-[16px] 
                        ${selectedButton === "guide" ? "bg-[#FF6F00] text-white" : "border-[#FF6F00] border-[2px] text-black"}`}
                        onClick={() => setSelectedButton("guide")}>
                            Find a Verified Guide
                        </button>
                    </div>
                    <br />
                    <div className="ml-44">
                        <Booking handleSearch={handleSearch} />
                    </div>
                </div>
            </div>

            <Explore />
            <TourPackages />
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;