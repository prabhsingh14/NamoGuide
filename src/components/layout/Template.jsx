import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

function Template({ formType, setIsLoggedIn }) {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const renderForm = () => {
    return formType === "login" ? <LoginForm setIsLoggedIn={setIsLoggedIn} /> : <SignupForm setIsLoggedIn={setIsLoggedIn} />;
  };

  // Handle Google login success
  const handleGoogleSuccess = async (response) => {
    console.log("Google login success:", response);
    const { credential } = response;

    try {
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: credential }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(true);
        toast.success("Google login successful!");
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/dashboard");
      } else {
        toast.error("Google login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  // Handle Google login failure
  const handleGoogleFailure = () => {
    console.error("Google login failed");
    toast.error("Google login failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_ID}>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-[40%] bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-700">Welcome Back!</h2>
            <p className="text-gray-600 mt-4">Join us and explore new opportunities.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-[60%] flex flex-col justify-center items-center bg-white">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              {/* Company Name and Tagline */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-[#1D4ED8]" style={{ fontFamily: '"Segoe Script", cursive' }}>
                  Smooth<span className="text-[#F97316]">Trips</span>
                </h1>
                <p className="text-gray-500">Not just a trip, but a memory!</p>
              </div>

              {/* Buttons for Google and Facebook */}
              <div className="flex flex-row gap-4">
                {/* Google Login Button */}
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />

                {/* Facebook Login Button */}
                <button className="flex items-center gap-2 bg-[#FF6F0026] border border-gray-300 py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-100 hover:shadow transition">
                  <FaFacebook className="text-2xl text-blue-600" />
                  <span className="font-medium">Continue with Facebook</span>
                </button>
              </div>

              {/* Divider with Text */}
              <div className="flex items-center w-full my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 font-medium">or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Login/Signup Form */}
              <div className="w-full">{renderForm()}</div>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Template;
