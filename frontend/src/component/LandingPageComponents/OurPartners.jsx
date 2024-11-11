import React from 'react'
import Carousel from '../SharedComponents/Carousel'
import PartnerCard from '../SharedComponents/PartnerCard'
import {partnersData} from '../../data/partnersData'
import { images } from '../../assets/images/assestsImages'

const OurPartners = () => {
  return (
    <div>
        <section className='relative w-[100%] h-screen flex justify-center items-center'>
            <div className='relative flex flex-col items-center justify-center w-full h-screen'>
                <div className="absolute top-0 left-0 w-full h-[30%]">
                    <img className='w-[100%] h-[100%]'
                        src={images.WaveImage} 
                        alt="Shape-Image"
                    />
                    <div className='absolute top-[80px] w-[100%] ml-[100px] lg:ml-[150px] lg:top-[120px] py-5'>
                        <h1 className='text-3xl font-bold text-black '> Our <br></br> <span className='text-[#00CEB1] text-4xl'> Partners </span> </h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[90%]">
                    <img className='hidden lg:block w-[100%] h-[100%]'
                        src={images.PartnersBackground} 
                        alt="Shape-Image"
                    />
                    <img className='lg:hidden w-[100%] h-[100%]'
                        src={images.PartnersBackgroundSm} 
                        alt="Shape-Image"
                    />
                </div>
                
                <div className="hidden mt-[120px] px-8 lg:grid lg:grid-cols-4 z-10">
                    {partnersData.map((partner, index) => (
                        <div 
                            key={index}
                            className={`relative ${index === 0 ? 'lg:mt-[6rem] xl:mt-[6rem]' : ''} 
                                    ${index === 1 ? 'lg:mt-[4rem] xl:mt-[4rem]' : ''} 
                                    ${index === 2 ? 'lg:mt-[2rem] xl:mt-[2rem]' : ''} 
                                    ${index === 3 ? 'lg:mt-[0rem] xl:mt-[0rem]' : ''}`} >
                            <PartnerCard
                                logo={partner.logo}
                                hoverLogo={partner.hoverLogo}
                                content={partner.content}
                            />
                        </div>
                    ))}
                </div>
                <div className="lg:hidden mt-[100px]">
                    <Carousel>
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
