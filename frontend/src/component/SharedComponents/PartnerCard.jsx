import React, { useState } from 'react';
import { motion } from "framer-motion";

const PartnerCard = ({ logo, hoverLogo, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center items-center h-[450px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            <div 
                className='rounded-full border-solid border-4 border-[#7091E6] mb-4 bg-white'
                style={{
                    width: isHovered ? '142px' : '130px',
                    height: isHovered ? '142px' : '130px'
                }}>
                <img src={isHovered ? hoverLogo : logo} alt={'Icon'} className="rounded-full" />
            </div>
            <div 
                className='w-[50%] h-[60%] sm:w-[40%] lg:w-[90%] xl:w-[75%] xl:h-[55%] flex items-center text-black italic font-sans text-[14px] bg-white rounded-xl p-5 text-center'
                style={{
                    border: isHovered ? '4px solid #7091E6' : 'none',
                    color: isHovered ? '#3D52A0' : 'black',
                    fontSize: isHovered ? '15px' : '14px'
                }}>
                <p> {content} </p>
            </div>
        </motion.div>
    );
};

export default PartnerCard;
