import React from 'react'
import { images } from '../../assets/images/assestsImages'

const leaders = () => {
  return (
    <section className='flex items-center justify-center w-full h-screen'>
      <div className='w-[350px] h-[70%] mx-8 flex flex-col'>
        <div className='w-full h-[80%] relative'>
          <div className='w-full h-[70%] bg-[#7FD1C5] mb-0 flex items-end justify-center absolute bottom-0 hover:h-[100%] transition-all duration-100 ease-linear'>
            <div className='w-[90%] h-[330px] absolute z-10'>
              <img src={ images.CEOPic2 } alt='CEO' className='w-full h-full'></img>
            </div>
          </div>
        </div>
        <div className='w-full h-[20%] flex flex-col items-center my-2'>
          <h2 className='font-sans text-lg font-bold'>Amila Vinod Gunasekara</h2>
          <p className='text-[#4B4B4B]'>Co-Founder/Director</p>
          <img src={ images.LinkedinIcon } alt=''></img>
        </div>
      </div>
      <div className='w-[350px] h-[70%] mx-8 flex flex-col'>
        <div className='w-full h-[80%] relative'>
          <div className='w-full h-[70%] bg-[#7FD1C5] mb-0 flex items-end justify-center absolute bottom-0 hover:h-[100%] transition-all duration-300 ease-linear'>
            <div className='w-[90%] h-[330px] absolute z-10'>
              <img src={ images.CEOPic1 } alt='CEO' className='w-full h-full'></img>
            </div>
          </div>
        </div>
        <div className='w-full h-[20%] flex flex-col items-center my-2'>
          <h2 className='font-sans text-lg font-bold'>Hojitha Weerasinghe</h2>
          <p className='text-[#4B4B4B]'>Co-Founder/Director</p>
          <img src={ images.LinkedinIcon } alt=''></img>
        </div>
      </div>
      <div className='w-[350px] h-[70%] mx-8 flex flex-col'>
        <div className='w-full h-[80%] relative'>
          <div className='w-full h-[70%] bg-[#7FD1C5] mb-0 flex items-end justify-center absolute bottom-0 hover:h-[100%] transition-all duration-100 ease-linear'>
            <div className='w-[90%] h-[330px] absolute z-10'>
              <img src={ images.CEOPic3 } alt='CEO' className='w-full h-full'></img>
            </div>
          </div>
        </div>
        <div className='w-full h-[20%] flex flex-col items-center my-2'>
          <h2 className='font-sans text-lg font-bold'>Danushka Pinto</h2>
          <p className='text-[#4B4B4B]'>Co-Founder/Director</p>
          <img src={ images.LinkedinIcon } alt=''></img>
        </div>
      </div>
    </section>
  )
}

export default leaders
