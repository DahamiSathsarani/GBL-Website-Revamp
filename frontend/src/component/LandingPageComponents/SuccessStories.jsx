import React from 'react';
import {images} from '../../assets/images/assestsImages'
import { motion } from "framer-motion";

const SuccessStories = () => {
  return (
    <section className="bg-success-stories w-full h-screen min-h-[600px] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center h-full bg-[#1C3A7B] bg-opacity-50">

          <div className='p-8 text-3xl font-bold text-white'>
            <h1>Success Stories</h1>
          </div>

          <motion.div 
              initial={{ x: "-70%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[80%] text-white bg-white bg-opacity-[20%] rounded-[25px] md:w-[60%] xl:w-[40%]">
                <h1 className="pt-5 text-5xl font-bold px-14">"</h1>
                <p className="text-center px-14 text-[13px] md:text-[16px]">
                  Working with GBL has been an absolute pleasure. Their team demonstrated exceptional expertise delivering a robust & 
                  scalable software solution that exceeded our expectations. Not only did they adhere to deadlines with precision, 
                  but their proactive communication and attention to detail ensured a smooth development process from start to finish. 
                  I highly recommend Global Bridge Labs to anyone seeking top-notch software development services.
                </p>

                <div className='w-[100%] flex items-center justify-center py-5'>
                    <div className='w-[90px] mx-5'>
                        <img src={images.DirectorImage} alt="Director-Image" className='rounded-full'/>
                    </div>
                    <div className='mx-5 text-left text-bold text-[20px]'>
                        <h2 className=''>Milinda Kankanange</h2>
                        <p className='text-[#1C3A7B]'>Director</p>
                    </div>
                </div>
          </motion.div>
        
      </div>
    </section>
  );
}

export default SuccessStories;
