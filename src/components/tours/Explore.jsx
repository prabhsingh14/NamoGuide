import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { 
            src: "/assets/amritsar.webp", 
            place: "Amritsar",
            description: 
            "Amritsar, the spiritual heart of Punjab, is home to Sri Harmandar Sahib, a symbol of peace and devotion. Explore the historic Jallianwala Bagh, relive history at the Partition Museum, and witness the electrifying Wagah Border ceremony. Don’t miss tasting authentic Punjabi cuisine at local dhabas and the bustling markets of Hall Bazaar. Discover the architectural beauty of Khalsa College and the serene Ram Bagh Gardens. Take a spiritual journey to Durgiana Temple, often referred to as the Silver Temple. Experience the vibrant local culture at Gobindgarh Fort with live performances. Dive into the flavors of Amritsari kulchas and lassi at iconic food joints. Wrap up your visit with a peaceful evening stroll around the illuminated Harmandar Sahib."
        },        
        { 
            src: "/assets/taj-mahal.webp", 
            place: "Agra",
            description: 
            "Agra, home to the iconic Taj Mahal, is a city rich in Mughal history and architectural marvels. Visit the majestic Agra Fort, a UNESCO World Heritage site offering stunning views of the Yamuna River. Explore Fatehpur Sikri, the abandoned Mughal capital with grand palaces and the renowned Buland Darwaza. Witness the beauty of Mehtab Bagh, a serene garden offering a mesmerizing sunset view of the Taj Mahal. Walk through Kinari Bazaar for exquisite marble handicrafts and traditional Mughlai cuisine, including the famous Agra petha and succulent kebabs. A boat ride on the Yamuna at dawn completes the magical experience of Agra."
        },
        { 
            src: "/assets/vrindavan.webp", 
            place: "Vrindavan, Mathura",
            description: 
            "Vrindavan, the sacred town associated with Lord Krishna, is a spiritual haven filled with divine energy. Visit the iconic Banke Bihari Temple, where Krishna’s enchanting idol captivates devotees. Explore the ISKCON Temple, a serene space dedicated to Krishna consciousness. Experience the vibrant culture at Prem Mandir, an architectural marvel illuminated beautifully at night. Walk along the ghats of the Yamuna River, taking in the peaceful atmosphere. Participate in the mesmerizing evening aarti at Keshi Ghat. Indulge in local sweets like peda and rabri while exploring bustling markets selling Krishna-themed souvenirs."
        },
        { 
            src: "/assets/india-gate.webp", 
            place: "New Delhi",
            description: 
            "New Delhi, India's bustling capital, blends history, culture, and modernity. Marvel at the grand India Gate, a war memorial symbolizing national pride. Explore the majestic Red Fort, a UNESCO-listed Mughal fortress, and admire the intricate carvings of Humayun’s Tomb. Pay homage at Raj Ghat, the memorial of Mahatma Gandhi. Wander through the vibrant streets of Chandni Chowk, savoring Delhi’s famous street food like chole bhature and parathas. Experience spirituality at Akshardham Temple and the Lotus Temple’s tranquil ambiance. Shop at Connaught Place or Dilli Haat for handicrafts, and end your day at Hauz Khas Village, known for its cafes and nightlife."
        },
        { 
            src: "/assets/chandigarh.webp", 
            place: "Chandigarh",
            description: 
            "Chandigarh, the city beautiful, charms with its modern architecture, natural beauty, and vibrant urban life. Explore the artistic Rock Garden, an extraordinary space crafted from industrial and household waste. Relax at Sukhna Lake with peaceful boat rides and scenic views of the Shivalik Hills. Wander through the fragrant Rose Garden, Asia’s largest, featuring over 1,600 rose species. Discover rich history and art at the Government Museum & Art Gallery. Indulge in street food delights at Sector 17 Plaza, bustling with shops and cafes. Take a stroll along the clean, tree-lined boulevards, and experience Chandigarh’s lively nightlife at cafes, clubs, and rooftop lounges."
        }
    ];    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: null, 
        nextArrow: null, 
        afterChange: (index) => setCurrentSlide(index),
    };

    return (
        <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg mt-[80px] w-full mx-auto max-w-7xl overflow-hidden">
            {/* Title */}
            <div className="flex flex-col text-center font-bold text-3xl gap-3">
                <span className="text-[#1D4ED8]">Explore India's Heart Through the Eyes of Locals</span>
                <span className="text-[#F97316]">Where Every Moment Becomes a Story</span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-6 items-center">
                {/* Slider Component */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0.6 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 0.8 }}
                                className="relative group"
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.place} 
                                    className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>

                {/* Description Component */}
                <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 flex flex-col justify-start items-start p-6 gap-4 bg-gray-100 rounded-xl shadow-md"
                >
                    <h2 className="font-bold text-2xl text-gray-800">{images[currentSlide].place}</h2>
                    <p className="text-gray-600 text-md">{images[currentSlide].description}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Explore;