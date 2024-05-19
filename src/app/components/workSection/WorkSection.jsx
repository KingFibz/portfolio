/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

const titles = [
  "Weather App",
  "Bethany's Pie Shop",
  "Credit Glorious Property Holdings",
  "Coinmarketcap Search Console App"
];

const WorkSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const items = titles.map((title, index) => ({
    title,
    image: images[index]
  }));

  return (
    <div className="bg-bgColor overflow-hidden flex flex-col items-center">
      <motion.h1 className="text-5xl text-white font-gara flex flex-col items-center pb-20 md:text-7xl">
        My Work
      </motion.h1>
      <motion.div className="carousel flex sm:mx-20 cursor-grab" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="item flex-none max-w-fit pointer-events-none sm:w-3/4 p-20 md:w-3/5 h-3/5"
            >
              <p className="text-center text-white text-3xl font-gara mb-10">{item.title}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded-3xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
