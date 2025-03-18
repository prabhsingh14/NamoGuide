import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiConnector.js"
import { contactusEndpoint } from "../../services/apis.js"

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const submitContactForm = async (data) => {
        try {
            const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            if (res?.data?.success) {
                console.log("Message sent successfully!");
            } else {
                console.error("Error:", res?.data?.message || "Unknown error");
            }
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
        }
    };    

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            })
        }
    }, [reset, isSubmitSuccessful])

    return (
        <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(submitContactForm)}
        >
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="firstname" className="font-bold text-black">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder="Enter first name"
                        className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please Enter Your First Name.
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="lastname" className="font-bold text-black">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        placeholder="Enter last name"
                        className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                        {...register("lastname")}
                    />
                    {errors.lastname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please Enter Your Last Name.
                        </span>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-black">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Email address.
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phonenumber" className="font-bold text-black">
                    Phone Number
                </label>

                <div className="flex gap-5">
                    <div className="flex w-[81px] flex-col gap-2">
                        <select
                            className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                            {...register("countrycode", { required: true })}
                        >
                            {CountryCode.map((ele, i) => (
                                <option key={i} value={ele.code}>
                                    {ele.code} - {ele.country}
                                </option>
                            ))}
                        </select>
                        {errors.countrycode && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please select your Country Code.
                            </span>
                        )}
                    </div>
                    <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                        <input
                            type="tel"
                            id="phonenumber"
                            placeholder="1234567890"
                            className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                            {...register("phoneNo", {
                                required: {
                                    value: true,
                                    message: "Please enter your Phone Number.",
                                },
                                pattern: {
                                    value: /^\d{7,15}$/,
                                    message: "Phone Number must be between 7 and 15 digits.",
                                }
                            })}
                        />
                        {errors.phoneNo && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                {errors.phoneNo.message}
                            </span>
                        )}
                    </div>
                </div>
                {errors.phoneNo && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        {errors.phoneNo.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-black">
                    Message
                </label>
                <textarea
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter your message here"
                    className="w-full rounded-md border border-gray-400 bg-white p-2 text-black"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Message.
                    </span>
                )}
            </div>

            <button
                type="submit"
                className={`rounded-md bg-[#F97316] px-6 py-3 text-center text-[13px] font-bold text-white shadow-[0px_24px_20px_-10px_rgba(50,50,50,0.10)]
                transition-all duration-200 hover:scale-95 hover:shadow-none sm:text-[16px]`}
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactUsForm