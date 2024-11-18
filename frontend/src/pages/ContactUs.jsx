import { images } from "../assets/images/assestsImages";
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";

export default function () {
  const descriptionElement = (
    <div className="xs:px-8 px-14 md:px-24 lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem]">
      <h1 className="font-poppins  text-center sub-menu-gradient text-gradient  lg:text-left xs:text-[20px] text-[25px] xl:text-[30px] 2xl:[35px] mb-[1rem] ">
        Let’s Talk
      </h1>
      <p className="font-sans  text-center text-gradient mt-[1rem] lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] ">
        We love engaging with new clients and our community. If you have an
        inquiry about building digital products or any other questions, get in
        touch!
      </p>
      <div className="mt-[2rem] text-[#8A99B4] text-[14px] h-[7rem] flex flex-col md:flex-row md:h-[4rem] md:w-full justify-between 2xl:mt-[3rem]">
        <button className="border-[3px] border-[#008A7D] w-full md:w-[45%] h-[2.8rem] sm:h-[3rem] rounded-[50px] hover:bg-gradient hover:border-[#7091E6] hover:text-white font-bold transition-all duration-1000 ease-out">
          +94 112 684 179
        </button>
        <button className="border-[3px] border-[#008A7D] w-full md:w-[45%] h-[2.8rem] sm:h-[3rem] rounded-[50px] hover:bg-gradient hover:border-[#7091E6] hover:text-white font-bold transition-all duration-1000 ease-out">
          info@globalbridgelabs.com
        </button>
      </div>
    </div>
  );
  const ContactUsSectionDescription = {
    topic: "Contact Us",
    description: descriptionElement,
    picture: images.ContactUsPicture,
    upperIcon: images.ContactUsPageUpperIcon,
    lowerIcon: images.ConactUsPageLowerIcon,
  };
  return (
    <div>
      <MainLayout>
        <SubHeroSection {...ContactUsSectionDescription} />
      </MainLayout>
    </div>
  );
}
