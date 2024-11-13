import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import bakersBlendLogo from "../../assets/images/client-logos/bakersblend_logo.jpg";
import newStepFinanceLogo from "../../assets/images/client-logos/DVWO_logo-1.png";
import icelandRideLogo from "../../assets/images/client-logos/icelandride_logo.jpg";
import a from "../../assets/images/client-logos/a.png";
import b from "../../assets/images/client-logos/b.jpg";
import teamMemberIcon from "../../assets/images/stats-icons/team members.png";
import { images } from "../../assets/images/assestsImages";

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
    <section className=" flex flex-col h-[100vh]">
      <div className="flex-1 h-[25%] text-white flex items-center justify-center relative">
        <h2 className="text-center text-5xl font-semibold mb-6 relative z-10">
          Our Clients
        </h2>
      </div>
      <div className="flex-2 h-[35%] flex items-center justify-center relative">
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

      <div className="flex-3 h-[45%] text-white flex items-center justify-center relative">
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
      </div>
    </section>
  );
};

export default Clients;
