import React, { useState } from 'react';

const SubServiceCard = ({ icon, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center xs:h-[260px] h-[360px] md:h-[400px] lg:h-[420px] xl:h-[410px] 2xl:h-[350px] w-full md:w-[400px] lg:w-[420px] xl:w-[410px] 2xl:w-[350px] text-white">
            <div className={`flex flex-col justify-center items-center w-[90%] h-[90%] bg-sub-services-card bg-contain bg-center transition-all duration-700 ease-in-out`}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 style={{
                    backgroundRepeat: 'no-repeat',
                 }}>
                
                <div className={`flex flex-col items-center justify-center xs:w-[120px] w-[220px] sm:w-[240px] md:w-[200px] xl:w-[250px] mt-2 transition-all duration-700 ease-in-out ${
                     isHovered ? 'opacity-0 scale-90 h-0' : 'opacity-100 scale-100 h-[90%]'
                    }`}>
                    <div className="xs:w-[60px] xs:h-[60px] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[120px] xl:h-[120px] rounded-full">
                        <img src={icon} alt={`${title} Icon`} className="rounded-full" />
                    </div>
                    <h3 className="xs:text-[15px] text-[18px] sm:text-[25px] lg:text-[24px] 2xl:text-[20px] font-bold mt-2 text-center text-shadow-outline">
                        {title}
                    </h3>
                </div>

                <div className={`flex flex-col items-center justify-center xs:w-[150px] w-[200px] lg:w-[230px] xl:w-[240px] 2xl:w-[200px] transition-all duration-700 ease-in-out ml-5 ${
                        isHovered ? 'opacity-100 scale-100 h-[70%] 2xl:h-[80%]' : 'opacity-0 scale-0 h-0'
                    }`}>
                    <p className="text-center xs:text-[9px] text-[12px]">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubServiceCard;
