import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ children }) => {
    const [currentIndex, setCurr] = useState(0);
    const totalSlides = React.Children.count(children);

    const prev = () => setCurr((currentIndex) => (currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
    const next = () => setCurr((currentIndex) => (currentIndex === totalSlides - 1 ? 0 : currentIndex + 1));

    return (
        <section className="relative">
            <div className='relative z-20 flex items-center justify-center'>
                <div className=''>
                    <button onClick={prev} className='p-1 text-gray-500 bg-white rounded-full shadow hover:text-gray-800'>
                        <ChevronLeft />
                    </button>
                </div>
                <div className='relative overflow-hidden w-[50%]'>
                    <div className='flex transition-transform duration-500 ease-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {React.Children.map(children, (child, index) => (
                            <div className="flex-shrink-0 w-full" key={index}>
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <button onClick={next} className='p-1 text-gray-500 bg-white rounded-full shadow hover:text-gray-800'>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className='relative left-0 right-0 z-30'>
                <div className='flex items-center justify-center gap-2'>
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 rounded-full bg-white
                                                ${currentIndex === i ? "p-2" : "bg-opacity-50"}`}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
