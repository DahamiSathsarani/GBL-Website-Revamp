import React, { useState } from 'react';

const SubServiceCard = ({ icon, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="flex flex-col justify-center items-center xs:h-[250px] h-[400px] md:h-[370px] lg:h-[450px] md:w-[100%] xl:h-[580px] 2xl:h-[550px] text-white">
            <div className={`flex flex-col justify-center items-center w-[100%] h-[100%] xl:h-[70%] ${isHovered ? 'bg-sub-service-card-hover' : 'bg-sub-service-card'} bg-contain md:bg-cover bg-center transition-all duration-700 ease-in-out`}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    backgroundRepeat: 'no-repeat',
                }}>
                
                {!isHovered && (
                    <div className='xs:w-[80px] xs:h-[80px] w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] rounded-full'>
                        <img src={icon} alt={`${title} Icon`} className="rounded-full" />
                    </div>
                )}

                {!isHovered && (
                    <div className='flex flex-col items-center justify-center h-[25%] xs:w-[150px] md:w-[200px] xl:w-[250px]'>
                        <h3 className="xs:text-[15px] text-[18px] lg:text-[25px] font-bold mb-2 text-center text-shadow-outline">
                            {title}
                        </h3>
                    </div>
                )}

                {isHovered && (
                    <div className='flex flex-col items-center justify-center h-[25%] xs:w-[150px] w-[200px] md:w-[200px] lg:w-[230px] xl:w-[240px] transition-opacity duration-700 ease-in-out'>
                        <p className="text-center xs:text-[10px] text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[15px]">
                            {content}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubServiceCard;
