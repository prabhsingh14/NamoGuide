import React from 'react'
import { RxQuestionMarkCircled } from "react-icons/rx";
import chooseUsData from '../data/chooseUsData';

// Card Component
const WhyUsCard = ({ icon, heading, description }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center h-full bg-white p-4 shadow-md rounded-lg'>
            <div className="text-4xl text-[#F97316] mb-4">{icon}</div> 
            <h2 className='font-bold text-xl mt-2 mb-10'>{heading}</h2>
            <p className='mt-4'>{description}</p>
        </div>
    );
};

// main component
const ChooseUs = () => {
    return (
        <div className='flex flex-col items-center mt-[100px]'>
            <RxQuestionMarkCircled className='text-[#F97316] text-[60px]'/>
            <h2 className='text-[#1D4ED8] text-[40px] font-bold'>Why choose us?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-11/12'>
                {chooseUsData.map((whyUs, index) => (
                    <WhyUsCard key={index} {...whyUs} />
                ))}
            </div>
        </div>
    )
}

export default ChooseUs