import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { 
            src: "/assets/harmandar-sahib.png", 
            place: "Amritsar",
            description: 
            "Amritsar, the spiritual heart of Punjab, is home to Sri Harmandar Sahib, a symbol of peace and devotion. Explore the historic Jallianwala Bagh, relive history at the Partition Museum, and witness the electrifying Wagah Border ceremony. Don’t miss tasting authentic Punjabi cuisine at local dhabas and the bustling markets of Hall Bazaar. Discover the architectural beauty of Khalsa College and the serene Ram Bagh Gardens. Take a spiritual journey to Durgiana Temple, often referred to as the Silver Temple. Experience the vibrant local culture at Gobindgarh Fort with live performances. Dive into the flavors of Amritsari kulchas and lassi at iconic food joints. Wrap up your visit with a peaceful evening stroll around the illuminated Harmandar Sahib."
        },        
        { 
            src: "/assets/moti-bagh-gurudwara-patiala.jpg", 
            place: "Patiala",
            description: 
            "Patiala, known for its royal heritage, boasts the grand Qila Mubarak and the beautiful Sheesh Mahal, adorned with intricate mirror work and frescoes. Stroll through the lush Baradari Gardens, perfect for leisurely walks amidst vibrant flora. Admire the architectural marvel of Moti Bagh Palace, now housing a prestigious sports institute and a museum. Immerse yourself in the city’s vibrant culture with traditional folk music and bhangra performances. Experience the charm of Punjabi fashion with Patiala salwars and handcrafted juttis. Savor local delicacies like Patiala lassi, rich tandoori dishes, and authentic Punjabi sweets at bustling markets like Adalat Bazaar."
        },
        { 
            src: "/assets/mandir.avif", 
            place: "Ludhiana",
            description: 
            "Ludhiana, Punjab’s industrial hub, blends modernity with rich heritage, offering a dynamic urban experience. Visit the historic Lodhi Fort, a testament to Mughal architecture, and find tranquility at the expansive Nehru Rose Garden with over 1,600 varieties of roses. Explore the captivating Punjab Agricultural University Museum to witness rural Punjab’s legacy. Enjoy boating at Rakh Bagh Park and unwind amidst lush greenery. Discover the rural charm of Phillaur Fort and the spiritual serenity of Gurudwara Dukh Niwaran Sahib. Dive into Ludhiana’s food scene with spicy chaats, stuffed parathas, and creamy kulfis, while shopping for premium woolen garments and hosiery products."
        },
        { 
            src: "/assets/jalandhar.webp", 
            place: "Jalandhar",
            description: 
            "Jalandhar offers a vibrant mix of spirituality, history, and entertainment. Visit Devi Talab Mandir, one of the oldest temples, with a sacred tank believed to have spiritual significance. Seek peace at Gurudwara Talhan Sahib, renowned for its serene ambiance. Enjoy thrilling rides at Wonderland Theme Park, perfect for family fun, and delve into history at the Shaheed-e-Azam Museum, dedicated to freedom fighters like Bhagat Singh. Experience traditional crafts at local markets, famous for sports goods and Punjabi footwear (juttis). Savor delicious street food like chole bhature, jalebis, and kulchas while exploring Model Town’s bustling streets."
        },
        { 
            src: "/assets/rock-garden.jpeg", 
            place: "Chandigarh",
            description: 
            "Chandigarh, the city beautiful, charms with its modern architecture, natural beauty, and vibrant urban life. Explore the artistic Rock Garden, an extraordinary space crafted from industrial and household waste. Relax at Sukhna Lake with peaceful boat rides and scenic views of the Shivalik Hills. Wander through the fragrant Rose Garden, Asia’s largest, featuring over 1,600 rose species. Discover rich history and art at the Government Museum & Art Gallery. Indulge in street food delights at Sector 17 Plaza, bustling with shops and cafes. Take a stroll along the clean, tree-lined boulevards, and experience Chandigarh’s lively nightlife at cafes, clubs, and rooftop lounges."
        }
    ];    

    const settings = {
        dots: false, // Hide dots navigation
        infinite: true, // Infinite loop
        speed: 500, // Animation speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Automatic slide change
        autoplaySpeed: 3000, // Delay between slides (in ms)
        prevArrow: null, // Hide previous button
        nextArrow: null, // Hide next button
        afterChange: (index) => setCurrentSlide(index), // Update current slide index
    }

    return (
        <div className="flex flex-col bg-white rounded-lg p-6 shadow-md mt-[80px] w-full mx-auto max-w-7xl overflow-hidden">
            {/* Title */}
            <div className="flex flex-col text-center font-bold text-[25px] gap-2">
                <span className="text-[#1976D2]">Explore Punjab’s Heart Through the Eyes of Locals</span>
                <span className="text-[#FF6F00]">Where Every Moment Becomes a Story</span>
            </div>

            {/* Content Section */}
            <div className="mt-6 flex flex-row">
                {/* Slider Component */}
                <div className="w-1/2 relative">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image.src} alt={image.place} 
                                    className="w-[700px] h-[500px] rounded-lg" 
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Description Component */}
                <div className="w-1/2 flex flex-col justify-start items-start p-4 gap-2">
                    <h2 className="font-bold text-xl">{images[currentSlide].place}</h2>
                    <p>{images[currentSlide].description}</p>
                </div>
            </div>

            <Link 
            className="text-center mt-8 bg-[#FF6F00] text-white font-bold rounded-lg py-2 w-[240px] mx-auto" 
            to="/custom-trip">
                Plan My Perfect Punjab Tour
            </Link>
        </div>
    );
};

export default Explore;