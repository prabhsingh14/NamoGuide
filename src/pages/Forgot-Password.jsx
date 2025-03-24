import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-[#F7F5F2] 
            [@media(max-width:425px)]:px-4 [@media(max-width:320px)]:px-2">
             <Helmet>
                <meta
                    name="description"
                    content="The Forgot Password Page has been designed to direct tourists to forgot password page in case they do not remember their passwords  "
                />
                <title>Forgot Password- NamoGuide</title> {/* Optional: Add a title for the page */}
            </Helmet>
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="spinner"></div>
                    <p className="text-gray-700 mt-4 text-lg 
                        [@media(max-width:425px)]:text-base [@media(max-width:320px)]:text-sm">
                        Loading...
                    </p>
                </div>
            ) : (
                <div className="max-w-[500px] bg-white shadow-lg rounded-lg p-6 lg:p-8 
                    [@media(max-width:768px)]:p-6 [@media(max-width:425px)]:p-4 [@media(max-width:320px)]:p-3">
                    
                    <h1 className="text-gray-900 font-semibold text-[1.875rem] leading-[2.375rem] 
                        [@media(max-width:768px)]:text-[1.5rem] [@media(max-width:425px)]:text-[1.25rem] [@media(max-width:320px)]:text-lg">
                        {!emailSent ? "Reset your password" : "Check your email"}
                    </h1>

                    <p className="my-4 text-gray-600 text-[1.125rem] leading-[1.625rem] 
                        [@media(max-width:768px)]:text-base [@media(max-width:425px)]:text-sm [@media(max-width:320px)]:text-xs">
                        {!emailSent
                            ? "We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                            : `We have sent the reset email to ${email}`}
                    </p>

                    <form>
                        {!emailSent && (
                            <label className="w-full">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-700 
                                    [@media(max-width:425px)]:text-sm [@media(max-width:320px)]:text-xs">
                                    Email Address <sup className="text-[#F97316]">*</sup>
                                </p>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email address"
                                    className="w-full border border-gray-300 bg-gray-50 rounded-lg py-2 px-3 text-gray-900 
                                        focus:border-[#1D4ED8] focus:outline-none 
                                        [@media(max-width:425px)]:py-1.5 [@media(max-width:320px)]:py-1"
                                />
                            </label>
                        )}
                        <button
                            type="submit"
                            className="mt-6 w-full rounded-lg bg-[#1D4ED8] text-white py-3 px-4 font-medium transition-all duration-200 
                                [@media(max-width:425px)]:py-2 [@media(max-width:320px)]:py-1.5">
                            {!emailSent ? "Submit" : "Resend Email"}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-between text-sm 
                        [@media(max-width:425px)]:flex-col [@media(max-width:425px)]:gap-2">
                        
                        <Link to="/login" className="text-[#1D4ED8] flex items-center gap-x-2 
                            [@media(max-width:320px)]:text-xs">
                            <BiArrowBack /> Back To Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ForgotPassword;
