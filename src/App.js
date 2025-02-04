import "./App.css";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./pages/Verify-Email"
import ForgotPassword from "./pages/Forgot-Password";
import UpdatePassword from "./pages/Update-Password";
import About from "./pages/About";
import TourDetails from "./pages/TourDetails";
import TourDetailsPage from "./pages/TourDetailsPage";
import "@fontsource/poppins";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-screen min-h-screen bg-[#FF6F0026] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tours/:id" element = {<TourDetails />} />
        <Route path="/tours/:cityId/:tourId" element = {<TourDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;