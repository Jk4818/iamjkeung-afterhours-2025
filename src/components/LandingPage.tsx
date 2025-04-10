"use client";
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeInUp, textReveal } from './animation-variants';
import AnimatedLogo from './AnimatedLogo'

type Props = Record<string, never>;

export default function LandingPage({ }: Props) {

    const pdfSrc = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/After-Hours-Studio-Sessons-Welcome-Pack-Mar-2025.pdf";

    const videoSrc = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/hero-hd.mp4";
    const videoThumb = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/hero-hd-thumb.jpg";

    // Refs for detecting when elements are in view
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const videoRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const getStartedTopRef = useRef(null);
    const getStartedBottomRef = useRef(null);

    // Check if elements are in viewport
    const isHeadingInView = useInView(headingRef, { once: false, amount: 0.5 });
    const isSubheadingInView = useInView(subheadingRef, { once: false, amount: 0.5 });
    const isVideoInView = useInView(videoRef, { once: false, amount: 0.3 });
    const isScrollIndicatorInView = useInView(scrollIndicatorRef, { once: false, amount: 0.8 });
    const isgetStartedTopInView = useInView(getStartedTopRef, { once: false, amount: 0.8 });
    const isgetStartedBottomInView = useInView(getStartedBottomRef, { once: false, amount: 0.8 });

    // Animation controls
    const headingControls = useAnimation();
    const subheadingControls = useAnimation();
    const videoControls = useAnimation();
    const scrollIndicatorControls = useAnimation();
    const getStartedTopControls = useAnimation();
    const getStartedBottomControls = useAnimation();

    // Trigger animations when elements come into view
    useEffect(() => {
        if (isHeadingInView) {
            headingControls.start('visible');
        } else {
            headingControls.start('exit');
        }
    }, [isHeadingInView, headingControls]);

    useEffect(() => {
        if (isSubheadingInView) {
            subheadingControls.start('visible');
        } else {
            subheadingControls.start('exit');
        }
    }, [isSubheadingInView, subheadingControls]);

    useEffect(() => {
        if (isVideoInView) {
            videoControls.start('visible');
        } else {
            videoControls.start('exit');
        }
    }, [isVideoInView, videoControls]);

    useEffect(() => {
        if (isScrollIndicatorInView) {
            scrollIndicatorControls.start('visible');
        } else {
            scrollIndicatorControls.start('exit');
        }
    }, [isScrollIndicatorInView, scrollIndicatorControls]);

    useEffect(() => {
        if (isgetStartedTopInView) {
            getStartedTopControls.start('visible');
        } else {
            getStartedTopControls.start('exit');
        }
    }, [isgetStartedTopInView, getStartedTopControls]);

    useEffect(() => {
        if (isgetStartedBottomInView) {
            getStartedBottomControls.start('visible');
        } else {
            getStartedBottomControls.start('exit');
        }
    }, [isgetStartedBottomInView, getStartedBottomControls]);

    return (
        <div className='bg-main-blue w-full h-screen p-4 md:p-10'>
            <motion.div
                className='absolute left-0 mx-4 md:mx-10 self-start'
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                <AnimatedLogo />
            </motion.div>
            {/* get started indicator */}
            <motion.div
                ref={getStartedTopRef}
                className="hidden lg:block absolute left-0 right-0 text-center cursor-pointer"
                variants={fadeInUp}
                initial="hidden"
                animate={getStartedTopControls}
                custom={3}
            >
                <div className='flex justify-center'>
                    <a href={pdfSrc} target='_blank' className='w-max bg-foreground rounded-full px-2 py-1 flex items-center justify-center transition-colors hover:bg-main-pink'>
                        <p className="text-xs font-black text-main-blue lowercase">Get Started</p>
                    </a>
                </div>
            </motion.div>
            <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full md:min-w-140 lg:w-6/13 mt-30 md:mt-0 h-max md:h-full'>
                    <div className='h-full lg:h-9/10 flex flex-col justify-center items-start text-3xl sm:text-5xl xl:text-6xl font-black text-foreground lowercase text-center lg:text-left'>
                        {/* get started indicator */}
                        <motion.div
                            className="black lg:hidden text-center cursor-pointer w-full mb-4 sm:mb-10"
                            ref={getStartedBottomRef}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={getStartedBottomControls}
                            custom={1}
                        >
                            <div className='flex justify-center'>
                                <a href={pdfSrc} target='_blank' className='w-max bg-foreground rounded-full px-2 py-1 flex items-center justify-center transition-colors hover:bg-main-pink'>
                                    <p className="text-xs font-black text-main-blue lowercase">Get Started</p>
                                </a>
                            </div>
                        </motion.div>

                        <motion.h1
                            ref={headingRef}
                            className=''
                            variants={textReveal}
                            initial="hidden"
                            animate={headingControls}
                            custom={0}
                        >
                            A cozy, late-night performance series where artistry takes the lead.
                        </motion.h1>
                        <motion.h1
                            ref={subheadingRef}
                            className='my-7  mt-4 w-full'
                            variants={textReveal}
                            initial="hidden"
                            animate={subheadingControls}
                            custom={1}
                        >
                            Real music. Real moments.
                        </motion.h1>
                    </div>
                </div>
                <motion.div
                    ref={videoRef}
                    className='w-full lg:w-6/13 h-full rounded-xl'
                    variants={fadeInUp}
                    initial="hidden"
                    animate={videoControls}
                    custom={2}
                >
                    <video
                        loop
                        autoPlay
                        muted
                        poster={videoThumb}
                        className="w-full h-full object-cover rounded-xl"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </motion.div>
            </div>
            {/* Scroll Indicator */}
            <motion.div
                ref={scrollIndicatorRef}
                className="hidden lg:block absolute bottom-20 left-0 right-0 text-center cursor-pointer"
                variants={fadeInUp}
                initial="hidden"
                animate={scrollIndicatorControls}
                custom={4}
                whileHover={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 1.5 } }}
            >
                <p className="text-xs font-black text-foreground lowercase">Scroll down</p>
                <div className="mt-2 animate-bounce">
                    ↓
                </div>
            </motion.div>
        </div>
    );
}