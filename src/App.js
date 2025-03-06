import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import Navbar from "./components/layout/Navbar";
import OpenRoute from "./components/auth/OpenRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Guide from "./components/guide-registration/Guide";
import RegisterSuccess from "./components/guide-registration/Success";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PlaceDetail from "./components/tours/PlaceDetail";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import VerifyEmail from "./pages/Verify-Email";
import Error from "./pages/Error";
import ForgotPassword from "./pages/Forgot-Password";
import UpdatePassword from "./pages/Update-Password";
import About from "./pages/About";
import GuidePage from "./pages/GuidePage";
import TouristDashboard from "./components/dashboard/Tourist";
import GuideDashboard from "./components/dashboard/Guide";
import VerificationPending from "./components/VerificationPending";
import "@fontsource/poppins";
import { AuthContext } from "./context/AuthContext"; // Import AuthContext

function App() {
  const location = useLocation();
  const { user } = useContext(AuthContext); // Get user from AuthContext

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-screen min-h-screen bg-[#F7F5F2] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/guide-registration" element={<Guide />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/hire-guide" element={<GuidePage />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route 
          path="/signup" 
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          } 
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route 
          path="/tourist-dashboard" 
          element={
            <ProtectedRoute>
              <TouristDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Protected Guide Dashboard Route */}
        <Route
          path="/guide-dashboard"
          element={
            user?.verificationStatus === "verified" ? (
              <GuideDashboard />
            ) : (
              <VerificationPending />
            )
          }
        />

        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
}

export default App;