import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import bakersBlendLogo from "../../assets/images/client-logos/bakersblend_logo.jpg";
import newStepFinanceLogo from "../../assets/images/client-logos/DVWO_logo-1.png";
import icelandRideLogo from "../../assets/images/client-logos/icelandride_logo.jpg";
import a from "../../assets/images/client-logos/a.png";
import b from "../../assets/images/client-logos/b.jpg";
import teamMemberIcon from "../../assets/images/stats-icons/team members.png";
import { images } from "../../assets/images/assestsImages";
import Carousel from "../SharedComponents/Carousel";

const Clients = () => {
  const clientLogoes = [
    { id: 1, name: "Bakers' Blend", logo: bakersBlendLogo },
    { id: 2, name: "New Step Finance", logo: newStepFinanceLogo },
    { id: 3, name: "Iceland Ride", logo: icelandRideLogo },
    { id: 4, name: "a", logo: a },
    { id: 5, name: "b", logo: b },
  ];

  const clientsCarousel = [...clientLogoes, ...clientLogoes];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogoes.length);
  }, [clientLogoes.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clientLogoes.length) % clientLogoes.length
    );
  }, [clientLogoes.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className='w-[100%] h-[44rem] xl:h-[50rem] flex justify-center items-center '>
      <div className='relative flex flex-col items-center justify-center w-full h-[44rem] xl:h-[50rem]'>
        <div className="absolute top-0 left-0 w-full h-[15rem] overflow-hidden">
          <img className='w-[100%] h-[100%] '
            src={images.ClientsWave} 
            alt="Client-Wave" />
          <motion.div className='absolute xs:top-[0rem] top-[8rem]   w-[100%] xs:ml-[40px] ml-[90px] sm:ml-[100px] md:ml-[150px] lg:ml-[250px]   py-5 h-[8rem]'  
            initial={{ y: "-50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}>
              <h1 className='xs:text-xl text-2xl font-bold text-black sm:text-3xl xl:text-4xl'> Our <span  className='text-[#00CEB1] xs:text-2xl text-4xl sm:text-4xl md:text-5xl xl:text-6xl'> Clients </span> 
              </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[33rem] xl:h-[44rem]">
            <img className='hidden lg:block w-[100%] h-[100%]'
                src={images.ClientsShape} 
                alt="Clients-Background"
            />
            <img className='lg:hidden w-[100%] h-[33rem] xl:h-[44rem]'
                src={images.ClientsShape} 
                alt="Clients-Background"
            />
        </div>

        <div className="hidden lg:flex-2 h-[35%] lg:flex items-center justify-center relative">
            <div className="relative flex justify-center items-center overflow-hidden w-full">
              <motion.div
                className="flex space-x-20"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {clientsCarousel
                  .slice(currentIndex, currentIndex + 5)
                  .map((client, index) => {
                    const isCenter = index === 2;

                    return (
                      <motion.div
                        key={`${client.id}-${index}`}
                        className="flex-shrink-0"
                        style={{
                          transform: isCenter ? "scale(1.2)" : "scale(0.6)",
                        }}
                        initial={{ opacity: 0.5 }}
                        animate={{
                          opacity: isCenter ? 1 : 0.5,
                          filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                          scale: isCenter ? 1.2 : 0.8,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                        }}
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-32 h-32 object-contain"
                        />
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
          </div>

          <div className="lg:hidden mt-[16rem] bg-red-300">
                <Carousel>
                    {clientLogoes.map((client, index) => (
                      <img
                        key={client.id}
                        src={client.logo}
                        alt={client.name}
                        className=""
                      />
                    ))}
                </Carousel>
          </div>

          {/* <div className="flex-3 h-[45%] text-white flex items-center justify-center relative">
            <div className="mt-8 flex justify-around text-center z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center relative"
                style={{
                  position: "absolute",
                  left: "7%",
                  top: "51.03%",
                  bottom: "33.59%",
                  backgroundImage: { teamMemberIcon },
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  padding: "10px",
                }}
              >
                <span className="text-4xl">2+</span>
                <p>Team Members</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl">2+</span>
                <p>Complete Projects</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl">1+</span>
                <p>Winning Award</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl">2+</span>
                <p>Client Review</p>
              </motion.div>
            </div>
          </div> */}


      </div>
    </section>
  );
};

export default Clients;
