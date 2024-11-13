import React from 'react';
import {images} from '../../assets/images/assestsImages'
import { motion } from "framer-motion";

const SuccessStories = () => {
  return (
    <section className="bg-success-stories w-full xs:h-[40rem] h-[40rem] sm:h-[45rem]  lg:h-[43rem]  2xl:h-[47rem] bg-cover bg-center">
      <div className=" h-full bg-[#1C3A7B] bg-opacity-50">

          <motion.div className='flex items-center justify-center p-8 text-3xl sm:text-5xl font-bold text-white h-[10rem] w-full'
         initial={{ x: "20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}>
            <h1>Success Stories</h1>
          </motion.div>
           <div className='xs:h-[25rem] h-[25rem] sm:h-[30rem] lg:h-[27rem] 2xl:h-[30rem] flex items-center justify-center'>
          <motion.div 
              initial={{ x: "-70%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[90%]  text-white bg-white bg-opacity-[20%] rounded-[25px] sm:w-[75%] xl:w-[60%] sm:py-10">
                <h1 className="pt-3 text-5xl font-bold px-14">"</h1>
                <p className="text-center px-5 sm:px-10 xs:text-[11px] text-[13px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                  Working with GBL has been an absolute pleasure. Their team demonstrated exceptional expertise delivering a robust & 
                  scalable software solution that exceeded our expectations. Not only did they adhere to deadlines with precision, 
                  but their proactive communication and attention to detail ensured a smooth development process from start to finish. 
                  I highly recommend Global Bridge Labs to anyone seeking top-notch software development services.
                </p>

                <div className='w-[100%] flex items-center justify-center py-5 sm:py-0  sm:mt-8'>
                    <div className='w-[90px] mx-5'>
                        <img src={images.DirectorImage} alt="Director-Image" className='rounded-full'/>
                    </div>
                    <div className='mx-5 text-left text-bold text-[20px] sm:text-[23px] lg:text-[25px] 2xl:text-[27px]'>
                        <h2 className=''>Milinda Kankanange</h2>
                        <p className='text-[#1C3A7B] font-bold'>Director</p>
                    </div>
                </div>
          </motion.div>
          </div>
      </div>
    </section>
  );
}

export default SuccessStories;
