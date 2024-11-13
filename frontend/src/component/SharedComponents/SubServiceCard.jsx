import React from 'react';

const SubServiceCard = ({ icon, title, content }) => {
    
    return (
        <div className="flex flex-col justify-center items-center xs:h-[250px] h-[400px] md:h-[300px] md:w-[360px] lg:h-[580px] text-white">
            <div className='flex flex-col justify-center items-center w-[100%] lg:w-[90%] h-[100%] lg:h-[75%] xl:h-[70%] bg-sub-service-card bg-contain bg-center'
                style={{
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='xs:w-[80px] xs:h-[80px] w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] rounded-full'>
                    <img src={icon} alt={`${title} Icon`} className="rounded-full" />
                </div>
                <div className='flex flex-col items-center justify-center h-[25%] xs:w-[150px] md:w-[200px]'>
                    <h3 className="xs:text-[15px] text-[18px] font-bold mb-2 text-center text-shadow-outline">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SubServiceCard;
