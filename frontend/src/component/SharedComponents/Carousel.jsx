import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ children, autoSlide=false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurr] = useState(0);
  const totalSlides = React.Children.count(children);

  const next = useCallback(() =>
      setCurr((currentIndex) => currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
      ),[totalSlides])

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])

  return (
    <motion.section
      className="w-[100vw]"
      initial={{ y: "15%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="z-20 flex items-center justify-center w-full overflow-hidden ">
        <div className=" overflow-hidden w-[100%]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {React.Children.map(children, (child, index) => (
              <div className="flex-shrink-0 w-full " key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-30 my-2 h-[2rem]">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-3 h-3 rounded-full bg-white z-50
                  ${
                      currentIndex === i
                      ? "scale-150 transition-all duration-300"
                      : "bg-opacity-50 cursor-pointer"
                  }`}
            ></div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Carousel;
