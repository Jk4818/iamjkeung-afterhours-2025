"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type AnimatedLogoProps = {
  className?: string;
};

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = "" }) => {
  const firstLine = "After Hours";
  const secondLine = "@ The Studio";

  // Create arrays of characters for each line
  const firstLineChars = firstLine.split("");
  const secondLineChars = secondLine.split("");
  
  // Ref for the whole logo container
  const logoRef = useRef(null);
  
  // Check if logo is in viewport
  const isLogoInView = useInView(logoRef, { once: false, amount: 0.5 });
  
  // Animation controls for both lines
  const firstLineControls = useAnimation();
  const secondLineControls = useAnimation();
  
  // Animation duration constants
  const totalDuration = 3; // total animation duration in seconds
  const avgCharDuration = 0.5; // average duration for each character animation
  
  // Animation variants for characters
  const charVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: avgCharDuration,
        ease: "easeInOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
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

  // Create randomized delays for each line - now created inside useEffect to regenerate on each view
  const [firstLineDelays, setFirstLineDelays] = React.useState(
    getRandomizedDelays(firstLineChars.length)
  );
  const [secondLineDelays, setSecondLineDelays] = React.useState(
    getRandomizedDelays(secondLineChars.length)
  );

  // Effect to handle viewport visibility
  useEffect(() => {
    if (isLogoInView) {
      // Generate new random delays each time the logo comes into view
      setFirstLineDelays(getRandomizedDelays(firstLineChars.length));
      setSecondLineDelays(getRandomizedDelays(secondLineChars.length));
      
      // Start animations
      firstLineControls.start("visible");
      secondLineControls.start("visible");
    } else {
      // Reset animations when out of view
      firstLineControls.start("exit");
      secondLineControls.start("exit");
    }
  }, [isLogoInView, firstLineControls, secondLineControls, firstLineChars.length, secondLineChars.length]);

  return (
    <div 
      ref={logoRef}
      className={`w-full uppercase text-foreground ${className}`}
    >
      <h1 className="font-serif text-2xl sm:text-3xl tracking-[1rem]">
        {firstLineChars.map((char, index) => (
          <motion.span
            key={`first-${index}`}
            custom={firstLineDelays.get(index)}
            variants={charVariants}
            initial="hidden"
            animate={firstLineControls}
            style={{ display: char === " " ? "inline-block" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
      <h2 className="text-center font-pingfang font-bold text-md sm:text-lg tracking-[0.3rem]">
        {secondLineChars.map((char, index) => (
          <motion.span
            key={`second-${index}`}
            custom={secondLineDelays.get(index)}
            variants={charVariants}
            initial="hidden"
            animate={secondLineControls}
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