import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ children }) => {
    const [currentIndex, setCurr] = useState(0);
    const totalSlides = React.Children.count(children);

    const prev = () => setCurr((currentIndex) => (currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
    const next = () => setCurr((currentIndex) => (currentIndex === totalSlides - 1 ? 0 : currentIndex + 1));

    return (
        <section>
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500'
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {React.Children.map(children, (child, index) => (
                        <div className="w-full flex-shrink-0" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white text-gray-500 hover:text-gray-800'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white text-gray-500 hover:text-gray-800'>
                    <ChevronRight />
                </button>
            </div>
            <div className='mt-4 right-0 left-0'>
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
