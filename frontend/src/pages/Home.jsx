import HeroSection from "../component/LandingPageComponents/HeroSection";
import Clients from "../component/LandingPageComponents/Clients";
import OurServices from "../component/LandingPageComponents/OurServices";
import MainLayout from "../component/sharedComponents/MainLayout";
import React from "react";
import OurPartners from "../component/LandingPageComponents/OurPartners";

export default function Home(){
    return(<div>
        <MainLayout>
        <HeroSection/>
        <OurServices/>
        </MainLayout>
    </div>)
    
}