import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({ handleSearch }) => { 
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDestinations, setSelectedDestinations] = useState([]); // Store multiple destinations
    const destinations = ["Agra", "Amritsar", "Rishikesh", "Patiala", "Vrindavan"];
    const dropdownRef = useRef(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Handle checkbox selection
    const handleCheckboxChange = (place) => {
        setSelectedDestinations((prev) =>
            prev.includes(place) ? prev.filter((item) => item !== place) : [...prev, place]
        );
    };

    const handleClickSearch = () => {
        handleSearch(selectedDestinations, selectedDate);
    };

    return (
        <>
            <div className="flex items-center bg-white shadow-[0px_24px_20px_-10px_rgba(255,111,0,0.15)] rounded-lg p-4 w-full relative">
                {/* Destination Input */}
                <div className="relative flex-1" ref={dropdownRef}>
                    <input
                        type="text"
                        placeholder="Where to?"
                        value={selectedDestinations.join(", ")} // Show selected destinations
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                        onClick={() => setIsOpen((prev) => !prev)}
                        readOnly
                    />
                    
                    {/* Dropdown with checkboxes */}
                    {isOpen && (
                        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto z-10 p-2">
                            {destinations.map((place, index) => (
                                <li 
                                    key={index} 
                                    className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleCheckboxChange(place)} 
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedDestinations.includes(place)}
                                        onChange={() => handleCheckboxChange(place)}
                                        className="cursor-pointer"
                                    />
                                    <label className="cursor-pointer">{place}</label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Date Picker */}
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="When?"
                    minDate={new Date()}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none ml-2"
                />

                {/* Search Button */}
                <button 
                    className="ml-2 p-2 bg-[#F97316] text-white rounded-xl"
                    onClick={handleClickSearch}
                >
                    Get Guide
                </button>
            </div>
        </>
    );
};

export default Booking;
