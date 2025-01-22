import React from 'react';

const StateMain = ({ name, tagline, image, list }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg p-6 shadow-md mt-[80px] w-full mx-auto max-w-7xl">
            <div className="flex flex-col text-center font-bold text-[25px] gap-2">
                <h1 className="text-[#1976D2]">{name}</h1>
                <p className="text-[#FF6F00]">{tagline}</p>
            </div>

            <div className="mt-4 flex flex-row">
                <img src={image} alt="state-image"/>
                <div className="flex flex-col justify-center pl-6">
                <ul className="list-none space-y-3">
                    {list.map((item, index) => (
                    <li key={index} className="text-black text-lg font-medium leading-relaxed p-2 flex items-center">
                        <span className="text-[#1976D2] mr-3">&#x2714;</span> {/* Tick icon */}
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default StateMain;