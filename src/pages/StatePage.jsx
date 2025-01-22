import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdNotificationsActive } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import StateMain from '../components/tours/StateMain';
import { Link } from 'react-router-dom';
import { state } from '../data/stateData';
import Footer from '../components/layout/Footer';

const StatePage = () => {
    const { stateName } = useParams();

    // Normalize the stateName from URL (convert to lowercase and replace spaces with hyphens)
    const normalizedStateName = stateName.toLowerCase().replace(/\s+/g, '-');

    // Find the matching state data by comparing normalized stateName and name
    const stateData = state.find(item =>
        item.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '') === normalizedStateName
    );

    // If no matching state data, return a default "Not Found" state
    if (!stateData) {
        return (
            <div>
                <h2>State not found.</h2>
            </div>
        );
    }

    // Get tours from stateData
    const stateTours = stateData.tours || []; // Default to empty array if no tours found

    return (
        <div>
            {/* section-1 */}
            <StateMain
                name={stateData.name}
                tagline={stateData.tagline}
                image={stateData.image}
                list={stateData.list}
            />

            {/* section-2 */}
            <div className='mt-12 flex justify-between ml-8 mr-12'>
                <h1 className='text-[25px] text-gray-500 font-bold'>
                    Explore tours in <span className='text-black '>{stateData.name}</span>
                </h1>
                <Link to="/#tours-section" className="flex items-center justify-center">
                    <button className="flex items-center text-white py-2 px-4 rounded-lg bg-[#FF6F00]">
                        <span className="mr-2">Change Travel Place</span>
                        <FaArrowRight />
                    </button>
                </Link>
            </div>

            {/* tours section */}
            <div className="mt-6 px-4 md:px-6 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    {stateTours.map((tour) => (
                        <div key={tour.id} className="border p-4 rounded-lg shadow-lg bg-white">
                            <div className="flex">
                                {/* Left side: Image */}
                                <img src={tour.image} alt="Tour Image" className="w-1/3 h-auto rounded-lg object-cover" />
                                
                                {/* Right side: Tour Info */}
                                <div className="ml-6 w-2/3">
                                    <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                                    <p className="text-lg text-gray-600 mb-2">{tour.description}</p>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <CiStar className='text-[#FF6F00] text-[20px]'/>
                                        <span className="ml-2 text-sm">{tour.rating}/5 ({tour.reviews} reviews)</span>
                                    </div>
                                    <p className="text-lg text-black mb-4">Starting Price: ₹{tour.price} 
                                        <span className='text-gray-400'> per person</span></p>
                                        <div className="flex gap-4">
                                            <Link to={"/wishlist"}>
                                                <button className="py-2 px-4 border-[#FF6F00] border-2 text-black rounded-xl w-full md:w-auto flex items-center justify-center">
                                                    <CiHeart className="text-[#FF6F00] text-[20px] mr-2" />
                                                    <span>Add to wishlist</span>
                                                </button>
                                            </Link>
                                            <Link to={`/tours/${tour.id}`} className="flex items-center justify-center">
                                                <button className="flex items-center text-white py-2 px-4 rounded-xl bg-[#FF6F00]">
                                                    <span className="mr-2">Explore this tour</span>
                                                    <FaArrowRight />
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* notification */}
            <div className="p-6 max-w-sm mx-auto mt-12">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <MdNotificationsActive className="text-[#FF6F00] text-4xl" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-[#1976D2] mb-2">Notify</h2>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4">
                    We are working on adding more of tourist guides and destinations. We’ll notify you as soon as they are added.
                </p>

                {/* Call-to-action */}
                <Link to="/notify">
                    <button className="w-full py-2 px-4 bg-[#FF6F00] text-white font-semibold rounded-lg hover:bg-[#e65e00] transition">
                        Notify me
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default StatePage;