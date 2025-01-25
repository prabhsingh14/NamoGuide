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
                        Revolutionizing Tourism for a Seamless Travel Experience
                        <p className="mx-auto mt-3 text-center text-base font-medium text-black lg:w-[95%]">
                            Tour-Ease is on a mission to transform the tourism experience by connecting tourists with verified guides, 
                            ensuring authenticity, safety, and convenience through cutting-edge technology and personalized services.
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
                                Tour-Ease was born out of a desire to bridge the gap between tourists and local guides, ensuring authentic experiences while addressing safety and trust issues in the tourism industry. Our founders, with a deep passion for travel, envisioned a platform that empowers both tourists and guides through innovation and collaboration.
                            </p>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                We aim to create a secure and enriching environment where tourists can explore confidently and guides can showcase their expertise and culture authentically.
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
                                To revolutionize the tourism industry by fostering authentic connections between tourists and verified guides, promoting cultural exchange, and ensuring a seamless travel experience.
                            </p>
                        </div>
                        <div className="flex flex-col gap-10 lg:w-[40%]">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-black lg:w-[95%]">
                                To provide a secure platform that prioritizes tourist safety, offers AI-based personalized recommendations, and ensures guides are verified, professional, and passionate about delivering exceptional experiences.
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