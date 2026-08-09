import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React from "react";

const ParallexBackgrounds = () => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(springScroll, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(springScroll, [0, 0.5], ["0%", "-20%%"]);
  const mountain2Y = useTransform(springScroll, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(springScroll, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background SKy */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPositio: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPositio: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPositio: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPositio: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountain layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPositio: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallexBackgrounds;
