import React from 'react';

const ServiceCard = ({ title, icon, items, itemsIcons }) => {
    return (
        <div 
            className="flex flex-col justify-center items-center h-[520px] lg:h-[580px] text-white mt-[5rem] lg:mt-0">
            <div className='w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] rounded-full mb-4'>
                <img src={icon} alt={`${title} Icon`} className="rounded-full" />
            </div>
            <div className='w-[80%] h-[70%] lg:h-[75%] xl:h-[70%] sm:w-[50%] lg:w-[90%]  bg-[#ADBBDA] bg-opacity-[40%] border-solid border-2 border-white rounded-md py-5 xs:px-2 px-9 lg:px-0'>
                <div className='flex flex-col items-center justify-center h-[15%]'>
                    <h3 className="text-[18px] font-bold mb-2 text-center text-shadow-outline">
                        {title}
                    </h3>
                </div>
                
                    <div className="flex flex-col  justify-between text-[13px] ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-0 sm:text-sm h-[85%] xl:mx-2 2xl:ml-3  w-full font-semibold">
                        {itemsIcons.map((icon, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <img src={icon} alt={`Icon ${index}`} className="w-7 h-7 mr-4" />
                                <span className='pr-[5px] xl:pr-[10px]'>{items[index]}</span>
                            </div>
                        ))}
                    </div>
                
            </div>
        </div>
    );
};

export default ServiceCard;
