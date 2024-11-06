import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import ServiceCard from '../SharedComponents/ServiceCard'
import {servicesData} from '../../data/servicesData'
import { images } from '../../assets/images/assestsImages'

const OurServices = () => {

  return (
    <section className='w-[100%] h-screen bg-gradient-to-t from-[#00CEB1] to-[#1C3A7B] flex justify-center items-center'>
        <div className="absolute top-0 left-0 w-full h-[150px] lg:h-[250px] z-0">
            <img className='w-[100%] h-[100%]'
                src={images.ShapeImage} 
                alt="Shape-Image"
            />
            <div className='absolute top-8 w-[100%] py-5'>
                <h1 className=' text-white text-3xl font-bold text-center'> What We Do ? </h1>
            </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 px-8 z-10">
            {servicesData.map((service, index) => (
                <div 
                    key={index} 
                    className={`relative ${index === 0 ? 'xl:mt-[4rem]' : ''} 
                                ${index === 1 ? 'xl:mt-[8rem]' : ''} 
                                ${index === 2 ? 'xl:mt-[8rem]' : ''} 
                                ${index === 3 ? 'xl:mt-[4rem]' : ''}`}>
                    <ServiceCard
                        title={service.title}
                        icon={service.icon}
                        items={service.items}
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
                    />
                ))}
            </Carousel>
        </div>
    </section>
  )
}

export default OurServices
