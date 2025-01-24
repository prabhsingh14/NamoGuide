import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const { email, password } = formData;

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
        setIsLoggedIn(true);
        toast.success("Account logged in successfully!");
        
        const loginData = { ...formData };
        dispatch({ type: "SET_LOGIN_DATA", payload: loginData });

        navigate("/dashboard");

        // Reset form
        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
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
                        
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 cursor-pointer text-gray-600">
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </label>

                    <Link to="/forgot-password">
                        <p className="text-[#FF6F00] text-sm">Forgot Password?</p>
                    </Link>
                </div>
                
                <button type="submit" className="bg-[#FF6F00] text-white rounded-md py-2 mt-4 hover:bg-blue-600">
                    Login 
                </button>
            </form>
        </div>
    );
}

export default LoginForm;