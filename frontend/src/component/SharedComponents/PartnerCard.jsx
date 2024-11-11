import React, { useState } from 'react';
import { motion } from "framer-motion";

const PartnerCard = ({ logo, hoverLogo, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center items-center w-full h-[400px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            <div 
                className='rounded-full border-solid border-4 border-[#7091E6] mb-4 bg-white'
                style={{
                    width: isHovered ? '140px' : '110px',
                    height: isHovered ? '140px' : '110px'
                }}>
                <img src={isHovered ? hoverLogo : logo} alt={'Icon'} className="rounded-full" />
            </div>
            <div 
                className='w-[90%] h-[60%] sm:w-[70%] lg:w-[90%] lg:h-[50%] xl:w-[75%] xl:h-[65%] flex items-center text-black italic font-sans bg-white rounded-xl text-center p-10'
                style={{
                    border: isHovered ? '4px solid #7091E6' : 'none',
                    color: isHovered ? '#3D52A0' : 'black',
                }}>
                <p className={`text-[${isHovered ? '15px' : '14px'}] lg:text-[${isHovered ? '14px' : '12px'}] xl:text-[${isHovered ? '17px' : '16px'}]`}> {content} </p>
            </div>
        </motion.div>
    );
};

export default PartnerCard;
