import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bakersBlendLogo from "../../assets/images/client-logos/Baker's Blend.png";
import newStepFinanceLogo from "../../assets/images/client-logos/New step finance.png";
import icelandRideLogo from "../../assets/images/client-logos/Icelandride.png";
import iamgoingLogo from "../../assets/images/client-logos/Iamgoing.png";
import easycareLogo from "../../assets/images/client-logos/EastCare.png";
import teamMemberIcon from "../../assets/images/stats-icons/Team Members.svg";
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
  const statDescription = [
    {
      id: 1,
      picture: teamMemberIcon,
      firstNumber: "1",
      lastNumber: "5",
      description: "Team Members",
      place: "corner",
    },
    {
      id: 2,
      picture: completeProjectsIcons,
      firstNumber: "1",
      lastNumber: "5",
      description: "Complete Projects",
      place: "mid",
    },
    {
      id: 3,
      picture: winningAwardsIcons,
      firstNumber: "1",
      lastNumber: "5",
      description: "Wining Awards",
      place: "mid",
    },
    {
      id: 4,
      picture: clientsReviewsIcons,
      firstNumber: "1",
      lastNumber: "5",
      description: "Client Reviews",
      place: "corner",
    },
  ];

  const [count1, setCount1] = useState(1);

  useEffect(() => {
    if (count1 < 20) {
      const interval = setInterval(() => {
        setCount1((prevCount) => prevCount + 1);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [count1]);

  const [count2, setCount2] = useState(1);

  useEffect(() => {
    if (count2 < 60) {
      const interval = setInterval(() => {
        setCount2((prevCount) => prevCount + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [count2]);

  const [count3, setCount3] = useState(1);

  useEffect(() => {
    if (count3 < 5) {
      const interval = setInterval(() => {
        setCount3((prevCount) => prevCount + 1);
      }, 1400);

      return () => clearInterval(interval);
    }
  }, [count3]);

  const [count4, setCount4] = useState(1);

  useEffect(() => {
    if (count4 < 200) {
      const interval = setInterval(() => {
        setCount4((prevCount) => prevCount + 1);
      }, 25);

      return () => clearInterval(interval);
    }
  }, [count4]);

  return (
    <section className="w-[100%] xs:h-[40rem] h-[43rem] sm:h-[44rem] lg:h-[48rem] xl:h-[50rem] flex justify-center items-center ">
      <div className="relative flex flex-col items-center justify-center w-full xs:h-[40rem] h-[43rem] sm:h-[44rem] lg:h-[48rem] xl:h-[50rem]">
        <div className="absolute top-0 left-0 w-full xs:h-[18rem] h-[15rem] overflow-hidden">
          <img
            className="w-[100%] h-[100%] "
            src={images.ClientsWave}
            alt="Client-Wave"
          />
          <motion.div
            className="absolute  xs:top-[12rem] top-[9rem]   w-[100vw] xs:pl-[30px] pl-[60px] ml-[30px] lg:ml-[60px]   py-5 h-[7rem] flex items-center "
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

        <div className="absolute bottom-0 left-0 w-full xs:h-auto h-[14rem] sm:h-[15rem] xl:h-[16rem]">
          <img
            className="hidden lg:block w-[100%] h-[100%]"
            src={images.ClientsShape}
            alt="Clients-Background"
          />
          <img
            className="lg:hidden w-[100%] xs:h-[10rem] h-[14rem] sm:h-[15rem] "
            src={images.ClientsShape}
            alt="Clients-Background"
          />
        </div>

        {
          <div className="lg:flex-2 h-[20rem] lg:flex items-center xs:top-[3.5rem] top-[1rem] sm:top-[-0.5rem] justify-center relative overflow-hidden w-full ">
            <div className="relative flex justify-center h-[20rem] items-center overflow-hidden w-[100%] ">
              <motion.div
                className="flex space-x-10 flex-nowrap"
                initial={{ x: "-26%" }}
                animate={{
                  x: `-${clientLogoes.length * 205}rem`,
                }}
                transition={{
                  duration: 170,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  display: "flex",
                  width: `100%`,
                }}
              >
                {[
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                  ...clientLogoes,
                ].map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 shadow-[2px_4px_8px_rgba(0,0,0,0.15)] xs:w-44 xs:h-32 w-56 h-36 lg:h-[11.5rem] lg:w-[22rem] rounded-lg p-4 bg-white flex justify-center items-center"
                  >
                    <div className="flex items-center justify-center xs:w-40 xs:h-24 sm:w-48 sm:h-30 h-28 w-44 lg:h-[9rem] lg:w-[18rem] bg-[#f2f2f2] border-[1px] border-[#00B09C] rounded-lg shadow-md">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="sm:w-36 sm:h-30 xs:h-24 xs:w-40 h-28 w-44 lg:h-[9rem] lg:w-[18rem] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        }
        {
          <div className=" flex-3 h-[10rem] text-white xs:px-4 px-10 sm:px-16 md:px-20 lg:px-36 xl:px-[20%] absolute bottom-0 w-full">
            <div className="mt-8 flex  justify-between  text-center z-10 w-full">
              {statDescription.map((statUnit) => (
                <motion.div
                  className={`${
                    statUnit.place === "mid"
                      ? "xs:bottom-[10px] bottom-[60px] sm:bottom-[80px] md:bottom-[70px] xl:bottom-[90px] xs:mx-0 mx-[10px] "
                      : "xs:bottom-[-20px] bottom-[10px] md:bottom-[-10px] lg:bottom-0 xl:bottom-[20px]"
                  } xs:flex-col md:flex relative     items-center `}
                >
                  <div className=" flex justify-center   items-center ">
                    <img
                      src={statUnit.picture}
                      alt={statUnit.description}
                      className="xs:h-8 h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] md:h-[5rem] md:w-[8rem] lg:w-[6.5rem]"
                    />
                  </div>
                  <div className="xs:mt-1 mt-2  sm:mt-[5px] md:mt-0 md:ml-[0px] w-[3rem] flex flex-col items-left md:items-left md:justify-center md:h-[5rem]">
                    <span className="xs:text-xl text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold md:text-left">
                      {statUnit.id === 1
                        ? count1
                        : statUnit.id === 2
                        ? count2
                        : statUnit.id === 3
                        ? count3
                        : statUnit.id === 4
                        ? count4
                        : null}
                      {""}+
                    </span>
                    <p className="xs:text-xs text-xs sm:text-sm md:text-xs md:text-left">
                      {statUnit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Clients;
