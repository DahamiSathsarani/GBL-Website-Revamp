import { images } from "../assets/images/assestsImages";
import MainLayout from "../component/SharedComponents/MainLayout";
import SubHeroSection from "../component/SharedComponents/sub-hero-section";
import ProductsSection from "../component/OurProductsComponents/ProductsSection";

export default function OurProducts() {
  const descriptionElement = (
    <div className="xs:px-8 px-14 md:px-24 lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem]">
      <p className="text-gradient  text-center lg:text-justify xs:text-[16px] text-[18px] xl:text-[22px] 2xl:text-[24px] font-sans">
        Explore our innovative software solutions designed to enhance
        efficiency, streamline processes, and drive success for your business.
        Discover cutting-edge tools tailored to meet your unique needs.
      </p>
    </div>
  );

  const ProductSectionDescription = {
    topic: "Our Products",
    description: descriptionElement,
    picture: images.OurProductsPicture,
    upperIcon: images.OurProductsPageUpperIcon,
    lowerIcon: images.OurProductsPageLowerIcon,
  };
  return (
    <section>
      <MainLayout>
        <SubHeroSection {...ProductSectionDescription} />
        <ProductsSection/>
      </MainLayout>
    </section>
  );
}
