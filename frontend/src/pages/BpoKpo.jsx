import React from 'react'
import SubServicesSection from '../component/OurServicesPageComponents/SubServicesSection'
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";

const BpoKpo = () => {

  const descriptionElement = (
    <div className="xs:px-8 px-14 md:px-24 lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem]">
      <p className="text-gradient  text-center lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] font-sans">
        Unlock the potential of seamless business operations with our tailored BPO and KPO solutions. 
        From data management to process optimization, we empower your business to focus on core activities while we handle the rest.
      </p>
    </div>
  );

  const ProductSectionDescription = {
    topic: "BPO/KPO",
    description: descriptionElement,
    picture: images.Service2Image ,
    upperIcon: images.ApplicationDevelopmentUpperIcon,
    lowerIcon: images.ApplicationDevelopmentLowerIcon,
  };

  return (
    <MainLayout>
      <SubHeroSection {...ProductSectionDescription}></SubHeroSection>
      <SubServicesSection serviceKey="service2" />
    </MainLayout>
  )
}

export default BpoKpo
