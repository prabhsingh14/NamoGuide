import React from 'react'
import { useLocation } from 'react-router-dom'
import { Checkmark } from 'react-checkmark'
import { IoBag } from "react-icons/io5";
import Footer from '../layout/Footer';

const Success = () => {
    const location = useLocation();
    const type = location.state?.type || "User";
    const description = location.state?.description || "Thank you for registering with us!";

    return (
        <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
            <section className='bg-white p-12 shadow-lg mx-auto my-12 w-full max-w-4xl rounded-2xl border border-gray-200 text-center'>
                <IoBag className="text-5xl text-[#F97316] mx-auto" />
                <h2 className="text-[#1D4ED8] text-3xl font-bold mt-5">Register as {type}</h2>
                <p className="font-medium mt-6 text-gray-800 leading-relaxed px-4 mb-10">
                    {description}
                </p>

                <Checkmark size={60} color="green"/>
                <p className='uppercase text-green-500 font-bold mt-2'>Success!</p>
                <p className='text-gray-600 font-medium mt-2'>Thank you for registering with us.
                    Your application has been recorded and we’ll reach out to you via mail/call for further updates.
                    Keep checking: http://localhost:3000/guide-dashboard to track your application status.
                </p>
            </section>
            <Footer />
        </main>
    )
}

export default Success;