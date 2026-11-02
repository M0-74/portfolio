import React from "react";
import { FlipWords } from "./FlipWord";
import { delay, motion } from "framer-motion";
const HeroText = () => {
  const Words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visable: { opacity: 1, y: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* For Desktop */}
      <div className="flex-col hidden md:flex c-space">
       
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visable"
          translation={{ delay: 1 }}
          className="text-4x font-medium tracking-[1.5px]"
        >
          I'm Mohamed Salah
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.5 }}
          >
            <FlipWords
              words={Words}
              className="font-black text-white text-7xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            web Solutions
          </motion.p>
        </div>
      </div>
      {/* For Phone */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visable"
          translate={{ delay: 1 }}
          className="text-4x font-medium"
        >
          I'm Mohamed Salah
        </motion.p>
        <div className="">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.5 }}
          >
            <FlipWords
              words={Words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visable"
            translate={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
