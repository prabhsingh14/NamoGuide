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
        if(selectedButton === "tour") {
            navigate(`/explore-tours?destination=${destination}&date=${selectedDate}`);
        } else if(selectedButton === "guide"){
            navigate(`/hire-guide?destination=${destination}&date=${selectedDate}`);
        }
    };

    return (
        <div>
            <div className='flex flex-row mt-40'>
                {/* part-1 */}
                <h1 className='text-[40px] leading-[60px] ml-10 font-bold'>
                    <span className='text-[#1976D2]'>India Awaits </span>
                    <span className='text-[#0000001A]'>•</span>
                    <span className='text-[#FF6F00]'> Your Gateway 
                        <br />
                        to Unforgettable Travel 
                        <br />
                        Experiences.
                    </span>
                </h1>

                {/* part-2 */}
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <button
                        className={`font-bold rounded-[16px] p-[16px] ml-44 
                        ${selectedButton === "tour" ? "bg-[#FF6F00] text-white" : "border-[#FF6F00] border-[2px] text-black"}`}
                        onClick={() => setSelectedButton("tour")}>
                            Book Tours
                        </button>

                        <button
                        className={`font-bold rounded-[16px] p-[14px] ml-[16px] 
                        ${selectedButton === "guide" ? "bg-[#FF6F00] text-white" : "border-[#FF6F00] border-[2px] text-black"}`}
                        onClick={() => setSelectedButton("guide")}>
                            Hire a Guide
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