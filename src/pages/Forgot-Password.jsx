import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-[#FF6F0026]">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="spinner"></div>
                    <p className="text-gray-700 mt-4">Loading...</p>
                </div>
            ) : (
                <div className="max-w-[500px] bg-white shadow-lg rounded-lg p-6 lg:p-8">
                    <h1 className="text-gray-900 font-semibold text-[1.875rem] leading-[2.375rem]">
                        {!emailSent ? "Reset your password" : "Check your email"}
                    </h1>
                    <p className="my-4 text-gray-600 text-[1.125rem] leading-[1.625rem]">
                        {!emailSent
                            ? "We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                            : `We have sent the reset email to ${email}`}
                    </p>
                    <form>
                        {!emailSent && (
                            <label className="w-full">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-700">
                                    Email Address <sup className="text-red-500">*</sup>
                                </p>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email address"
                                    className="w-full border border-gray-300 bg-gray-50 rounded-lg py-2 px-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                                />
                            </label>
                        )}
                        <button
                            type="submit"
                            className="mt-6 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 font-medium transition-all duration-200"
                        >
                            {!emailSent ? "Submit" : "Resend Email"}
                        </button>
                    </form>
                    <div className="mt-6 flex items-center justify-between text-sm">
                        <Link to="/login" className="text-blue-600 hover:text-blue-700 flex items-center gap-x-2">
                            <BiArrowBack /> Back To Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ForgotPassword;