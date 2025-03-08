// todo: after the form filled, send the data to: "prabhsingh1407@gmail.com" for verification.
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../layout/Footer";
import { IoBag, IoPerson, IoMail, IoCall, IoHome, IoCloudUpload, IoMaleFemale, IoCalendar } from "react-icons/io5";

const Guide = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: null,
        gender: "",
        address: "",
        idProof: null,
    });

    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const calendarRef = useRef(null);
    const dobInputRef = useRef(null);

    const isFormComplete = Object.values(formData).every(value => value !== "" && value !== null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
            if (validTypes.includes(file.type)) {
                setFormData({ ...formData, idProof: file });
                setFileName(file.name);
                setFileError("");
            } else {
                setFileError("Invalid file type. Only PNG, JPG, JPEG, and PDF are allowed.");
                setFileName("");
            }
        }
    };

    const handleDateClick = (day) => {
        setSelectedDate(new Date(selectedYear, selectedMonth, day));
        setFormData({ ...formData, dob: new Date(selectedYear, selectedMonth, day) });
        setCalendarOpen(false);
    };

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const handleOutsideClick = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target) && !dobInputRef.current.contains(event.target)) {
            setCalendarOpen(false);
        }
    };

    const handleSubmit = () => {
        if (isFormComplete) {
            navigate('/guide-dashboard');
        }
    };
    

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const renderCalendarDays = () => {
        const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

        let days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div
                    key={day}
                    className={`p-2 rounded-full cursor-pointer text-center ${
                        selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === selectedMonth
                            ? "bg-[#F97316] text-white"
                            : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="min-h-screen bg-[#F7F5F2] flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 shadow-lg rounded-2xl max-w-2xl w-full mx-auto mt-8">
                    {/* Header */}
                    <div className="text-center">
                        <IoBag className="text-6xl text-[#F97316] mx-auto" />
                        <h2 className="text-[#1D4ED8] text-3xl font-bold mt-5">Register as a Guide</h2>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Are you passionate about sharing the stories, culture, and hidden gems of your destination? 
                            Join us and turn your knowledge into unforgettable experiences for travelers from around the world.
                        </p>
                    </div>

                    {/* Personal Details Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Personal Details</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoPerson className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    placeholder="Full Name" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoMail className="text-gray-500 mr-3" />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoCall className="text-gray-500 mr-3" />
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="relative flex flex-col flex-1">
                                <div className="flex items-center border rounded-lg px-4 py-3 bg-white cursor-pointer relative" onClick={toggleCalendar} 
                                    ref={dobInputRef}>
                                    <IoCalendar className="text-gray-500 mr-3" />
                                    <input
                                        type="text"
                                        value={selectedDate ? selectedDate.toDateString() : ""}
                                        placeholder="Select DOB"
                                        readOnly
                                        className="w-full outline-none bg-transparent text-gray-700 cursor-pointer"
                                    />
                                </div>

                                {isCalendarOpen && (
                                    <div className="absolute bg-white shadow-lg p-4 rounded-md w-64 mt-1 z-10" ref={calendarRef}>
                                        <div className="flex justify-between mb-2">
                                            <select value={selectedMonth} onChange={handleMonthChange} className="border p-1 rounded">
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i} value={i}>
                                                        {new Date(2000, i, 1).toLocaleString("default", { month: "long" })}
                                                    </option>
                                                ))}
                                            </select>
                                            <select value={selectedYear} onChange={handleYearChange} className="border p-1 rounded">
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i} value={new Date().getFullYear() - i}>
                                                        {new Date().getFullYear() - i}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
                            <IoMaleFemale className="text-gray-500 mr-3" />
                            <select 
                                name="gender" 
                                className="w-full outline-none bg-transparent text-gray-700" 
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Address & ID Proof Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Address & ID Proof</h3>
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                            <IoHome className="text-gray-500 mr-3" />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Enter your address" 
                                className="w-full outline-none bg-transparent text-gray-700"
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-3 flex-1 relative bg-white">
                            <IoCloudUpload className="text-gray-500 mr-3" />
                            <label className="w-full cursor-pointer text-gray-500">
                                <span className="text-gray-700">{fileName || "Upload Ministry Issued ID Card"}</span>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>
                    {fileError && <p className="text-[#F97316] text-sm mt-2">{fileError}</p>}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className={`w-full px-6 py-3 rounded-lg font-semibold mt-6 transition ${
                            isFormComplete ? "bg-[#F97316] text-white cursor-pointer" 
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                        disabled={!isFormComplete}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Guide;