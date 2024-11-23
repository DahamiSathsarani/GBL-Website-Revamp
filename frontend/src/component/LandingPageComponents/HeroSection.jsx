import React from "react";
import { images } from "../../assets/images/assestsImages";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact-us", { state: { scrollToForm: true } });
  };
  return (
    <section class="font-sans bg-white mb-10 relative ">
      <div className=" top-0  h-[100%] lg:h-[100vh]">
        <div class=" w-[100%] lg:w-[80%]   ">
          <motion.img
            src={images.HeroPicture}
            alt="Hero-Image"
            initial={{ y: "-60%", opacity: 0, maxHeight: 0, scaleY: 0.2 }}
            whileInView={{ y: 0, opacity: 1, maxHeight: "100%", scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="hidden lg:block  lg:w-[75%] xl:w-[80%] lg:h-auto lg:max-h-[100vh] lg:right-0  lg:absolute"
          />
          <motion.img
            src={images.HeroPictureMobileView}
            alt="Hero-Image"
            initial={{ y: "-60%", opacity: 0, maxHeight: 0, scaleY: 0.2 }}
            whileInView={{ y: 0, opacity: 1, maxHeight: "100%", scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class=" w-full lg:hidden"
          />
        </div>
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          class=" lg:relative  w-[100%]   text-center z-40   px-[10%] lg:px-0 lg:ml-[5rem] xl:ml-[6rem] 2xl:ml-[8rem] lg:w-[40%] xl:w-[35%] lg:text-left lg:h-[100vh] lg:flex  items-end pb-10"
        >
          <div>
            <h1 class="mb-6 text-[28px] text-gradient font-bold sm:text-4xl md:text-4xl lg:text-[2.5rem]  xl:text-3xl  2xl:text-5xl  lg:pl-[2rem] xl:pl-[3rem] text-shadow-sm">
              Unleashing <br></br> Innovation Through <br></br> Lines of Code
            </h1>
            <p class="mb-6 text-[15px] sm:text-[17px] md:text-[18px] text-[#7A7878]  lg:w-[100%]  2xl:w-[85%]  lg:pl-[2rem] xl:pl-[3rem]">
              We use the power of technology to push the boundaries in our
              digital age.
            </p>
            <div className="flex flex-col  h-[6rem] sm:h-[9rem] lg:h-auto justify-between  lg:px-[2rem] xl:px-[3rem]">
              <button className=" lg:flex font-sans font-bold text-[#ffffff] text-[14px] lg:text-[14px] xl:text-[16px] bg-gradient lg:h-[3rem] h-[2.5rem] sm:h-[3.5rem] xl:h-[3.5rem] w-full lg:w-[12rem] xl:w-[15rem]  items-center justify-center rounded-[20px] hover:text-gradient hover:border-4 hover:border-[#008A7D] transition-all duration-500 ease-linear ">
                <Link to="/company/about-us">Discover More</Link>
              </button>
              <button
                className="font-sans font-bold lg:hidden text-[#008A7D] text-[14px]   h-[2.5rem] sm:h-[3.5rem] w-full   rounded-[20px] hover:text-[#ffff] hover:bg-gradient border-4 border-[#008A7D] hover:border-0 hover:bg- transition-all duration-500 ease-linear "
                onClick={handleConsultationClick}
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
