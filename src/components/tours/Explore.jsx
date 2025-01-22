import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: "/assets/harmandar-sahib.png", place: "Sri Harmandar Sahib",
            description:
            "Founded in 1581 by Guru Arjan Dev Ji, the Harmandar Sahib in Amritsar stands as a symbol of equality, faith, and service. The shimmering golden structure, surrounded by the serene Amrit Sarovar (holy pool), welcomes millions of devotees and travelers seeking spiritual solace. Experience the soul-soothing kirtans and enjoy the world’s largest free community kitchen (Langar), serving thousands daily."
        },
        { src: "/assets/kashmir.png", place: "Kashmir",
            description:
            "From the ancient Mughal gardens to the legendary Dal Lake, Kashmir’s timeless beauty has captivated emperors and travelers alike for centuries. Once a beloved retreat of Mughal rulers, Kashmir offers houseboat stays, shikara rides, and lush green valleys set against the backdrop of snow-capped peaks. Whether you seek adventure in Gulmarg’s ski slopes or tranquility in Pahalgam’s meadows, Kashmir is an unforgettable paradise."
        },
        { src: "/assets/manali.png", place: "Manali",
            description:
            "Tucked in the heart of the Kullu Valley, Manali was once an ancient trade route and now a hub for thrill-seekers and nature lovers. Explore Solang Valley’s snowy landscapes, trek through Hampta Pass, or indulge in paragliding, river rafting, and skiing. With its cozy cafes, apple orchards, and breathtaking vistas, Manali is the perfect getaway for adventure and relaxation."
        },
        { src: "/assets/jama-masjid.png", place: "Jama Masjid",
            description:
            "Commissioned by Mughal Emperor Shah Jahan in 1656, Delhi’s Jama Masjid remains one of India’s grandest mosques. Its towering minarets, intricate carvings, and expansive courtyard transport visitors to an era of royal magnificence. Stand atop its minarets for a breathtaking panoramic view of Old Delhi, where history and modern life intertwine seamlessly."
        }
    ];

    const settings = {
        dots: true, // Show dots at the bottom
        infinite: true, // Infinite loop
        speed: 500, // Animation speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Automatic slide change
        autoplaySpeed: 3000, // Delay between slides (in ms)
        afterChange: (index) => setCurrentSlide(index), // Update current slide index
        prevArrow: <div className="hidden"></div>,
        nextArrow: <div className="hidden"></div>,
    }

    return (
        <div className="flex flex-col bg-white rounded-lg p-6 shadow-md mt-[80px] w-full mx-auto max-w-7xl overflow-hidden">
            {/* Title */}
            <div className="flex flex-col text-center font-bold text-[25px] gap-2">
                <span className="text-[#1976D2]">Discover India's Treasures</span>
                <span className="text-[#FF6F00]">Iconic Landmarks & Wildlife</span>
            </div>

            {/* Content Section */}
            <div className="mt-4 flex flex-row">
                {/* Slider Component */}
                <div className="w-1/2 relative">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image.src} alt={image.place} className="w-full h-auto rounded-lg" />
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
        </div>
    );
};

export default Explore;