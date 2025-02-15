import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Booking from "../components/Booking";
import Explore from "../components/tours/Explore";
import TourPackages from '../components/tours/TopGuides';
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
            <div className='flex flex-row mt-40'>
                {/* Heading */}
                <h1 className='text-[40px] leading-[60px] ml-10 font-bold'>
                    <span className='text-[#1D4ED8]'>Arrive, Relax, Explore </span>
                    <span className='text-[#0000001A]'>•</span>
                    <br/>
                    <span className='text-[#F97316]'> India's Warm Welcome <br/> Awaits You!</span>
                </h1>

                {/* Search Form */}
                <div className="flex flex-col ml-44 gap-4">
                    <span className="text-[#F97316] font-bold text-2xl">Find a Verified Guide</span>
                    <Booking handleSearch={handleSearch} />
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