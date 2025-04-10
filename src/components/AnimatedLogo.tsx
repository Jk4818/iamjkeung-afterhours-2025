"use client";
import React from "react";
import { motion } from "framer-motion";

type AnimatedLogoProps = {
  className?: string;
};

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = "" }) => {
  const firstLine = "After Hours";
  const secondLine = "@ The Studio";

  // Create arrays of characters for each line
  const firstLineChars = firstLine.split("");
  const secondLineChars = secondLine.split("");

  // Animation duration constants
  const totalDuration = 6; // total animation duration in seconds
  const avgCharDuration = 1; // average duration for each character animation
  
  // Animation variants for characters
  const charVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 1, // staggered delay between characters
        duration: avgCharDuration,
        ease: "easeInOut",
      },
    }),
  };

  // Shuffle the order in which characters appear
  const getRandomizedDelays = (length: number) => {
    // Generate array of indices and shuffle them
    const indices = Array.from({ length }, (_, i) => i);
    
    // Fisher-Yates shuffle algorithm
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Map to normalized delays (0-1 range)
    const maxDelay = totalDuration * 0.7; // Use 70% of total duration for delays
    const delayMap = new Map();
    
    indices.forEach((originalIndex, shuffledPosition) => {
      // Normalize to a value between 0 and maxDelay
      const normalizedDelay = (shuffledPosition / length) * maxDelay;
      delayMap.set(originalIndex, normalizedDelay);
    });
    
    return delayMap;
  };

  // Create randomized delays for each line
  const firstLineDelays = getRandomizedDelays(firstLineChars.length);
  const secondLineDelays = getRandomizedDelays(secondLineChars.length);

  return (
    <div className={`uppercase text-foreground ${className}`}>
      <h1 className="font-serif text-3xl tracking-[1rem]">
        {firstLineChars.map((char, index) => (
          <motion.span
            key={`first-${index}`}
            custom={firstLineDelays.get(index)}
            initial="hidden"
            animate="visible"
            variants={charVariants}
            style={{ display: char === " " ? "inline-block" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
      <h2 className="text-center font-pingfang font-bold text-lg tracking-[0.3rem]">
        {secondLineChars.map((char, index) => (
          <motion.span
            key={`second-${index}`}
            custom={secondLineDelays.get(index)}
            initial="hidden"
            animate="visible"
            variants={charVariants}
            style={{ display: char === " " ? "inline-block" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export default AnimatedLogo;