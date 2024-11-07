import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import all client logos
import bakersBlendLogo from '../../../assets/images/client-logos/bakersblend_logo.jpg';
import newStepFinanceLogo from '../../../assets/images/client-logos/DVWO_logo-1.png';
import icelandRideLogo from '../../../assets/images/client-logos/icelandride_logo.jpg';
import a from '../../../assets/images/client-logos/a.png';
import b from '../../../assets/images/client-logos/b.jpg';

const Clients = () => {
    const originalClientsCarousel = [
        { id: 1, name: "Bakers' Blend", logo: bakersBlendLogo },
        { id: 2, name: "New Step Finance", logo: newStepFinanceLogo },
        { id: 3, name: "Iceland Ride", logo: icelandRideLogo },
        { id: 4, name: "a", logo: a },
        { id: 5, name: "b", logo: b },
        { id: 6, name: "c", logo: a },
        { id: 7, name: "d", logo: b },
        { id: 8, name: "e", logo: a },
        { id: 9, name: "f", logo: b },
        { id: 10, name: "g", logo: a },
    ];

    // Duplicate the array to create a looping effect
    const clientsCarousel = [...originalClientsCarousel, ...originalClientsCarousel];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % originalClientsCarousel.length);
        }, 2000); // Change every 2 seconds
        return () => clearInterval(interval);
    }, [originalClientsCarousel.length]);

    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 rounded-md">
            <h2 className="text-center text-3xl font-semibold mb-6">Our Clients</h2>
            <div className="relative flex justify-center items-center overflow-hidden w-full">
                {/* Display 5 logos with the center one highlighted */}
                <motion.div
                    className="flex space-x-8"
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {clientsCarousel.slice(currentIndex, currentIndex + 5).map((client, index) => {
                        const isCenter = index === 2;

                        return (
                            <motion.div
                                key={`${client.id}-${index}`} // unique key for each instance
                                className="flex-shrink-0"
                                style={{
                                    transform: isCenter ? "scale(1.2)" : "scale(0.8)", // Larger size for center, smaller for others
                                }}
                                initial={{ opacity: 0.5 }}
                                animate={{
                                    opacity: isCenter ? 1 : 0.5,
                                    filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                                    scale: isCenter ? 1.2 : 0.8,
                                }}
                                transition={{
                                    duration: 0.8, // Smoother transition
                                    ease: "easeInOut",
                                }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-24 h-24 object-contain"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <div className="mt-8 flex justify-around text-center">
                <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                    <span className="text-4xl">2+</span>
                    <p>Team Member</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                    <span className="text-4xl">2+</span>
                    <p>Complete Projects</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                    <span className="text-4xl">1+</span>
                    <p>Winning Award</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                    <span className="text-4xl">2+</span>
                    <p>Client Review</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Clients;
