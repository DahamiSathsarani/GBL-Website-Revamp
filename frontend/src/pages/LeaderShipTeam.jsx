import React from "react";
import SubServicesSection from "../component/OurServicesPageComponents/SubServicesSection";
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";

const LeaderShipTeam = () => {

  const descriptionElement = (
    <div className="xs:px-8 px-14 md:px-24 lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem]">
      <p className="text-gradient  text-center lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] font-sans">
        Meet the exceptional professionals driving our success. With expertise, dedication, and a shared vision, 
        our team collaborates to deliver innovative solutions and ensure excellence in every project. 
        Committed to fostering creativity and embracing challenges, we strive to exceed expectations and create value for our clients. 
        Together, we bring a blend of experience, passion, and innovation to shape the future and achieve extraordinary outcomes.
      </p>
    </div>
  );

  const ProductSectionDescription = {
    topic: "Leadership Team",
    description: descriptionElement,
    picture: images.LeaderShipPicture,
    upperIcon: images.LeadershipTeamUpperIcon,
    lowerIcon: images.LeadershipTeamLowerIcon,
  };

  return (
    <MainLayout>
      <SubHeroSection {...ProductSectionDescription}></SubHeroSection>
      <SubServicesSection serviceKey="service1" />
    </MainLayout>
  );
};

export default LeaderShipTeam;