import React from 'react';
import { FaAward } from 'react-icons/fa';
import topGuidesData from '../../data/topGuidesData';
import { Link } from 'react-router-dom';

// Card Component
const GuideCard = ({ id, name, place, description, imgSrc, reviews, duration, price }) => {
    return (
        <div className='flex flex-col justify-between h-full bg-white p-4 shadow-md rounded-lg'>
            <img src={imgSrc} alt={name} className='w-full h-48 object-cover object-top rounded-md' />
            <h2 className='font-bold text-xl mt-4'>{name}</h2>
            <p className='mt-2'>Available for <span className='font-bold'>{place}</span></p>
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
            <div className='mt-2 font-semibold text-lg text-[#1D4ED8]'>
                <span>{price}</span>
            </div>
            {/* Book Now Button */}
            <Link to={`/guides/${id}`}>
                <button className='mt-4 bg-[#F97316] text-white p-2 rounded-full w-full hover:bg-[#1D4ED8]'>
                    Know More
                </button>
            </Link>
        </div>
    );
};

// Main TourPackages Component
const TopGuides = () => {
    return (
        <div className='flex flex-col items-center mt-[100px]' id='tours-section'>
            <FaAward className='text-[#F97316] text-[60px]' />
            <h1 className='text-[#1D4ED8] font-bold text-[40px] mt-2'>Meet the Top Guides</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-11/12'>
                {topGuidesData.map((topGuides, index) => (
                    <GuideCard key={index} {...topGuides} />
                ))}
            </div>
        </div>
    );
};

export default TopGuides;