import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Handle input fields
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        }));
    };

    // Handle form submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully!");
        
        const signupData = { ...formData };
        // Simulating dispatch actions for signup
        dispatch({ type: "SET_SIGNUP_DATA", payload: signupData });

        // Navigate to OTP verification or login
        navigate("/verify-email");

        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-2 w-full">
                    <AiOutlineUser size={20} className="text-gray-600" />
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder="First Name"
                        className="form-input w-full p-2 border rounded-md"
                    />
                    </label>
                    <label className="flex items-center gap-2 w-full">
                    <AiOutlineUser size={20} className="text-gray-600" />
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder="Last Name"
                        className="form-input w-full p-2 border rounded-md"
                    />
                    </label>
                </div>
                <label className="flex items-center gap-2 w-full">
                    <AiOutlineMail size={20} className="text-gray-600" />
                    <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Email Address"
                    className="form-input w-full p-2 border rounded-md"
                    />
                </label>
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-2 relative w-full">
                    <AiOutlineLock size={20} className="text-gray-600" />
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="Password"
                        className="form-input w-full p-2 border rounded-md"
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 cursor-pointer text-gray-600"
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                    </label>
                    <label className="flex items-center gap-2 relative w-full">
                    <AiOutlineLock size={20} className="text-gray-600" />
                    <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder="Confirm Password"
                        className="form-input w-full p-2 border rounded-md"
                    />
                    <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 cursor-pointer text-gray-600"
                    >
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                    </label>
                </div>
                <Link to="/verify-email">
                    <button
                        type="submit"
                        className="bg-[#FF6F00] text-white rounded-md py-2 mt-4 hover:bg-blue-600 w-full"
                    >
                        Create Account
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default SignupForm;
