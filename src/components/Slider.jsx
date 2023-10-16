import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Slideshow = ({ images, interval = 3000, page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically advance to the next slide at the specified interval
  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

  return (
    <AnimatePresence initial={false}>
      <div className="relative h-screen w-screen overflow-hidden">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70" />
        {page == "main" ? (
          <div className="absolute grid h-full">
            <div className="flex flex-col gap-y-8 self-center">
              <h1 className="text-center text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-8xl lg:text-9xl">
                Being good at Badminton{" "}
                <span className="whitespace-nowrap">is everything.</span>
              </h1>

              <div className="flex items-center gap-x-2 self-center text-white md:text-2xl lg:gap-x-5 lg:text-3xl">
                <div>Study</div>
                <div className="dot-block"></div>
                <div>Practice</div>
                <div className="dot-block"></div>
                <div>Play</div>
                <div className="dot-block"></div>
                <div>Win</div>
              </div>

              <button className="self-center justify-self-end rounded-[6rem] border border-white px-4 py-3 font-bold text-white transition hover:border-transparent hover:bg-black lg:px-8 lg:py-4 lg:text-3xl">
                <Link to="/membership" className="btn1">
                  Join Us Now
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute left-0 top-0 z-20 -ml-8 grid h-full w-full place-items-center">
            <h1 className="text-center text-5xl font-thin uppercase text-white md:text-[15rem]">
              Our Team
            </h1>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Slideshow;
