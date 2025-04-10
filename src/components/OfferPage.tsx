// OfferPage.tsx
"use client";
import React, { useRef, useEffect } from 'react';
import EmblaCarousel from './EmblaCarousel';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeInUp, textReveal } from './animation-variants';

type Props = Record<string, never>;

export default function OfferPage({ }: Props) {
    // Refs for detecting when elements are in view
    const headingRef = useRef(null);
    const dotRef = useRef(null);
    const paragraphRef = useRef(null);
    const carouselRef = useRef(null);
    
    // Check if elements are in viewport
    const isHeadingInView = useInView(headingRef, { once: false, amount: 0.5 });
    const isDotInView = useInView(dotRef, { once: false, amount: 0.5 });
    const isParagraphInView = useInView(paragraphRef, { once: false, amount: 0.5 });
    const isCarouselInView = useInView(carouselRef, { once: false, amount: 0.2 });
    
    // Animation controls
    const headingControls = useAnimation();
    const dotControls = useAnimation();
    const paragraphControls = useAnimation();
    const carouselControls = useAnimation();
    
    // Trigger animations when elements come into view
    useEffect(() => {
        if (isHeadingInView) {
            headingControls.start('visible');
        } else {
            headingControls.start('exit');
        }
    }, [isHeadingInView, headingControls]);
    
    useEffect(() => {
        if (isDotInView) {
            dotControls.start('visible');
        } else {
            dotControls.start('exit');
        }
    }, [isDotInView, dotControls]);
    
    useEffect(() => {
        if (isParagraphInView) {
            paragraphControls.start('visible');
        } else {
            paragraphControls.start('exit');
        }
    }, [isParagraphInView, paragraphControls]);
    
    useEffect(() => {
        if (isCarouselInView) {
            carouselControls.start('visible');
        } else {
            carouselControls.start('exit');
        }
    }, [isCarouselInView, carouselControls]);
    
    return (
        <div className='bg-main-pink w-full h-max lg:h-screen p-4 lg:p-10 flex flex-col justify-becentertween lg:justify-center items-center'>
            <div className='lg:max-h-2/5 h-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end lg:items-start w-full mt-4 lg:mt-0'>
                <div className='flex w-full h-max'>
                    <motion.h1
                        ref={headingRef}
                        className='pr-2 text-5xl xl:text-7xl font-bold text-background'
                        variants={textReveal}
                        initial="hidden"
                        animate={headingControls}
                        custom={0}
                    >
                        your session, elevated
                    </motion.h1>
                    <div className='h-full self-end mb-2'>
                        <motion.div
                            ref={dotRef}
                            className={`dot w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-background`}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={dotControls}
                            custom={1}
                        ></motion.div>
                    </div>
                </div>

                <motion.p
                    ref={paragraphRef}
                    className='max-w-130 text-sm lg:text-base text-right text-background font-medium'
                    variants={textReveal}
                    initial="hidden"
                    animate={paragraphControls}
                    custom={2}
                >
                    Performing with us isn&apos;t just about pressing record—it&apos;s about creating a moment that resonates. From setup to final delivery, we&apos;ve designed this experience to honor your artistry and amplify your reach.
                </motion.p>
            </div>

            <motion.div 
                ref={carouselRef}
                className='w-full max-h-3/5 h-1/2 rounded-xl relative'
                variants={fadeInUp}
                initial="hidden"
                animate={carouselControls}
                custom={3}
            >
                <EmblaCarousel />
            </motion.div>
        </div>
    );
}