import React, { useState } from 'react';

const Carousel = ({ children }) => {
    const [currentIndex, setCurr] = useState(0);
    const totalSlides = React.Children.count(children);

    return (
        <section className="w-[100vw]">
            <div className='z-20 flex items-center justify-center w-full overflow-hidden '>
                
                <div className=' overflow-hidden w-[100%]'>
                    <div className='flex transition-transform duration-500 ease-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {React.Children.map(children, (child, index) => (
                            <div className="flex-shrink-0 w-full" key={index}>
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

            <div className='z-30 my-2'>
                <div className='flex items-center justify-center gap-2'>
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`transition-all w-3 h-3 rounded-full bg-white z-50
                                        ${currentIndex === i ? "p-2" : "bg-opacity-50 cursor-pointer"}`}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
