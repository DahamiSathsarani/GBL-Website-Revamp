import React from "react";
import SubServicesSection from "../component/OurServicesPageComponents/SubServicesSection";
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";

const ItInfrastructure = () => {

  const descriptionElement = (
    <div className="xs:px-8 px-14 md:px-24 lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem]">
      <p className="text-gradient  text-center lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] font-sans">
      Build a robust IT foundation with our comprehensive infrastructure solutions. 
      From network management to cloud services, we ensure your business stays connected, secure, and future-ready.
      </p>
    </div>
  );

  const ProductSectionDescription = {
    topic: "IT Infrastructure",
    description: descriptionElement,
    picture: images.Service3Image,
    upperIcon: images.ApplicationDevelopmentUpperIcon,
    lowerIcon: images.ApplicationDevelopmentLowerIcon,
  };

  return (
    <MainLayout>
      <SubHeroSection {...ProductSectionDescription}></SubHeroSection>
      <SubServicesSection serviceKey="service3" />
    </MainLayout>
  );
};

export default ItInfrastructure;

