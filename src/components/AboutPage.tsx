"use client";
import React, { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import AnimatedText from './AnimatedText'

type Props = {}

export default function AboutPage({}: Props) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false);


  // Use the entire viewport height for the animation
  const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
  });

  // Track if animation is complete to reveal rest of content
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      // Animation will complete at 80% of the scroll through the section
      if (latest >= 0.8 && !isTextAnimationComplete) {
          setIsTextAnimationComplete(true);
      } else if (latest < 0.8 && isTextAnimationComplete) {
          setIsTextAnimationComplete(false);
      }
  });

  return (
    <div className='bg-foreground w-full min-h-screen p-4 lg:p-10 flex flex-row justify-center items-center text-background'>
      <motion.section 
                className="min-h-screen flex flex-col justify-between   relative">
                {/* Main content with sticky positioning */}
                <div className="sticky top-0">

                    <motion.div
                        id='initial-about'
                        className="max-w-full text-xl sm:text-2xl lg:text-4xl font-normal leading-snug uppercase tracking-[1rem]"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >
                        <AnimatedText
                            scrollYProgress={scrollYProgress}
                            text="After Hours is a late-night performance series crafted for artists who value authenticity over artifice. Filmed in an intimate, low-lit studio space, we offer musicians the chance to slow down, strip back, and share their sound in a setting that feels more like a private moment than a production. Rooted in collaboration, each session is guided by the artist’s vision—backed by our expertise in capturing it beautifully. With warm visuals, rich audio, and an atmosphere that encourages vulnerability, After Hours is a space for artists to be fully seen and truly heard."
                        />
                    </motion.div>
                </div>

                {/* Spacer div to create scrollable area */}
                <div style={{ height: '200vh' }}></div>
            </motion.section>
    </div>
  )
}