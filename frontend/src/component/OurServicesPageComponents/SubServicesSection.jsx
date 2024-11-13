import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import SubServiceCard from '../SharedComponents/SubServiceCard'
import {subServicesData} from '../../data/subServicesData'
import { motion } from 'framer-motion'

const SubServicesSection = ({ serviceKey }) => {
    const data = subServicesData[serviceKey] || [];

  return (
    <section className='w-[100%] xs:h-[480px] h-[100vh] md:h-[100%] flex justify-center items-center bg-sub-services bg-cover bg-center'>
        <div className='w-full h-full flex flex-col items-center justify-center bg-[#1C3A7B] bg-opacity-50'>

            <motion.div className="hidden gap-4 lg:grid lg:grid-cols-3 z-10"  
                initial={{ y: "15%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                {data.map((subService, index) => (
                    <div 
                        key={index}>
                        <SubServiceCard
                            icon={subService.icon}
                            title={subService.title}
                            content={subService.content}
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div className="hidden gap-10 px-8 md:grid md:grid-cols-2 z-10 lg:hidden"  
                initial={{ y: "15%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                {data.map((subService, index) => (
                    <div 
                        key={index}>
                        <SubServiceCard
                            icon={subService.icon}
                            title={subService.title}
                            content={subService.content}
                        />
                    </div>
                ))}
            </motion.div>

            <div className="md:hidden">
                <Carousel>
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
