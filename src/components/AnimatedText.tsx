// src/components/AnimatedText.tsx
import React, { useMemo } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    scrollYProgress: MotionValue<number>;
}

// A custom hook that creates a single transform for a specific threshold
const useColorTransform = (scrollYProgress: MotionValue<number>, threshold: number) => {
    return useTransform(
        scrollYProgress,
        [threshold, threshold + 0.02],
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
        <p className="indent-8 md:indent-18 text-left">
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