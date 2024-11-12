import React from 'react'
import { images } from '../../assets/images/assestsImages';
import { motion } from "framer-motion";

const HeroSection = () => {

  return (
    <section class="font-sans bg-white mb-10 relative">
      <div className=' top-0  h-[100%] lg:h-[100vh]'>
        <div class=" w-[100%] lg:w-[80%]   ">
          <motion.img
            src={images.HeroPicture} 
            alt="Hero-Image"
            initial={{ x: "60%", y: "-60%", opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="hidden lg:block  lg:w-[75%] xl:w-[80%] lg:h-auto lg:max-h-[100vh] lg:right-0  lg:absolute"
          />
          <motion.img
            src={images.HeroPictureMobileView} 
            alt="Hero-Image"
            initial={{ x: "60%", y: "-60%", opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class=" w-full lg:hidden"
          />
        </div>
      
        <motion.div 
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          class="container lg:relative mx-auto  py-5 lg:py-0 w-[100%]   text-center z-50   lg:ml-[4rem] xl:ml-[6rem] 2xl:ml-[8rem] lg:top-[50vh] lg:w-[40%] xl:w-[35%] lg:text-left xl:top-[50vh] 2xl:top-[56%] ">

            <h1 class="mb-6 text-[28px] text-gradient font-bold sm:text-4xl md:text-4xl lg:text-[2.5rem]  xl:text-5xl mx-6 sm:mx-10 2xl:text-[40px]">
              Unleashing <br></br> Innovation Through <br></br> Lines of Code
            </h1>
            <p class="mb-6 text-[15px] sm:text-[17px] md:text-[18px] text-[#7A7878]  lg:w-[80%] mx-6 sm:mx-10 2xl:w-[100%]">
              We use the power of technology to push the boundaries in our digital age.
            </p>
            <div className='flex flex-col  h-[6rem] sm:h-[9rem] lg:h-auto justify-between mx-6 sm:mx-10'>
            <button className=' lg:flex font-sans font-bold text-[#ffffff] text-[14px] lg:text-[14px] xl:text-[16px] bg-gradient lg:h-[3rem] h-[2.5rem] sm:h-[3.5rem] xl:h-[3.5rem] w-full lg:w-[12rem] xl:w-[15rem]  items-center justify-center rounded-[20px] hover:text-gradient hover:border-4 hover:border-[#008A7D] transition-all duration-500 ease-linear '>Discover More</button>
            <button className='font-sans font-bold lg:hidden text-[#008A7D] text-[14px]   h-[2.5rem] sm:h-[3.5rem] w-full   rounded-[20px] hover:text-[#ffff] hover:bg-gradient border-4 border-[#008A7D] hover:border-0 hover:bg- transition-all duration-500 ease-linear '>Book a Free Consultation</button>
            </div>
           
        
        </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
