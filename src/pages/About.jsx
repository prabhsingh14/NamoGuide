import React from "react";
import FoundingStory from "../images/founding-story.png";
import BannerImage1 from "../images/banner-1.jpg";
import BannerImage2 from "../images/banner-2.png";
import BannerImage3 from "../images/banner-3.jpg";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="bg-[#FF6F0026]">
         <Helmet>
                <meta
                    name="description"
                    content="NamoGuide is revolutionizing tourism in India by connecting tourists with verified local guides. Learn about our founding story, vision, and mission to create seamless travel experiences."
                />
                <title>About Us - NamoGuide</title> {/* Optional: Add a title for the page */}
            </Helmet>
            {/* Hero Section */}
            <section>
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center gap-4 
                    [@media(max-width:375px)]:gap-2 [@media(max-width:320px)]:gap-1 text-center text-black">
                    
                    {/* Header */}
                    <header className="text-xl sm:text-3xl md:text-4xl font-semibold lg:w-[70%] mx-auto py-8 
                        [@media(max-width:375px)]:text-lg [@media(max-width:320px)]:text-base 
                        [@media(max-width:375px)]:py-4 [@media(max-width:320px)]:py-2">
                        Revolutionizing Tourism in India: Creating Seamless Travel Experiences
                        <p className="mx-auto mt-3 text-center text-xs sm:text-base font-medium text-black lg:w-[95%] 
                            [@media(max-width:375px)]:text-[10px] [@media(max-width:320px)]:text-[9px]">
                            NamoGuide is on a mission to transform the tourism experience in India by connecting tourists with verified, 
                            authentic guides, ensuring safety, convenience, and a seamless travel experience through cutting-edge 
                            technology and personalized services.
                        </p>
                    </header>

                    {/* Spacer for Banner Images */}
                    <div className="h-[50px] sm:h-[70px] lg:h-[150px] 
                        [@media(max-width:375px)]:h-[30px] [@media(max-width:320px)]:h-[20px]"></div>

                    {/* Banner Images */}
                    <div className="absolute bottom-0 left-[50%] grid w-full translate-x-[-50%] translate-y-[40%] grid-cols-1 sm:grid-cols-3 sm:gap-3 lg:gap-5 
                        [@media(max-width:375px)]:gap-2 [@media(max-width:320px)]:gap-1">
                        <img src={BannerImage1} alt="Tourism Image 1" className="rounded-lg shadow-lg object-cover w-full h-32 sm:h-64 lg:h-72 
                            [@media(max-width:375px)]:h-20 [@media(max-width:320px)]:h-16" />
                        <img src={BannerImage2} alt="Tourism Image 2" className="rounded-lg shadow-lg object-cover w-full h-32 sm:h-64 lg:h-72 
                            [@media(max-width:375px)]:h-20 [@media(max-width:320px)]:h-16" />
                        <img src={BannerImage3} alt="Tourism Image 3" className="rounded-lg shadow-lg object-cover w-full h-32 sm:h-64 lg:h-72 
                            [@media(max-width:375px)]:h-20 [@media(max-width:320px)]:h-16" />
                    </div>
                </div>
            </section>

            {/* Founding Story Section */}
            <section className="py-12 md:py-24 mt-12 md:mt-24 
                [@media(max-width:375px)]:py-6 [@media(max-width:320px)]:py-4 
                [@media(max-width:375px)]:mt-6 [@media(max-width:320px)]:mt-4">
                
                <div className="mx-auto w-11/12 max-w-maxContent text-richblack-500">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        
                        {/* Text Content */}
                        <div className="flex flex-col gap-10 lg:w-[50%]">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-2xl sm:text-3xl md:text-4xl 
                                font-semibold text-transparent lg:w-[70%] 
                                [@media(max-width:375px)]:text-lg [@media(max-width:320px)]:text-base">
                                Our Founding Story
                            </h1>
                            <p className="text-xs sm:text-base font-medium text-richblack-300 lg:w-[95%] 
                                [@media(max-width:375px)]:text-[10px] [@media(max-width:320px)]:text-[9px]">
                                NamoGuide was born out of a passion to bridge the gap between tourists and local guides, ensuring authentic, 
                                trustworthy, and enriching travel experiences in India. Our founders, who deeply understand the essence of 
                                India's culture and hospitality, envisioned a platform to connect tourists with verified local guides, bringing 
                                forth a world of cultural exchange and discovery.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="lg:w-[40%] mt-10">
                            <img src={FoundingStory} alt="Founding Story" className="rounded-lg shadow-lg w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-12 md:py-24 
                [@media(max-width:375px)]:py-6 [@media(max-width:320px)]:py-4">
                
                <div className="mx-auto w-11/12 max-w-max text-black">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        
                        {/* Vision */}
                        <div className="flex flex-col gap-10 lg:w-[40%]">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-2xl sm:text-3xl md:text-4xl 
                                font-semibold text-transparent lg:w-[70%] 
                                [@media(max-width:375px)]:text-lg [@media(max-width:320px)]:text-base">
                                Our Vision
                            </h1>
                            <p className="text-xs sm:text-base font-medium text-black lg:w-[95%] 
                                [@media(max-width:375px)]:text-[10px] [@media(max-width:320px)]:text-[9px]">
                                To become the go-to platform for India tourism by fostering authentic connections between tourists and local 
                                guides, promoting cultural exchange, and offering a seamless and safe travel experience in India's rich 
                                historical and spiritual landscape.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="flex flex-col gap-10 lg:w-[40%]">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-2xl sm:text-3xl md:text-4xl 
                                font-semibold text-transparent lg:w-[70%] 
                                [@media(max-width:375px)]:text-lg [@media(max-width:320px)]:text-base">
                                Our Mission
                            </h1>
                            <p className="text-xs sm:text-base font-medium text-black lg:w-[95%] 
                                [@media(max-width:375px)]:text-[10px] [@media(max-width:320px)]:text-[9px]">
                                Our mission is to connect tourists with verified, local guides in India who are passionate about showcasing 
                                their culture and heritage.
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
