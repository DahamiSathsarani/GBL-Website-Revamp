import React from 'react'
import { images } from '../../assets/images/assestsImages';
import { motion } from "framer-motion";

const HeroSection = () => {

  return (
    <section class="relative font-sans bg-white">
      
        <div class="relative w-[100%] lg:absolute lg:right-0 lg:w-[70vw]">
          <motion.img
            src={images.HeroPicture} 
            alt="Hero-Image"
            initial={{ x: "60%", y: "-60%", opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class={''}
          />
        </div>
      
        <motion.div 
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          class="container relative mx-auto px-10 py-5 w-[100%] z-10 text-center lg-absolute lg:mx-14 lg:top-[48vh] lg:w-1/2 lg:text-left xl:top-[55vh]">

            <h1 class="mb-6 text-[26px] text-gradient font-bold sm:text-[32px] md:text-4xl xl:text-5xl">
              Unleashing <br></br> Innovation Through <br></br> Lines of Code
            </h1>
            <p class="mb-6 text-[15px] text-[#7A7878] md:text-base">
              We use the power of technology to push the boundaries in our digital age.
            </p>
            <button class="px-6 py-2 mx-2 bg-gradient font-semibold text-[12px] text-white transition duration-600 rounded-[15px] shadow-md hover:bg-transparent md:py-3 md:px-8 lg:mx-0">
              Discover More
            </button>
            <button class="bg-gradient font-semibold rounded-[15px] text-[12px] p-[3px] shadow-md md:p-[4px] lg:invisible">
              <span class="flex w-full bg-white text-[#1C3A7B] rounded-[14px] px-5 py-1 md:py-2 md:px-7">
                Discover More
              </span>
            </button>
        
        </motion.div>
      
    </section>
  )
}

export default HeroSection
