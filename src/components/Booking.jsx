import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa"

const Booking = ({ handleSearch }) => { 
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState(""); // Store selected destination
    const destinations = ["New Delhi", "Amritsar", "Himachal Pradesh", "Jammu & Kashmir"];
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

    const handleClickSearch = () => {
        handleSearch(destination, selectedDate);
    };

    return (
        <div className="flex items-center bg-white shadow-[0px_24px_20px_-10px_rgba(255,111,0,0.15)] rounded-lg p-4 w-full relative">
            {/* Destination Input */}
            <div className="relative flex-1" ref={dropdownRef}>
                <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    onClick={() => setIsOpen((prev) => !prev)}
                    onChange={(e) => setDestination(e.target.value)} // Allow manual input
                />
                
                {/* Dropdown */}
                {isOpen && (
                    <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto z-10">
                        {destinations.map((place, index) => (
                            <li 
                                key={index} 
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setDestination(place); // Set selected destination
                                    setIsOpen(false); // Close dropdown
                                }}
                            >
                                {place}
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
                maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                className="p-2 border border-gray-300 rounded-md focus:outline-none ml-2"
            />

            {/* Search Button */}
            <button 
                className="ml-2 p-2 border-[#FF6F00] border-[2px] text-black rounded-md"
                onClick={handleClickSearch}
            >
                <FaSearch size={20} />
            </button>
        </div>
    );
};

export default Booking;