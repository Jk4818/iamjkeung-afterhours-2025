// OfferPage.tsx
"use client";
import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import { motion } from 'framer-motion';

type Props = {};

export default function OfferPage({ }: Props) {
    return (
        <div className='bg-main-pink w-full  h-max lg:h-screen p-4 lg:p-10 flex flex-col justify-becentertween lg:justify-center items-center'>
            <div className='lg:max-h-2/5 h-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end lg:items-start w-full mt-4 lg:mt-0 '>
                <div className='flex w-full h-max '>
                    <motion.h1
                        className='pr-2 text-5xl xl:text-7xl font-bold text-background'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        your session, elevated
                    </motion.h1>
                    <div className='h-full self-end mb-2'>
                        <div className={`dot w-4 h-4 xl:w-6 xl:h-6 rounded-full  bg-background`}></div>
                    </div>
                </div>

                <motion.p
                    className='max-w-130 text-sm lg:text-base text-right text-background font-medium'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Performing with us isn't just about pressing record—it's about creating a moment that resonates. From setup to final delivery, we've designed this experience to honor your artistry and amplify your reach.
                </motion.p>
            </div>

            <div className='w-full max-h-3/5 h-1/2 rounded-xl relative'>
                <EmblaCarousel />
            </div>
        </div>
    );
}