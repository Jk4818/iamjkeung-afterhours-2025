// EmblaCarousel.tsx
"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from "embla-carousel-autoplay";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import { motion } from 'framer-motion';

type CardType = {
    title: string;
    subtitle: string;
    description: string;
    color: string;
    dotColor: string;
}

// Define card data based on the design image
const cardData: CardType[] = [
    {
        title: "Artist-First Approach",
        subtitle: "",
        description: "We're not here to brand you—we're here to support you. This is a space to show up fully, and to be seen and heard on your terms.",
        color: "bg-main-blue",
        dotColor: "bg-foreground"
    },
    {
        title: `Clean Capture, Rich Playback`,
        subtitle: "",
        description: "Our recording setup ensures every detail of your sound is preserved with clarity, warmth, and depth—whether it's one mic or a full arrangement.",
        color: "bg-main-red",
        dotColor: "bg-foreground"
    },
    {
        title: "Creative Collaboration",
        subtitle: "",
        description: "We work with you to shape the session around your vision—offering support on lighting, flow, and delivery to elevate your performance without compromising your intent.",
        color: "bg-background",
        dotColor: "bg-foreground"
    },
    {
        title: "Curated Space, After-Hours Energy",
        subtitle: "",
        description: "Shot in a thoughtfully designed studio with ambient lighting and cozy textures, our sessions evoke the feeling of a late-night set—personal, honest, and cinematic.",
        color: "bg-foreground",
        dotColor: "bg-background"
    },
    {
        title: "End-to-End Post Production",
        subtitle: "",
        description: "We handle the full mix and master, so your final session is polished, platform-ready, and reflective of your true sound.",
        color: "bg-main-green",
        dotColor: "bg-foreground"
    },
    {
        title: "Time to Settle In",
        subtitle: "",
        description: "Each session includes 2–3 hours of dedicated time for setup, rehearsal, and multiple takes—so you can explore, refine, and relax into the performance.",
        color: "bg-main-red",
        dotColor: "bg-foreground"
    },{
        title: "Cinematic Coverage",
        subtitle: "",
        description: "Your performance is captured through a refined, multi-angle approach that highlights tone, texture, and emotion—crafted for both intimacy and impact.",
        color: "bg-main-blue",
        dotColor: "bg-foreground"
    },
    {
        title: "Ready for Release",
        subtitle: "",
        description: "You’ll receive a final product that's visually compelling, sonically polished, and ready to share across platforms—built to connect with your audience.",
        color: "bg-main-green",
        dotColor: "bg-foreground"
    },
    {
        title: "Shared Rights, Clear Boundaries",
        subtitle: "",
        description: "Your art stays yours. All sessions are co-owned between you and iamjkeung.com for joint promotion and long-term visibility. While the video will be published on our platform, we’re open to discussing audio rights to best serve your release plans.",
        color: "bg-foreground",
        dotColor: "bg-background"
    },
];

const EmblaCarousel: React.FC = () => {
    // Update options to allow showing all cards at once
    const options: EmblaOptionsType = {
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 5000 })]);


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="embla w-full h-full">
            {/* Moved controls to top left */}
            <div className="embla__controls flex gap-4 items-center">
                <div className="embla__buttons flex gap-1 bg-background rounded-full">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>

            <div className="embla__viewport w-full h-full overflow-hidden" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {cardData.map((card, index) => (
                        <div className="embla__slide flex-[0_0_25%] min-w-0 " key={index}>
                            <motion.div
                                className={`embla__slide__inner h-full rounded-xl ${card.color} p-8 flex flex-col justify-between`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="slide-content flex flex-col h-full">
                                    <div>
                                        <div className={`dot w-8 h-8 rounded-full mb-4 ${card.dotColor}`}></div>
                                    </div>
                                    <div className='w-full h-1/2 lg:h-3/4 '>
                                        <h2 className={`font-serif font-bold text-xl lg:text-5xl ${card.color === "bg-foreground" ? "text-background" : "text-foreground"}`}>{card.title}</h2>
                                    </div>
                                    <div className='w-full h-full  '>
                                        <p className={` text-lg md:text-xl ${card.color === "bg-foreground" ? "text-background" : "text-foreground"}`}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;