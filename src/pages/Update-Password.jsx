import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { resetPassword } from "../services/operations/authAPI";

function UpdatePassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
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

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     const token = location.pathname.split("/").at(-1);
    //     dispatch(resetPassword(password, confirmPassword, token, navigate));
    // };

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-[#F7F5F2]">
        {loading ? (
            <div className="spinner"></div>
        ) : (
            <div className="max-w-[500px] p-6 lg:p-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold leading-8 text-gray-900">
                    Choose New Password
                </h1>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                    Almost done. Enter your new password and you're all set.
                </p>
                <form className="mt-6">
                    <label className="relative block">
                    <p className="mb-2 text-sm font-medium text-gray-700">
                        New Password <sup className="text-[#F97316]">*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="Enter Password"
                        className="w-full rounded-md border border-gray-300 p-3 pr-10 text-gray-900 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[40px] cursor-pointer"
                    >
                        {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={20} className="text-gray-500" />
                        ) : (
                        <AiOutlineEye fontSize={20} className="text-gray-500" />
                        )}
                    </span>
                    </label>

                    <label className="relative block mt-4">
                    <p className="mb-2 text-sm font-medium text-gray-700">
                        Confirm New Password <sup className="text-[#F97316]">*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder="Confirm Password"
                        className="w-full rounded-md border border-gray-300 p-3 pr-10 text-gray-900 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                    <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[40px] cursor-pointer"
                    >
                        {showConfirmPassword ? (
                        <AiOutlineEyeInvisible fontSize={20} className="text-gray-500" />
                        ) : (
                        <AiOutlineEye fontSize={20} className="text-gray-500" />
                        )}
                    </span>
                    </label>

                    <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-[#1D4ED8] py-3 px-4 text-center text-white font-medium hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    >
                    Reset Password
                    </button>
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link to="/dashboard">
                    <p className="flex items-center gap-x-2 text-[#1D4ED8]">
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