// OfferPage.tsx
"use client";
import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { motion } from 'framer-motion';

type Props = {};

export default function OfferPage({}: Props) {
  return (
    <div className='bg-main-pink w-full h-screen p-4 lg:p-10 flex flex-col justify-center items-center'>
      <motion.div 
        className='flex flex-col lg:flex-row w-full h-1/2 justify-between items-start mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-max self-start text-3xl lg:text-4xl font-bold'>LOGO</div>
        <div className='mt-4 lg:mt-0 max-w-lg'>
          <motion.h1 
            className='text-4xl lg:text-6xl font-bold text-black mb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            your session, elevated<span className="text-black">.</span>
          </motion.h1>
          <motion.p 
            className='text-sm lg:text-base text-right'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Performing with us isn't just about pressing record—it's about creating a moment that resonates. From setup to final delivery, we've designed this experience to honor your artistry and amplify your reach.
          </motion.p>
        </div>
      </motion.div>

      <div className='w-full h-1/2 rounded-xl relative'>
        <EmblaCarousel />
      </div>
    </div>
  );
}