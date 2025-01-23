import React from 'react'
import Footer from '../components/layout/Footer'
import ContactDetails from '../components/contact/contactDetails'
import ContactForm from '../components/contact/contactForm'

const Contact = () => {
    return (
        <div>
            <div>
                <div className="mx-auto mt-20 flex w-11/12 max-w-max flex-col justify-between gap-10 text-black lg:flex-row">
                    {/* Contact Details */}
                    <div className="lg:w-[40%]">
                        <ContactDetails />
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-[60%]">
                        <ContactForm />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact