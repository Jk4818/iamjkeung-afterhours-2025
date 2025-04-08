// EmblaCarousel.tsx
"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
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
    title: "Cinematic Coverage",
    subtitle: "",
    description: "Your performance is captured through a refined, multi-angle approach that highlights tone, texture, and emotion—crafted for both intimacy and impact.",
    color: "bg-indigo-900",
    dotColor: "bg-white"
  },
  {
    title: "Clean Capture,",
    subtitle: "Rich Playback",
    description: "Our recording setup ensures every detail of your sound is preserved with clarity, warmth, and depth—whether it's one mic or a full arrangement.",
    color: "bg-red-400",
    dotColor: "bg-white"
  },
  {
    title: "Creative Collaboration",
    subtitle: "",
    description: "We work with you to shape the session around your vision—offering support on lighting, flow, and delivery to elevate your performance without compromising your intent.",
    color: "bg-black",
    dotColor: "bg-white"
  },
  {
    title: "Curated Space,",
    subtitle: "After-Hours Energy",
    description: "Shot in a thoughtfully designed studio with ambient lighting and cozy textures, our sessions evoke the feeling of a late-night set—personal, honest, and cinematic.",
    color: "bg-gray-100",
    dotColor: "bg-black"
  }
];

const EmblaCarousel: React.FC = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla w-full h-full">
      <div className="embla__viewport w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {cardData.map((card, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 pl-4 relative" key={index}>
              <motion.div 
                className={`embla__slide__inner h-full rounded-xl ${card.color} p-8 flex flex-col justify-between`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="slide-content">
                  <div className={`dot w-4 h-4 rounded-full mb-4 ${card.dotColor}`}></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{card.title}</h2>
                  {card.subtitle && (
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{card.subtitle}</h2>
                  )}
                  <p className={`mt-4 text-sm md:text-base ${card.color === "bg-gray-100" ? "text-black" : "text-white"}`}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 items-center">
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot w-2 h-2 rounded-full bg-white transition-opacity ${
                index === selectedIndex ? 'opacity-100' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;