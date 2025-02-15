import React from 'react'
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
//import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const {signUpData, loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!signUpData) {
    //         navigate("/signup");
    //     }
    // }, []);

    const handleVerifyAndSignUp = (e) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signUpData;

        // dispatch(
        //     signUp({
        //         firstName,
        //         lastName,
        //         email,
        //         password,
        //         confirmPassword,
        //         otp,
        //     })
        // )
    }

    return (
        <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center bg-[#FF6F0026]">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="spinner"></div>
                    <p className="text-gray-700 mt-4">Loading...</p>
                </div>
            ) : (
                <div className="max-w-[500px] bg-white shadow-lg rounded-lg p-6 lg:p-8">
                    <h1 className="text-gray-900 font-semibold text-[1.875rem] leading-[2.375rem]">
                        Verify Email
                    </h1>
                    <p className="text-gray-600 text-[1.125rem] leading-[1.625rem] my-4">
                        A verification code has been sent to your email. Enter the code below to verify.
                    </p>
                    <form onSubmit={handleVerifyAndSignUp} className="space-y-4">
                        <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input
                            {...props}
                            placeholder="-"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            className="w-[48px] lg:w-[60px] border border-gray-300 bg-gray-50 rounded-lg text-gray-900 aspect-square text-center focus:border-[#1D4ED8] focus:outline-none"
                            />
                        )}
                        containerStyle={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "8px",
                        }}
                        />
                        <button
                        type="submit"
                        className="w-full bg-[#1D4ED8] text-white py-3 px-4 rounded-lg font-medium transition-all duration-200"
                        >
                            Verify Email
                        </button>
                        {/* on submit takes to dashboard */}
                    </form>
                    <div className="mt-6 flex items-center justify-between text-sm">
                        <Link to="/signup" className="text-[#1D4ED8] flex items-center gap-x-2">
                        <BiArrowBack /> Back To Signup
                        </Link>
                        <button
                        className="flex items-center text-[#1D4ED8] gap-x-2"
                        // onClick={() => dispatch(sendOtp(signupData.email))}
                        >
                        <RxCountdownTimer /> Resend Code
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VerifyEmail