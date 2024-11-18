import React from 'react';

const ProductCard = ({ title, icon: Icon, content }) => {
    return (
        <div className="xs:h-[540px] h-[550px] md:h-[500px] flex flex-col justify-center items-center text-white">
            <div className='relative xs:w-[80%] w-[60%] sm:w-[250px] md:w-[230px] lg:w-[250px] h-[370px] bg-gradient-to-t from-[#00CEB1] to-[#1C3A7B] rounded-t-full flex justify-center items-center'>
                <div className='xs:h-[70%] xs:w-[90%] w-[90%] h-[70%] text-center flex flex-col'>
                    <div className='w-full h-[20%] flex items-center justify-center'>
                        <h2 className='text-[20px] font-bold'> { title } </h2>
                    </div>
                    <div className='w-full h-[80%] flex items-center justify-center'>
                        <p className='xs:text-[12px] text-[13px]'> { content } </p>
                    </div>
                    
                </div>
                <div className='absolute bottom-[-50px] w-[100px] h-[100px] bg-gradient-to-t from-[#00CEB1] to-[#1C3A7B] rounded-full border-solid border-4 border-white flex justify-center items-center'>
                    <Icon className="w-[60%] h-[60%]"/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
