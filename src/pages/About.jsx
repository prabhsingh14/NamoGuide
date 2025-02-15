import React from "react";
import FoundingStory from "../images/founding-story.webp";
import BannerImage1 from "../images/banner-1.jpg";
import BannerImage2 from "../images/banner-2.webp";
import BannerImage3 from "../images/banner-3.jpg";
import Footer from "../components/layout/Footer";

const About = () => {
    return (
        <div className="bg-[#FF6F0026]">
            {/* Hero Section */}
            <section>
                <div className="relative mx-auto flex w-11/12 max-w-max flex-col items-center gap-10 text-center text-black">
                    <header className="text-4xl font-semibold lg:w-[70%] mx-auto py-20">
                        Revolutionizing Tourism in India: Creating Seamless Travel Experiences
                        <p className="mx-auto mt-3 text-center text-base font-medium text-black lg:w-[95%]">
                            SmoothTrips is on a mission to transform the tourism experience in India by connecting tourists with verified, authentic guides, 
                            ensuring safety, convenience, and a seamless travel experience through cutting-edge technology and personalized services.
                        </p>
                    </header>
                    <div className="sm:h-[70px] lg:h-[150px]"></div>
                    <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[40%] grid-cols-3 gap-3 lg:gap-5">
                        <img src={BannerImage1} alt="Tourism Image 1" className="rounded-lg shadow-lg object-cover" />
                        <img src={BannerImage2} alt="Tourism Image 2" className="rounded-lg shadow-lg object-cover h-[270px] w-[500px]" />
                        <img src={BannerImage3} alt="Tourism Image 3" className="rounded-lg shadow-lg object-cover h-[270px] w-[500px]" />
                    </div>
                </div>
            </section>

            {/* Founding Story Section */}
            <section className="py-24 mt-24">
                <div className="mx-auto w-11/12 max-w-maxContent text-richblack-500">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="flex flex-col gap-10 lg:w-[50%]">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Founding Story
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                SmoothTrips was born out of a passion to bridge the gap between tourists and local guides, ensuring authentic, trustworthy, and enriching travel experiences in India. 
                                Our founders, who deeply understand the essence of India's culture and hospitality, envisioned a platform to connect tourists with verified local guides, bringing forth a world of cultural exchange and discovery.
                            </p>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                We strive to create a platform where tourists feel safe and confident exploring the beauty and history of India, while guides can showcase their expertise, culture, and unique stories.
                            </p>
                        </div>
                        <div className="lg:w-[40%] mt-10">
                            <img src={FoundingStory} alt="Founding Story" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-24">
                <div className="mx-auto w-11/12 max-w-max text-black">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="flex flex-col gap-10 lg:w-[40%]">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-black lg:w-[95%]">
                                To become the go-to platform for India tourism by fostering authentic connections between tourists and local guides, 
                                promoting cultural exchange, and offering a seamless and safe travel experience in India's rich historical and spiritual landscape.
                            </p>
                        </div>
                        <div className="flex flex-col gap-10 lg:w-[40%]">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-black lg:w-[95%]">
                                Our mission is to connect tourists with verified, local guides in India who are passionate about showcasing their culture and heritage. 
                                We prioritize safety, seamless bookings, AI-based personalized recommendations, and an enriching experience for every tourist while empowering guides to earn and share their expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;