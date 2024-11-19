import React from "react";
import SubServicesSection from "../component/OurServicesPageComponents/SubServicesSection";
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";

const DigitalMarketing = () => {
  const descriptionElement = (
    <div className="mx-[10%] lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem] lg:pl-[2rem] xl:pl-[3rem]">
      <p className="text-gradient  text-center lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] font-sans">
        Boost your brand’s online presence with our strategic digital marketing
        solutions. Harness the power of SEO, social media, and analytics to
        reach your audience, drive engagement, and achieve measurable results.
      </p>
    </div>
  );

  const ProductSectionDescription = {
    topic: "Digital Marketing",
    description: descriptionElement,
    picture: images.Service4Image,
    upperIcon: images.ApplicationDevelopmentUpperIcon,
    lowerIcon: images.ApplicationDevelopmentLowerIcon,
  };

  return (
    <MainLayout>
      <SubHeroSection {...ProductSectionDescription}></SubHeroSection>
      <SubServicesSection serviceKey="service4" />
    </MainLayout>
  );
};

export default DigitalMarketing;
