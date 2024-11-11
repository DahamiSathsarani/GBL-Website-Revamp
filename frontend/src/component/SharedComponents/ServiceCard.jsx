import React from 'react';
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon, items, itemsIcons }) => {
    return (
        <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center items-center h-[520px] lg:h-[580px] text-white">
            <div className='w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] rounded-full mb-4'>
                <img src={icon} alt={`${title} Icon`} className="rounded-full" />
            </div>
            <div className='w-[50%] h-[70%] sm:w-[40%] lg:w-[85%] xl:w-[70%] xl:h-[65%] bg-[#ADBBDA] bg-opacity-[40%] border-solid border-2 border-white rounded-md py-5 px-2'>
                <h3 className="text-[20px] font-bold mb-4 text-center text-shadow-outline">
                    {title}
                </h3>
                <ul className="text-[12px] sm:text-sm space-y-[8px] w-full font-semibold">
                    {itemsIcons.map((icon, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <img src={icon} alt={`Icon ${index}`} className="w-7 h-7" />
                            <span>{items[index]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
