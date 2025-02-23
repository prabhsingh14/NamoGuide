import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward } from 'react-icons/fa';
import topPlacesData from '../../data/topPlacesData';

const PlaceCard = ({ id, name, city, description, imgSrc }) => {
    return (
        <div className='flex flex-col justify-between h-full bg-white p-4 shadow-md rounded-lg'>
            <img src={imgSrc} alt={name} className='w-full h-48 object-cover object-top rounded-md' />
            <h2 className='font-bold text-xl mt-4'>{name}</h2>
            <p className='mt-2 font-semibold text-gray-700'>{city}</p>
            <p className='mt-2'>{description}</p>
            <Link to={`/place/${id}`} className='mt-4 font-semibold bg-[#F97316] text-white py-2 px-4 rounded-md hover:bg-[#1D4ED8] 
            hover:text-white text-center'>
                Explore More
            </Link>
        </div>
    );
};

const TopPlaces = () => {
    return (
        <div className='flex flex-col items-center mt-[100px]' id='places-section'>
            <FaAward className='text-[#F97316] text-[60px]' />
            <h1 className='text-[#1D4ED8] font-bold text-[40px] mt-2'>Most Visited Places in India in {new Date().getFullYear()}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-11/12'>
                {topPlacesData.map((place, index) => (
                    <PlaceCard key={index} {...place} />
                ))}
            </div>
        </div>
    );
};

export default TopPlaces;