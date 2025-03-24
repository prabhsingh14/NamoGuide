import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function UpdatePassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-[#F7F5F2] px-4 sm:px-6 md:px-8">
            {loading ? (
                <div className="spinner"></div>
            ) : (
                <div className="w-full max-w-[500px] p-6 lg:p-10 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold leading-8 text-gray-900 sm:text-xl">Choose New Password</h1>
                    <p className="mt-4 text-lg leading-6 text-gray-600 sm:text-base">Almost done. Enter your new password and you're all set.</p>
                    
                    <form className="mt-6">
                        <label className="relative block">
                            <p className="mb-2 text-sm font-medium text-gray-700 sm:text-xs">New Password <sup className="text-[#F97316]">*</sup></p>
                            <div className="relative">
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Enter Password"
                                    className="w-full rounded-md border border-gray-300 p-3 pr-12 text-gray-900 focus:border-[#1D4ED8] focus:ring-[#1D4ED8] sm:p-2"
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={20} className="text-gray-500" />
                                    ) : (
                                        <AiOutlineEye fontSize={20} className="text-gray-500" />
                                    )}
                                </span>
                            </div>
                        </label>
                        
                        <label className="relative block mt-4">
                            <p className="mb-2 text-sm font-medium text-gray-700 sm:text-xs">Confirm New Password <sup className="text-[#F97316]">*</sup></p>
                            <div className="relative">
                                <input
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder="Confirm Password"
                                    className="w-full rounded-md border border-gray-300 p-3 pr-12 text-gray-900 focus:border-[#1D4ED8] focus:ring-[#1D4ED8] sm:p-2"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={20} className="text-gray-500" />
                                    ) : (
                                        <AiOutlineEye fontSize={20} className="text-gray-500" />
                                    )}
                                </span>
                            </div>
                        </label>
                        
                        <button
                            type="submit"
                            className="mt-6 w-full rounded-md bg-[#1D4ED8] py-3 px-4 text-center text-white font-medium hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] sm:py-2">
                            Reset Password
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-between sm:flex-col sm:gap-2">
                        <Link to="/dashboard">
                            <p className="flex items-center gap-x-2 text-[#1D4ED8] sm:text-xs">
                                <BiArrowBack /> Back To Dashboard
                            </p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdatePassword;