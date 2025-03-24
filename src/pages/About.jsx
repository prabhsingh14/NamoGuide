import React from "react";
import FoundingStory from "../images/founding-story.png";
import BannerImage1 from "../images/banner-1.jpg";
import BannerImage2 from "../images/banner-2.png";
import BannerImage3 from "../images/banner-3.jpg";
import Footer from "../components/layout/Footer";

const About = () => {
    return (
        <div className="bg-[#FF6F0026]">
            {/* Hero Section */}
            <section className="relative pb-32 md:pb-48 lg:pb-64 pt-10 md:pt-16">
                <div className="mx-auto w-11/12 max-w-6xl flex flex-col items-center gap-6 md:gap-10 text-center text-black">
                    <header className="w-full lg:w-[80%] mx-auto py-8 md:py-12 lg:py-16">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                            Revolutionizing Tourism in India: Creating Seamless Travel Experiences
                        </h1>
                        <p className="mx-auto text-sm md:text-base font-medium text-black w-full lg:w-[95%]">
                            NamoGuide is on a mission to transform the tourism experience in India by connecting tourists with verified, authentic guides, 
                            ensuring safety, convenience, and a seamless travel experience through cutting-edge technology and personalized services.
                        </p>
                    </header>
                    
                    {/* Banner Images - Responsive Grid */}
                    <div className="absolute bottom-0 left-[50%] w-full md:w-[90%] lg:w-[85%] translate-x-[-50%] translate-y-[30%] md:translate-y-[40%]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 px-4 md:px-0">
                            <div className="hidden md:block">
                                <img src={BannerImage1} alt="Tourism Image 1" className="rounded-lg shadow-lg object-cover w-full h-32 md:h-48 lg:h-64" />
                            </div>
                            <div>
                                <img src={BannerImage2} alt="Tourism Image 2" className="rounded-lg shadow-lg object-cover w-full h-32 md:h-48 lg:h-64" />
                            </div>
                            <div className="hidden md:block">
                                <img src={BannerImage3} alt="Tourism Image 3" className="rounded-lg shadow-lg object-cover w-full h-32 md:h-48 lg:h-64" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founding Story Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48">
                <div className="mx-auto w-11/12 max-w-6xl">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
                        <div className="flex flex-col gap-6 w-full lg:w-[50%]">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent">
                                Our Founding Story
                            </h1>
                            <p className="text-sm md:text-base font-medium text-richblack-300">
                                NamoGuide was born out of a passion to bridge the gap between tourists and local guides, ensuring authentic, trustworthy, and enriching travel experiences in India. 
                                Our founders, who deeply understand the essence of India's culture and hospitality, envisioned a platform to connect tourists with verified local guides, bringing forth a world of cultural exchange and discovery.
                            </p>
                            <p className="text-sm md:text-base font-medium text-richblack-300">
                                We strive to create a platform where tourists feel safe and confident exploring the beauty and history of India, while guides can showcase their expertise, culture, and unique stories.
                            </p>
                        </div>
                        <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
                            <img src={FoundingStory} alt="Founding Story" className="rounded-lg shadow-lg w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-16 md:py-20 lg:py-24">
                <div className="mx-auto w-11/12 max-w-6xl text-black">
                    <div className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:justify-between">
                        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[48%]">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent">
                                Our Vision
                            </h1>
                            <p className="text-sm md:text-base font-medium text-black">
                                To become the go-to platform for India tourism by fostering authentic connections between tourists and local guides, 
                                promoting cultural exchange, and offering a seamless and safe travel experience in India's rich historical and spiritual landscape.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[48%]">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent">
                                Our Mission
                            </h1>
                            <p className="text-sm md:text-base font-medium text-black">
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