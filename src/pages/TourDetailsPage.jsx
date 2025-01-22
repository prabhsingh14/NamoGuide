import React from 'react';
import Footer from '../components/layout/Footer';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { state } from '../data/stateData';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const TourDetailsPage = () => {
    const navigate = useNavigate();

    const handlePay = () => {
        const token = localStorage.getItem("authToken"); // Check if token exists
        
        if (!token) {
            alert("Please log in to proceed with payment.");
            navigate("/login"); // Redirect to login page
            return;
        }

        // Proceed to payment
        navigate("/payment");
    };

    const { tourId } = useParams();
    console.log(tourId);
    const tour = state.flatMap(item => item.tours || []).find(tour => tour.id === parseInt(tourId));

    if (!tour) {
        return <h2>Tour not found.</h2>;
    }

    return (
        <div>
            <div className="container mx-auto p-4">
                {/* Section - 1 */}
                <div className="flex flex-col items-center mb-8 mt-8 bg-white rounded-2xl">
                    <div className="flex justify-between w-full px-4 mt-6">
                        <h1 className="text-xl font-semibold">{tour.name}</h1>
                        <Link to={"/wishlist"}>
                            <button className="py-2 px-4 border-[#FF6F00] border-2 text-black rounded-xl flex items-center">
                                <CiHeart className="text-[#FF6F00] text-[20px] mr-2" />
                                <span>Add to wishlist</span>
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full px-4 mt-4 mb-8 relative">
                        {/* First three images in a row */}
                        <img src={tour.images[0]} alt="Image 1" className="w-[616px] h-[411px] rounded-lg col-span-1 mx-auto" />
                        <img src={tour.images[1]} alt="Image 2" className="w-[318px] h-[413px] rounded-lg col-span-1 mx-auto -translate-x-8" />
                        <div className="flex flex-col gap-2 col-span-1 relative">
                            <img 
                                src={tour.images[2]} 
                                alt="Image 3" 
                                className="w-full h-[197px] rounded-lg mx-auto -translate-x-16" 
                            />
                            {/* Align the 4th image's bottom with the 2nd image */}
                            <img 
                                src={tour.images[3]} 
                                alt="Image 4" 
                                className="w-full h-[197px] rounded-lg absolute bottom-0 -translate-x-16"
                            />
                        </div>
                    </div>
                </div>

                {/* Tour Details and Payment Section */}
                <div className="flex flex-row justify-between gap-8">
                    {/* Tour Details Section */}
                    <div className="flex flex-col w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">About the Tour</h2>
                        <p className="text-lg mb-4">{tour.about}</p>
                        <hr></hr>
                        <div className="mb-4 mt-4">
                            <h3 className="font-semibold">Duration: <span className='font-normal'>{tour.duration}</span></h3>
                        </div>
                        <hr></hr>
                        <div className="mb-4 mt-4">
                            <h3 className="font-semibold">Important Information:</h3>
                            <div className='flex gap-20 mt-4'>
                                <div className='flex flex-col'>
                                    <p className="font-semibold">What you can bring:</p>
                                    <ul className="list-disc ml-6">
                                        {tour.impInfo.canBring.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col'>
                                    <p className="font-semibold">What you cannot bring:</p>
                                    <ul className="list-disc ml-6">
                                        {tour.impInfo.cannotBring.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="mb-4 mt-4">
                            <h3 className="font-bold text-[18px] mb-2">About Partnered Travel Agency</h3>
                            <p className='font-semibold text-[15px] mb-1'>{tour.aboutAgency.name}</p>
                            <p className='mb-2'>{tour.aboutAgency.about}</p>
                            <li><strong>Email:</strong> {tour.aboutAgency.contact.email}</li>
                            <li><strong>Phone:</strong> {tour.aboutAgency.contact.phone}</li>
                            <li><strong>Website:</strong> {tour.aboutAgency.contact.website}</li>
                            <li><strong>Address:</strong> {tour.aboutAgency.contact.address}</li>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="flex flex-col w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <form>
                            {/* Number of Adults */}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="adults" className="font-semibold">Number of Adults:</label>
                                <input
                                    type="number"
                                    id="adults"
                                    className="p-2 rounded border border-gray-300"
                                    min="1"
                                    placeholder="Enter number of adults"
                                    required
                                />
                            </div>
                            {/* Number of Children */}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="children" className="font-semibold">Number of Children:</label>
                                <input
                                    type="number"
                                    id="children"
                                    className="p-2 rounded border border-gray-300"
                                    min="0"
                                    placeholder="Enter number of children"
                                />
                            </div>
                            {/* Date Picker */}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="date" className="font-semibold">Select Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="p-2 rounded border border-gray-300"
                                    required
                                />
                            </div>
                            {/* Price Display */}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="price" className="font-semibold">Price (in INR):</label>
                                <div
                                    id="price"
                                    className="p-2 rounded border border-gray-300 bg-gray-100"
                                >
                                    {tour.price}
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#FF6F00] text-white p-2 rounded-lg w-full hover:bg-blue-600"
                                onClick={handlePay}
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TourDetailsPage;