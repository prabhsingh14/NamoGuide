import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import cityData from '../data/cityData';

const TourDetailPage = () => {
    const { cityId, tourId } = useParams();
    const city = cityData.find(c => c.id === Number(cityId));
    const tour = city?.tours.find(t => t.id === Number(tourId));

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    if (!city || !tour) return <div className="text-center mt-20 text-red-500">Tour not found!</div>;

    // Parsing the tour price and calculating the total price
    const pricePerAdult = parseInt(tour.tourPrice.replace('₹', '').replace(',', ''));
    const pricePerChild = pricePerAdult * 0.5;

    const totalPrice = (adults * pricePerAdult) + (children * pricePerChild);

    return (
        <div className='min-h-screen'>
            <div className="w-11/12 mx-auto p-6 mt-10 flex flex-col gap-6">
                {/* Section 1: Tour Name & Image */}
                <div className="flex flex-col items-center bg-white w-[60%] mx-auto p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-[#1976D2] mb-4">{tour.tourTitle}</h1>
                    <img src={tour.tourImage} alt={tour.tourTitle} className="w-full h-[450px] object-cover rounded-md mt-2" />
                </div>

                {/* Section 2: Tour Details */}
                <div className="flex flex-row gap-6 mt-8">
                    <div className="flex flex-col gap-4 w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-[#1976D2]">About the Tour</h2>
                        <p className="text-gray-700">{tour.tourDescription}</p>

                        <p><strong>Duration:</strong> {tour.tourDuration}</p>
                        <p><strong>Guide Availability:</strong> {tour.guideAvailability}</p>

                        <div className="flex flex-row gap-8">
                            <div>
                                <h3 className="font-semibold">What You Can Bring:</h3>
                                <ul className="list-disc ml-4">
                                    {tour.allowedItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold">What Not to Bring:</h3>
                                <ul className="list-disc ml-4">
                                    {tour.notAllowedItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p><strong>Activities:</strong> {tour.activities.join(', ')}</p>
                        <p><strong>Reviews:</strong> {tour.tourReviews}</p>

                        <div>
                            <h3 className="font-semibold">Partnered Agency: <span className='font-normal'>{tour.partnerAgency.name}</span></h3>
                            <p>{tour.partnerAgency.description}</p>
                            <li>Address: {tour.partnerAgency.address}</li>
                            <li>Email: {tour.partnerAgency.email}</li>
                            <li>Phone: {tour.partnerAgency.phone}</li>
                        </div>
                    </div>

                    {/* Section 3: Booking Form */}
                    <div className="sticky top-6 p-4 bg-white rounded-lg shadow w-[400px] h-[400px] self-start">
                        <h2 className="text-xl font-bold text-[#1976D2] mb-4">Book This Tour</h2>

                        <label className="block mb-2">Number of Adults:</label>
                        <input
                            type="number"
                            value={adults}
                            min="1"
                            className="w-full p-2 border rounded"
                            onChange={e => setAdults(Number(e.target.value))}
                        />

                        <label className="block mt-4 mb-2">Number of Children:</label>
                        <input
                            type="number"
                            value={children}
                            min="0"
                            className="w-full p-2 border rounded"
                            onChange={e => setChildren(Number(e.target.value))}
                        />

                        <p className="mt-4 text-lg font-semibold">Total Price: ₹{totalPrice.toLocaleString()}</p>

                        <button className="mt-8 w-full bg-[#FF6F00] text-white py-2 rounded hover:bg-[#FF6F00]/90">
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer className='w-full mt-10'/>
        </div>

    );
};

export default TourDetailPage;