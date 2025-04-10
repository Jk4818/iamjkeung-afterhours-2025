import React, { useMemo } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    scrollYProgress: MotionValue<number>;
    viewportHeight?: number;
}

// Modified to account for the delayed start of animation
// Adjust the input range to start animation when scroll begins
const useColorTransform = (scrollYProgress: MotionValue<number>, threshold: number) => {
    // Scale the threshold to the animation window
    // This ensures all animations happen between 0.1 and 0.7 of scroll progress
    const scaledThreshold = 0.25 + threshold * 0.8;
    
    return useTransform(
        scrollYProgress,
        [scaledThreshold, scaledThreshold + 0.02],
        ["#FFFFFF", "#1E1E1E"]
    );
};

// Component to render a single animated character
const AnimatedChar: React.FC<{
    char: string;
    scrollYProgress: MotionValue<number>;
    threshold: number;
}> = ({ char, scrollYProgress, threshold }) => {
    const color = useColorTransform(scrollYProgress, threshold);
    return (
        <motion.span style={{ color }} className="inline">
            {char}
        </motion.span>
    );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, scrollYProgress }) => {
    // Pre-compute all necessary character data with their thresholds
    const characters = useMemo(() => {
        const words = text.split(" ");
        const totalCharCount = text.length;
        const result: { char: string; threshold: number; wordIndex: number; charIndex: number }[] = [];
        
        words.forEach((word, wordIndex) => {
            const allWordsBeforeLength = words.slice(0, wordIndex).reduce((sum, w) => sum + w.length, 0);
            const spacesCount = wordIndex;
            
            word.split("").forEach((char, charIndex) => {
                const totalIndex = allWordsBeforeLength + spacesCount + charIndex;
                const charThreshold = (totalIndex / totalCharCount) * 0.6;
                result.push({ 
                    char, 
                    threshold: charThreshold,
                    wordIndex,
                    charIndex
                });
            });
        });
        
        return result;
    }, [text]);
    
    // Group characters by words for rendering
    const words = useMemo(() => {
        const result: typeof characters[] = [];
        const textWords = text.split(" ");
        
        textWords.forEach((_, wordIndex) => {
            result.push(
                characters.filter(char => char.wordIndex === wordIndex)
            );
        });
        
        return result;
    }, [characters, text]);

    return (
        <p className="indent-8 md:indent-16 text-left font-normal leading-relaxed uppercase tracking-wider md:tracking-[0.8rem] w-full text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
            {words.map((wordChars, wordIndex) => (
                <React.Fragment key={`word-${wordIndex}`}>
                    {wordChars.map((charData) => (
                        <AnimatedChar
                            key={`char-${charData.wordIndex}-${charData.charIndex}`}
                            char={charData.char}
                            scrollYProgress={scrollYProgress}
                            threshold={charData.threshold}
                        />
                    ))}
                    {wordIndex < words.length - 1 && " "}
                </React.Fragment>
            ))}
        </p>
    );
};

export default AnimatedText;