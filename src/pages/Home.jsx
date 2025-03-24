import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Booking from "../components/Booking";
import Explore from "../components/tours/Explore";
import TopPlaces from '../components/tours/TopPlaces';
import ChooseUs from '../components/ChooseUs';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (destination, selectedDate) => {
        const encodedDestination = encodeURIComponent(destination);
        navigate(`/hire-guide?destination=${encodedDestination}&date=${selectedDate}`);
    };    

    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col sm:flex-row mt-40 
                lg:mt-32 md:mt-28 sm:mt-24 [@media(max-width:425px)]:mt-20 [@media(max-width:320px)]:mt-16">
                
                {/* Heading */}
                <h1 className="text-[40px] leading-[60px] ml-10 font-bold
                    lg:text-[36px] lg:leading-[54px] md:text-[32px] md:leading-[48px] sm:text-[28px] sm:leading-[42px] 
                    [@media(max-width:425px)]:text-[24px] [@media(max-width:425px)]:leading-[36px] 
                    [@media(max-width:320px)]:text-[20px] [@media(max-width:320px)]:leading-[30px]">
                    <span className="text-[#1D4ED8]">Arrive, Relax, Explore </span>
                    <span className="text-[#0000001A]">•</span>
                    <br/>
                    <span className="text-[#F97316]"> India's Warm Welcome <br/> Awaits You!</span>
                </h1>

                {/* Search Form */}
                <div className="flex flex-col ml-10 gap-4
                    lg:ml-36 md:ml-24 sm:ml-16 [@media(max-width:425px)]:ml-10 [@media(max-width:320px)]:ml-6">
                    <span className="text-[#F97316] font-bold text-2xl
                        lg:text-xl md:text-lg sm:text-base [@media(max-width:425px)]:text-sm [@media(max-width:320px)]:text-xs">
                        Find a Verified Guide
                    </span>
                    <Booking handleSearch={handleSearch} />
                </div>
            </div>

            <Explore />
            <TopPlaces />
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;