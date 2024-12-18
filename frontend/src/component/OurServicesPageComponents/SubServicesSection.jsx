import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import SubServiceCard from '../SharedComponents/SubServiceCard'
import {subServicesData} from '../../data/subServicesData'
import { motion } from 'framer-motion'

const SubServicesSection = ({ serviceKey }) => {
    const data = subServicesData[serviceKey] || [];

  return (
    <section className='w-[100%] xs:h-[480px] h-[100vh] md:h-[100%] flex justify-center items-center bg-sub-services bg-cover bg-center sm:mt-5 lg:mt-2'>
        <div className='flex flex-col items-center justify-center w-full h-full bg-black xl:py-5 bg-opacity-85'>

            <motion.div className="z-10 hidden w-full gap-0 mx-auto xl:grid xl:grid-cols-3"
                style={{ maxWidth: 'calc(100% - 80px)' }}  
                initial={{ y: "15%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                {data.map((subService, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        <SubServiceCard
                            icon={subService.icon}
                            title={subService.title}
                            content={subService.content}
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div className="z-10 hidden w-full gap-0 mt-10 md:grid md:grid-cols-2 xl:hidden"  
                initial={{ y: "15%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                {data.map((subService, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <SubServiceCard
                            icon={subService.icon}
                            title={subService.title}
                            content={subService.content}
                        />
                    </div>
                ))}
            </motion.div>

            <div className="md:hidden">
                <Carousel autoSlide={true}>
                    {data.map((subService, index) => (
                        <SubServiceCard
                            key={index}
                            icon={subService.icon}
                            title={subService.title}
                            content={subService.content}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default SubServicesSection
