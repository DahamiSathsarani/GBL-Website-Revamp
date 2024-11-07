import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// Import all client logos
import bakersBlendLogo from '../../../assets/images/client-logos/bakersblend_logo.jpg';
import newStepFinanceLogo from '../../../assets/images/client-logos/DVWO_logo-1.png';
import icelandRideLogo from '../../../assets/images/client-logos/icelandride_logo.jpg';
import a from '../../../assets/images/client-logos/a.png';
import b from '../../../assets/images/client-logos/b.jpg';

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
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogoes.length) % clientLogoes.length);
    }, [clientLogoes.length]);

    useEffect(() => {
        const interval = setInterval(handleNext, 2000); // Auto-scroll every 2 seconds
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 h-[15%] text-white flex items-center justify-center relative">
                <svg
                    className="absolute inset-0 transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    fill="none"
                >
                    <path
                        fill="url(#gradient)"
                        d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,112C672,85,768,43,864,64C960,85,1056,171,1152,192C1248,213,1344,171,1392,149.3L1440,128L1440,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" x2="1" x3="0" x4="1" y1="0" y2="1" y3="0" y4="1">
                            <stop offset="0%" stopColor="#85BFB7" />
                            <stop offset="100%" stopColor="#1C3A7B" />
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="text-center text-3xl font-semibold mb-6 relative z-10">Our Clients</h2>
            </div>

            <div className="flex-2 h-[25%] flex items-center justify-center relative">
                <div className="relative flex justify-center items-center overflow-hidden w-full">
                    <button
                        onClick={handlePrev}
                        className="absolute left-20 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-black bg-black text-white text-xl font-bold shadow-lg hover:bg-gray-200 transition duration-300"
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                    </button>

                    <motion.div
                        className="flex space-x-20"
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
                                        transform: isCenter ? "scale(1.2)" : "scale(0.6)", // Larger size for center, smaller for others
                                    }}
                                    initial={{ opacity: 0.5 }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.5,
                                        filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                                        scale: isCenter ? 1.2 : 0.8,
                                    }}
                                    transition={{
                                        duration: 1, // Smoother transition
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

                    <button
                        onClick={handleNext}
                        className="absolute right-20 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-black bg-black text-white text-xl font-bold shadow-lg hover:bg-gray-200 transition duration-300"
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-3 h-[35%] text-white flex items-center justify-center relative">
                <svg
                    className="absolute inset-0 transform -z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    fill="none"
                >
                    <path
                    fill="url(#gradient)"
                    d="M0,160C0,160 360,0 720,0C1080,0 1440,160 1440,160L1440,320L0,320Z"
                    />
                    <defs>
                    <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#85BFB7" />
                        <stop offset="100%" stopColor="#1C3A7B" />
                    </linearGradient>
                    </defs>
                </svg>

                <div className="mt-8 flex justify-around text-center z-10">
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
        </div>
    );
};

export default Clients;
