import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Background = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 100, damping: 50 });
  const Mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const plantsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const Mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const Mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <div className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-screen -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: Mountain3Y,
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: plantsX,
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-screen -z-25"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: Mountain2Y,
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-screen -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: Mountain1Y,
          }}
        />
      </div>
    </div>
  );
};

export default Background;
