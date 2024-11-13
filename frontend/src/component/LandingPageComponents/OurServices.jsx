import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import ServiceCard from '../SharedComponents/ServiceCard'
import {servicesData} from '../../data/servicesData'
import { images } from '../../assets/images/assestsImages'
import { motion } from 'framer-motion'

const OurServices = () => {

  return (
    <section className='w-[100%] h-[100%] bg-gradient-to-t from-[#00CEB1] to-[#1C3A7B] flex justify-center items-center pb-10 lg:pb-14'>
        <div className='relative flex flex-col items-center justify-center w-full h-full'>
            <div className="absolute top-0 left-0 w-full h-[150px] lg:h-[250px] z-0">
                <img className='w-[100%] h-[100%] lg:h-[80%] xl:h-[90%]'
                    src={images.ShapeImage} 
                    alt="Shape-Image"
                />
                <motion.div className='absolute xs:top-4 top-4 w-[100%] py-5' initial={{ y: "-20%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}>
                    <h1 className='xs:text-2xl text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white '> What We Do ? </h1>
                </motion.div>
            </div>
            <motion.div className="z-10 hidden gap-4 px-8 lg:grid lg:grid-cols-4"  initial={{ y: "15%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}>
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`relative ${index === 0 ? 'lg:mt-[5rem] xl:mt-[5rem]' : ''} 
                                    ${index === 1 ? 'lg:mt-[9rem] xl:mt-[9rem]' : ''} 
                                    ${index === 2 ? 'lg:mt-[9rem] xl:mt-[9rem]' : ''} 
                                    ${index === 3 ? 'lg:mt-[5rem] xl:mt-[5rem]' : ''}`}>
                        <ServiceCard
                            title={service.title}
                            icon={service.icon}
                            items={service.items}
                            itemsIcons={service.itemsIcons}
                        />
                    </div>
                ))}
            </motion.div>
            <div className="lg:hidden xs:mt-0 mt-2">
                <Carousel>
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            items={service.items}
                            itemsIcons={service.itemsIcons}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default OurServices
