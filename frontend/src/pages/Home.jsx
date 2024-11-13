import HeroSection from "../component/LandingPageComponents/HeroSection";
import Clients from "../component/LandingPageComponents/Clients";
import OurServices from "../component/LandingPageComponents/OurServices";
import MainLayout from "../component/SharedComponents/MainLayout";
import React from "react";
import OurPartners from "../component/LandingPageComponents/OurPartners";
import SuccessStories from "../component/LandingPageComponents/SuccessStories";

export default function Home(){
    return(<div>
        <MainLayout>
        <HeroSection/>
        <OurServices/>
        <Clients/>
        <SuccessStories/>
        <OurPartners/>
        </MainLayout>
    </div>)
    
}