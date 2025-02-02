import React from 'react';
import { FaAward } from 'react-icons/fa';
import tourPackages from '../../data/tourPackagesData';
import { Link } from 'react-router-dom';

// Card Component
const TourCard = ({ title, description, imgSrc, reviews, duration, price, navigation }) => {
    return (
        <div className='flex flex-col justify-between h-full bg-white p-4 shadow-md rounded-lg'>
            <img src={imgSrc} alt={title} className='w-full h-48 object-cover rounded-md' />
            <h2 className='font-bold text-xl mt-2'>{title}</h2>
            <p className='mt-2 flex-grow'>{description}</p>
            {/* Reviews */}
            <div className='mt-2 text-sm text-gray-600'>
                <span>{reviews} reviews</span>
            </div>
            {/* Duration */}
            <div className='mt-2 text-sm text-gray-600'>
                <span>Duration: {duration} days and {duration-1} nights</span>
            </div>
            {/* Price */}
            <div className='mt-2 font-semibold text-lg text-[#1976D2]'>
                <span>{price}</span>
            </div>
            {/* Book Now Button */}
            <Link to={navigation}>
                <button className='mt-4 bg-[#FF6F00] text-white p-2 rounded-full w-full hover:bg-[#1976D2]'>
                    Book Now
                </button>
            </Link>
        </div>
    );
};

// Main TourPackages Component
const TourPackages = () => {
    return (
        <div className='flex flex-col items-center mt-[100px]' id='tours-section'>
            <FaAward className='text-[#FF6F00] text-[60px]' />
            <h1 className='text-[#1976D2] font-bold text-[40px] mt-2'>Trending Tours</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-11/12'>
                {tourPackages.map((tourPackage, index) => (
                    <TourCard key={index} {...tourPackage} />
                ))}
            </div>
        </div>
    );
};

export default TourPackages;