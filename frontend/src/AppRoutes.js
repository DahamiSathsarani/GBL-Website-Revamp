import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/Products";
import LeaderShipTeam from "./pages/LeaderShipTeam";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import BpoKpo from "./pages/BpoKpo";
import ItInfrastructure from "./pages/ItInfrastructure";
import DigitalMarketing from "./pages/DigitalMarketing";

export default function AppRoutes(){
    return (
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/about-us" element={<AboutUs/>} />
        <Route path="/company/leadership-team" element={<LeaderShipTeam/>} />
        <Route path="/our-services/web-development" element={<ApplicationDevelopment/>} />
        <Route path="/our-services/bpo-kpo" element={<BpoKpo/>} />
        <Route path="/our-services/it-infrastructure" element={<ItInfrastructure/>} />
        <Route path="/our-services/digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-products" element={<OurProducts />} />
      </Routes>
    </Router>
    )
}