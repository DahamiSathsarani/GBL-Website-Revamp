import React, { useState, useEffect } from "react";
import bakersBlendLogo from '../../../assets/images/client-logos/bakersblend_logo.jpg';
import icelandRideLogo from '../../../assets/images/client-logos/icelandride_logo.jpg';

const Clients = () => {
    const [currentIndex, setCurrentIndex ] = useState(0);
    
    const clientLogos = [
        { src: bakersBlendLogo, alt: 'Backers Blend' },
        { src: icelandRideLogo, alt: 'ICELANDRIDE' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [clientLogos.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
    };

    return (
        <section className="relative bg-gradient-to-b from-blue-100 to-blue-200 py-16">
            <h2 className="text-center text-3xl font-semibold mb-8">Our Clients</h2>
            <div className="flex item-center justify-center space-x-4 overflow-hidden">
                <button
                    onClick={handlePrev}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    <span className="text-xl">⬅️</span>
                </button>
                <div className="flex space-x-8 overflow-hidden items-center">
                    {clientLogos.map((logo, index) => (
                        <img 
                            key={index}
                            src={logo.src} 
                            alt={logo.alt}
                            className={`w-24 h-24 object-contain transition duration-300 transform ${index === currentIndex ? 'opacity-100 scale-105' : 'opacity-50'}`} 
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    <span className="text-xl">➡️</span>
                </button>
            </div>
        </section>
    );
};

export default Clients;
