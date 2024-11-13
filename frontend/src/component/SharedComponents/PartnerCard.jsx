import React, { useEffect, useState } from 'react';

const PartnerCard = ({ logo, hoverLogo, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [size, setSize] = useState({ width: '110px', height: '110px' });

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1280) {
                setSize(isHovered ? { width: '120px', height: '120px' } : { width: '110px', height: '110px' });
            } else { 
                setSize(isHovered ? { width: '135px', height: '135px' } : { width: '120px', height: '120px' });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isHovered]);
    
    return (
        <div 
            className="flex flex-col justify-center items-center w-full h-[400px]" >
            <div 
                className="rounded-full border-solid border-4 border-[#7091E6] mb-4 bg-white transition-all duration-700"
                style={{
                    width: size.width,
                    height: size.height
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} >
                <img src={isHovered ? hoverLogo : logo} alt={'Icon'} className="rounded-full" />
            </div>
            <div 
                className='w-[70%] h-[60%] sm:w-[70%] md:w-[50%] lg:w-[90%] lg:h-[50%] xl:w-[75%] xl:h-[55%] flex items-center text-black italic font-sans  bg-white rounded-xl text-center p-8 transition-all duration-700 '
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    border: isHovered ? '4px solid #7091E6' : '4px solid #ffff',
                    color: isHovered ? '#3D52A0' : 'black',
                }}>
                <p className="xs:text-[14px] text-[15px] sm:text-[17px] md:text-[20px] lg:text-[13px] 2xl:text-[15px]"> {content} </p>
            </div>
        </div>
    );
};

export default PartnerCard;
