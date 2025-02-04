import React from 'react';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaArrowRight, FaHeart, FaStar, FaClock, FaBell } from "react-icons/fa";
import cityData from '../data/cityData';

const TourDetails = () => {
    const { id } = useParams();
    const city = cityData.find(city => city.id === Number(id));

    if (!city) return <div className='text-center mt-20 text-red-500'>City not found!</div>;

    return (
        <div className='mt-10 min-h-screen'>
            {/* Section 1: City Details */}
            <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-4xl max-h-[700px] mx-auto mt-4'>
                <h1 className='text-3xl font-bold text-[#1976D2]'>{city.cityName}</h1>
                <p className='text-xl text-[#FF6F00] mt-1 font-bold'>{city.tagline}</p>
                <img src={city.mainImage} alt={city.cityName} className='w-full h-[400px] object-cover rounded-lg mt-4' />
            </div>

            {/* Section 2: City Tours */}
            <div className='mt-10'>
                <div className='flex justify-between items-center w-full'>
                    <h2 className='text-2xl font-bold text-gray-500 mb-4 translate-x-[20px]'>
                        Explore Tours in
                        <span className='text-black font-bold'> {city.cityName}</span>
                    </h2>
                    <Link to='/#tours-section' 
                    className='rounded-lg border-[#FF6F00] border-2 px-4 py-2 flex justify-between items-center gap-2
                    hover:bg-[#FF6F00] hover:text-white translate-x-[-40px]'>
                        Change Travel Place
                        <FaArrowRight />
                    </Link>
                </div>

                <div className='flex justify-center mt-10'>
                    <div className='grid grid-cols-1 gap-6 max-w-6xl w-full'>
                        {city.tours.map(tour => (
                            <div key={tour.id} className='bg-white p-6 shadow-md rounded-lg flex'>
                                {/* Image on the left */}
                                <img src={tour.tourImage} alt={tour.tourTitle} className='w-[350px] h-[200px] object-cover rounded-md mr-6' />

                                {/* Content on the right */}
                                <div className='flex flex-col justify-between'>
                                    <h3 className='font-bold text-xl'>{tour.tourTitle}</h3>
                                    <p className='text-sm text-gray-600'>{tour.tourDescription}</p>

                                    <div className='flex gap-4'>
                                        <div className='flex items-center mt-2'>
                                            <FaStar className='text-yellow-500 mr-1' />
                                            <span className='text-sm text-gray-600'>{tour.tourReviews}</span>
                                        </div>

                                        {tour.tourDuration && (
                                            <div className='flex items-center mt-2'>
                                                <FaClock className='text-gray-500 mr-1' />
                                                <span className='text-sm text-gray-600'>{tour.tourDuration}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-[#FF6F00] font-semibold text-xl'>Price: {tour.tourPrice}</p>

                                        <div className='flex gap-8'>
                                            <Link className='flex items-center gap-2 rounded-2xl border-[#FF6F00] border-2 px-4 py-2'>
                                                <FaHeart className='text-[#FF6F00]' /> Add to Wishlist
                                            </Link>
                                            <Link to={`/tours/${city.id}/${tour.id}`}
                                            className='flex items-center gap-2 bg-[#FF6F00] text-white px-4 py-2 rounded-xl'>
                                                Book Now
                                                <FaArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* notification */}
            <div className="p-6 flex flex-col items-center space-y-4 mt-20">
                {/* Icon and Heading */}
                <div className="flex items-center space-x-3">
                    <FaBell className="text-[#FF6F00] text-3xl" />
                    <h2 className="text-2xl font-bold text-[#1976D2]">Notify Me</h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center max-w-md">
                    We are working on adding more tourist guides and destinations. We’ll notify you as soon as they are added.
                </p>

                {/* Button */}
                <Link to="/subscribe" className="bg-[#FF6F00] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#FF6F00]/80">
                    Get Notified
                </Link>
            </div>

            {/* Footer */}
            <div className="w-full mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default TourDetails;