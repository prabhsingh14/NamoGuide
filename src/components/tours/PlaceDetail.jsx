import React from 'react';
import { useParams } from 'react-router-dom';
import PlacesData from '../../data/PlacesData';
import { FaCheckCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Footer from '../layout/Footer';

const PlaceDetail = () => {
    const { id } = useParams();
    const place = PlacesData.find((p) => p.id === parseInt(id));

    if (!place) {
        return <h1 className="text-center text-2xl mt-10">Place Not Found</h1>;
    }

    return (
        <>
            <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-col">
                {/* Section 1: Image Slider */}
                <div className="w-full bg-white shadow-lg rounded-lg">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} 
                    loop={true} className="h-96 rounded-lg">
                        {place.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-top rounded-lg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Section 2: Flex Row for Content & Guide Card */}
                <div className="mt-20 flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-lg p-8">
                    {/* Section 2A: Place Content */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-[#1D4ED8]" style={{ fontFamily: '"Segoe Script", cursive' }}>{place.name}</h1>
                        <p className="mt-4 text-gray-700">{place.description}</p>

                        {/* Things to Do */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-[#F97316]">Things to Do</h2>
                            <ul className="mt-2 text-gray-700 space-y-2">
                                {place.activities?.map((activity, index) => (
                                    <li key={index} className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-2" /> {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Best Time to Visit */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-[#F97316]">Best Time to Visit</h2>
                            <p className="text-gray-700 mt-2">{place.bestTime}</p>
                        </div>
                    </div>

                    {/* Section 2B: Guide Booking Card */}
                    <div className="bg-[#F97316] text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-fit w-full lg:max-w-sm">
                        <h2 className="text-2xl font-semibold">Need a Guide?</h2>
                        <p className="mt-2">Book a local, and ministry verified guide to explore {place.name} hassle-free, with the eyes of locals.</p>
                        <button className="mt-4 w-full bg-white text-[#F97316] py-2 px-4 rounded-md font-bold hover:bg-gray-200">
                            Get a Guide
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PlaceDetail;
