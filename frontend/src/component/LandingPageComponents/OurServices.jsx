import React from 'react'
import Carousel from '../sharedComponents/Carousel'
import ServiceCard from '../sharedComponents/ServiceCard'
import {servicesData} from '../../data/servicesData'
import { images } from '../../assets/images/assestsImages'

const OurServices = () => {

  return (
    <section className='mt-[4rem] w-[100%] h-screen bg-gradient-to-t from-[#00CEB1] to-[#1C3A7B] flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center w-full h-full '>
            <div className="  top-0 left-0 w-full h-[150px] lg:h-[250px] z-0">
                <img className='w-[100%] h-[100%] lg:h-[80%] xl:h-[90%]'
                    src={images.ShapeImage} 
                    alt="Shape-Image"
                />
                <div className='absolute top-8 w-[100%] py-5'>
                    <h1 className='text-3xl font-bold text-center text-white '> What We Do ? </h1>
                </div>
            </div>
            <div className="z-10 hidden gap-4 px-8 lg:grid lg:grid-cols-4">
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`relative ${index === 0 ? 'lg:mt-[1rem] xl:mt-[2rem]' : ''} 
                                    ${index === 1 ? 'lg:mt-[4rem] xl:mt-[6rem]' : ''} 
                                    ${index === 2 ? 'lg:mt-[4rem] xl:mt-[6rem]' : ''} 
                                    ${index === 3 ? 'lg:mt-[1rem] xl:mt-[2rem]' : ''}`}>
                        <ServiceCard
                            title={service.title}
                            icon={service.icon}
                            items={service.items}
                            itemsIcons={service.itemsIcons}
                        />
                    </div>
                ))}
            </div>
            <div className="lg:hidden">
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
