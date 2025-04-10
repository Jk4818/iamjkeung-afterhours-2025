"use client";
import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeInUp, textReveal } from './animation-variants';

type Props = Record<string, never>;

export default function GettingStarted({ }: Props) {


    const pdfSrc = "https://d1jtup13qecgqg.cloudfront.net/assets/after-hours/After-Hours-Studio-Sessons-Welcome-Pack-Mar-2025.pdf";


    // Refs for detecting when elements are in view
    const paragraphRef = useRef(null);
    const questionRef = useRef(null);
    const headingRef = useRef(null);
    const dotRef = useRef(null);

    // Check if elements are in viewport
    const isParagraphInView = useInView(paragraphRef, { once: false, amount: 0.3 });
    const isQuestionInView = useInView(questionRef, { once: false, amount: 0.5 });
    const isHeadingInView = useInView(headingRef, { once: false, amount: 0.5 });
    const isDotInView = useInView(dotRef, { once: false, amount: 0.5 });

    // Animation controls
    const paragraphControls = useAnimation();
    const questionControls = useAnimation();
    const headingControls = useAnimation();
    const dotControls = useAnimation();

    // Trigger animations when elements come into view
    useEffect(() => {
        if (isParagraphInView) {
            paragraphControls.start('visible');
        } else {
            paragraphControls.start('exit');
        }
    }, [isParagraphInView, paragraphControls]);

    useEffect(() => {
        if (isQuestionInView) {
            questionControls.start('visible');
        } else {
            questionControls.start('exit');
        }
    }, [isQuestionInView, questionControls]);

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

    return (
        <div className='bg-main-green w-full h-96 p-4 lg:p-10 flex flex-col lg:flex-row justify-between items-center text-xl'>
            <div className='flex flex-col w-full lg:w-1/2 h-full justify-evenly'>
                <motion.div
                    ref={paragraphRef}
                    className='w-full md:w-3/4 h-1/2 text-sm lg:text-md'
                    variants={textReveal}
                    initial="hidden"
                    animate={paragraphControls}
                    custom={0}
                >
                    <p>
                        We&apos;re a tight-knit collective of <span className='font-black'>creatives, producers, and music lovers</span> building a space where artists can feel seen, heard, and supported. After Hours is powered by <a className='font-black' href="iamjkeung.com" target='_blank'>iamjkeung.com</a>—a passion project rooted in storytelling, collaboration, and thoughtful production. We work closely with each artist to shape something meaningful, not just marketable.
                    </p>
                </motion.div>
                <motion.div
                    ref={questionRef}
                    className='h-max lg:h-1/2 flex items-end'
                    variants={fadeInUp}
                    initial="hidden"
                    animate={questionControls}
                    custom={1}
                >
                    <h4 className='font-black'>Want to perform with us?</h4>
                </motion.div>
            </div>
            <a  href={pdfSrc} target='_blank' className='flex w-full lg:w-3/4 h-max lg:h-full items-end justify-end font-serif text-foreground '>
                    <motion.h1
                        ref={headingRef}
                        className='pr-2 text-4xl md:text-7xl xl:text-9xl font-bold hover:text-main-pink transition-colors'
                        variants={textReveal}
                        initial="hidden"
                        animate={headingControls}
                        custom={2}
                    >
                        get started
                    </motion.h1>
                    <div className='h-max self-end mb-2.5 md:mb-4 xl:mb-8'>
                        <motion.div
                            ref={dotRef}
                            className={`dot w-5 h-5 md:w-6 md:h-6 rounded-full bg-foreground hover:bg-main-pink transition-colors`}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={dotControls}
                            custom={3}
                        ></motion.div>
                    </div>
            </a>
        </div>
    )
}