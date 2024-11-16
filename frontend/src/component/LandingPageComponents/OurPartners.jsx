import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import PartnerCard from '../SharedComponents/PartnerCard'
import {partnersData} from '../../data/partnersData'
import { images } from '../../assets/images/assestsImages'
import { motion } from 'framer-motion'

const OurPartners = () => {
  return (
    <div>
        <section className='w-[100%] h-[44rem] xl:h-[50rem] flex justify-center items-center '>
            <div className='relative flex flex-col items-center justify-center w-full h-[44rem] xl:h-[50rem]'>
                <div className="absolute top-0 left-0 w-full h-[15rem] overflow-hidden">
                    <img className='w-[100%] h-[100%] '
                        src={images.WaveImage} 
                        alt="Shape-Image"
                    />
                    <motion.div className='absolute xs:top-[5rem] top-[8rem]   w-[100%] xs:ml-[40px] ml-[90px] sm:ml-[100px] md:ml-[150px] lg:ml-[250px]   py-5 h-[8rem]'  
                    initial={{ y: "-50%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}>
                        <h1 className='text-2xl font-bold text-black sm:text-3xl xl:text-4xl'> Our <br></br> <span  className='text-[#00CEB1] text-4xl sm:text-4xl md:text-5xl xl:text-6xl' 
                       > Partners </span> </h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[33rem] xl:h-[44rem]">
                    <img className='hidden lg:block w-[100%] h-[100%]'
                        src={images.PartnersBackground} 
                        alt="Shape-Image"
                    />
                    <img className='lg:hidden w-[100%] h-[33rem] xl:h-[44rem]'
                        src={images.PartnersBackgroundSm} 
                        alt="Shape-Image"
                    />
                </div>
                
                <motion.div className="hidden mt-[120px] mx-[30px] lg:grid lg:grid-cols-4 z-10" 
                    initial={{ y: "15%", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}>
                    {partnersData.map((partner, index) => (
                        <div 
                            key={index}
                            className={`relative 
                                    ${index === 0 ? 'lg:mt-[9rem] xl:mt-[5rem]'  : ''} 
                                    ${index === 1 ? 'lg:mt-[11rem] xl:mt-[7rem]'   : ''} 
                                    ${index === 2 ? 'lg:mt-[9rem] xl:mt-[4rem] ' : ''} 
                                    ${index === 3 ? 'lg:mt-[5rem] xl:mt-[-1rem] ' : ''}`} >
                            <PartnerCard
                                logo={partner.logo}
                                hoverLogo={partner.hoverLogo}
                                content={partner.content}
                            />
                        </div>
                    ))}
                </motion.div>
                <div className="lg:hidden mt-[16rem]">
                    <Carousel autoSlide={true}>
                        {partnersData.map((partner, index) => (
                            <PartnerCard
                                logo={partner.logo}
                                hoverLogo={partner.hoverLogo}
                                content={partner.content}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurPartners
