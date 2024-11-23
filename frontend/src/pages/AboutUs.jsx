import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";
import VissionMission from "../component/AboutUsPageComponents/VissionMission";

const AboutUs = () => {
  const descriptionElement = (
    <div className=" mx-[10%] lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem] lg:pl-[2rem] xl:pl-[3rem]">
      <h1 className="text-gradient text-center lg:text-left xs:text-[20px] text-[23px] xl:text-[26px] 2xl:[40px] mb-[1rem] lg:mb-[8px] font-poppins">
        GREAT SOLUTIONS FOR YOUR BUSINESS
      </h1>
      <p className="text-[#1C3A7B] text-center lg:text-justify xs:text-[16px] text-[17px] xl:text-[19px] 2xl:text-[25px] font-sans">
        If you are looking for a trusted and dedicated partner for various
        IT-related services, you are perfect. “GBL” is a leading IT company that
        offers uniqueness and innovations to the world of IT with a wide range
        of products and services. GBL is a one-stop business solution that
        believes in ourselves and our experience over the years in this
        business. We provide professional and excellent services for IT Services
        and Solutions
      </p>
    </div>
  );

  const AboutSectionDescription = {
    topic: "About GBL",
    description: descriptionElement,
    picture: images.AboutPagePicture,
    upperIcon: images.AboutPageUpperIcon,
    lowerIcon: images.AboutPageLowerIcon,
  };
  return (
    <section>
      <MainLayout>
        <SubHeroSection {...AboutSectionDescription} />
        <VissionMission />
      </MainLayout>
    </section>
  );
};

export default AboutUs;
