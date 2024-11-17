import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import { images } from "../assets/images/assestsImages";
import VissionMission from "../component/AboutUsPageComponents/VissionMission";
export default function () {
  const AboutSectionDescription = {
    topic: "About GBL",
    description:
      "If you are looking for a trusted and dedicated partner for various IT-related services, you are perfect. “GBL” is a leading IT company that offers uniqueness and innovations to the world of IT with a wide range of products and services. GBL is a one-stop business solution that believes in ourselves and our experience over the years in this business. We provide professional and excellent services for IT Services and Solutions",
    picture: images.AboutPagePicture,
    upperIcon: images.AboutPageUpperIcon,
    lowerIcon: images.AboutPageLowerIcon,
  };
  return (
    <section className="">
      <MainLayout>
        <SubHeroSection {...AboutSectionDescription} />
        <VissionMission />
      </MainLayout>
    </section>
  );
}
