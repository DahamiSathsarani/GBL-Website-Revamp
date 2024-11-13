import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bakersBlendLogo from "../../assets/images/client-logos/Baker's Blend.png";
import newStepFinanceLogo from "../../assets/images/client-logos/New step finance.png";
import icelandRideLogo from "../../assets/images/client-logos/Icelandride.png";
import iamgoingLogo from "../../assets/images/client-logos/Iamgoing.png";
import easycareLogo from "../../assets/images/client-logos/EastCare.png";
import teamMemberIcon from "../../assets/images/stats-icons/Clients Reviews.svg";
import winningAwardsIcons from "../../assets/images/stats-icons/Winning Awards.svg";
import completeProjectsIcons from "../../assets/images/stats-icons/Complete Projects.svg";
import clientsReviewsIcons from "../../assets/images/stats-icons/Clients Reviews.svg";
import { images } from "../../assets/images/assestsImages";

const Clients = () => {
  const clientLogoes = [
    { id: 1, name: "Bakers' Blend", logo: bakersBlendLogo },
    { id: 2, name: "New Step Finance", logo: newStepFinanceLogo },
    { id: 3, name: "Iceland Ride", logo: icelandRideLogo },
    { id: 4, name: "iamgoing", logo: iamgoingLogo },
    { id: 5, name: "easycare", logo: easycareLogo },
  ];

  const clientsCarousel = [...clientLogoes, ...clientLogoes];
  //

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change the currentIndex every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clientLogoes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  return (
    <section className="w-[100%] xs:h-[40rem] h-[43rem] xl:h-[50rem] flex justify-center items-center ">
      <div className="relative flex flex-col items-center justify-center w-full xs:h-[40rem] h-[43rem] xl:h-[50rem]">
        <div className="absolute top-0 left-0 w-full xs:h-[18rem] h-[15rem] overflow-hidden">
          <img
            className="w-[100%] h-[100%] "
            src={images.ClientsWave}
            alt="Client-Wave"
          />
          <motion.div
            className="absolute  xs:top-[12rem] top-[9rem]   w-[100vw] xs:pl-[30px] pl-[40px] lg:ml-[250px]   py-5 h-[7rem] flex items-center "
            initial={{ y: "-50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          >
            <h1 className="  font-bold text-black sm:text-3xl text-3xl flex items-center xs:h-6rem w-[10rem] justify-between">
              {" "}
              Our{" "}
              <span className="text-[#00CEB1] text-4xl sm:text-4xl md:text-5xl xl:text-6xl ml-3">
                {" "}
                Clients{" "}
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full xs:h-auto h-[14rem] xl:h-[44rem]">
          <img
            className="hidden lg:block w-[100%] h-[100%]"
            src={images.ClientsShape}
            alt="Clients-Background"
          />
          <img
            className="lg:hidden w-[100%] xs:h-[10rem] h-[14rem] "
            src={images.ClientsShape}
            alt="Clients-Background"
          />
        </div>

        {
          <div className="lg:flex-2 h-[20rem] lg:flex items-center xs:top-[3.5rem] top-[1rem] justify-center relative overflow-hidden w-[100%] ">
            <div className="relative flex justify-center h-[20rem] items-center overflow-hidden xs:w-[100%]">
              <motion.div
                className="flex space-x-10 flex-nowrap"
                initial={{ x: 0 }}
                animate={{
                  x: `-${clientLogoes.length * 15}rem`,
                }}
                transition={{
                  duration: 150,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  display: "flex",
                  width: `${clientLogoes.length * 15}rem`,
                }}
              >
                {}
                {[...clientLogoes, ...clientLogoes, ...clientLogoes].map(
                  (client, index) => (
                    <div
                      key={`${client.id}-${index}`}
                      className="flex-shrink-0 shadow-[2px_4px_8px_rgba(0,0,0,0.15)]  xs:w-44 xs:h-32 w-56 h-36 rounded-lg p-4 bg-white flex justify-center items-center"
                    >
                      <div className="flex items-center justify-center xs:w-40 xs:h-24 sm:w-48 sm:h-30 h-28 w-44 bg-[#f2f2f2] border-[1px] border-[#00B09C] rounded-lg shadow-md">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="sm:w-36 sm:h-30 xs:h-24 xs:w-40 h-28 w-44 object-contain"
                        />
                      </div>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        }

        {
          <div className=" flex-3 h-[10rem] text-white xs:px-4 px-8 sm:px-16 md:px-32 absolute bottom-0 w-full">
            <div className="mt-8 flex xs:justify-between justify-between text-center z-10 w-full">
              <motion.div className="xs:flex-col sm:flex relative xs:bottom-[-20px] bottom-[18px]  xs:w-20  items-center">
                <div className="w-ful flex justify-center sm:h-20 items-center ">
                  <img
                    src={teamMemberIcon}
                    alt="team members"
                    className="xs:h-8 h-12 sm:h-20"
                  />
                </div>
                <div className="xs:mt-1 mt-3 sm:mt-0 sm:flex-col sm:h-20 items-center justify-center sm:ml-2 ">
                  <span className="xs:text-xl text-2xl  font-bold">2+</span>
                  <p className="xs:text-xs text-sm ">
                    Team <br /> Members
                  </p>
                </div>
              </motion.div>
              <motion.div className=" xs:flex-col sm:flex  items-center xs:bottom-0 bottom-[60px] relative ml-2 xs:w-20">
                <div className="w-ful flex justify-center">
                  <img
                    src={completeProjectsIcons}
                    alt="complete projects"
                    className="xs:h-8 h-12 "
                  />
                </div>
                <div className="xs:mt-1 mt-3">
                  <span className="xs:text-xl text-2xl  font-bold  ">2+</span>
                  <p className="xs:text-xs text-sm ">
                    Complete
                    <br /> Projects
                  </p>
                </div>
              </motion.div>
              <motion.div className="xs:flex-col sm:flex  items-center xs:bottom-0 bottom-[60px] relative ml-2 w-20">
                <div className="w-ful flex justify-center sm:h-20">
                  <img
                    src={winningAwardsIcons}
                    alt="winning awards"
                    className="xs:h-8 h-12 sm:h-20 "
                  />
                </div>
                <div className="xs:mt-1 mt-3">
                  <span className="xs:text-xl text-2xl font-bold">1+</span>
                  <p className="xs:text-xs text-sm ">
                    Winning
                    <br />
                    Award
                  </p>
                </div>
              </motion.div>
              <motion.div className="xs:flex-col sm:flex  items-center relative xs:bottom-[-20px] bottom-[18px]  w-20">
                <div className="w-ful flex justify-center sm:h-20 ">
                  <img
                    src={clientsReviewsIcons}
                    alt="client reviews"
                    className="xs:h-8 h-12 sm:h-20"
                  />
                </div>
                <div className="xs:mt-1 mt-3">
                  <span className="xs:text-xl text-2xl font-bold">2+</span>
                  <p className="xs:text-xs text-sm ">
                    Client
                    <br /> Review
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Clients;
