import React from 'react'
import Footer from '../components/layout/Footer'
import ContactDetails from '../components/contact/contactDetails'
import ContactForm from '../components/contact/contactForm'
import { Helmet } from "react-helmet";
const Contact = () => {
    return (
        <div>
            <div>
                <div className="mx-auto mt-20 flex w-11/12 max-w-max flex-col justify-between gap-10 text-black lg:flex-row">
                 <Helmet>
                                <meta
                                    name="description"
                                    content="The Contact Us Page has been designed to help tourists directly contact the team in case of any urgent query/problem. "
                                />
                                <title>Forgot Password- NamoGuide</title> {/* Optional: Add a title for the page */}
                            </Helmet>
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