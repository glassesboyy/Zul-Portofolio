"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const FlipWords = ({
  words,
  duration = 6000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <div className="relative overflow-hidden p-4">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            z: -100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            z: 0,
          }}
          transition={{
            type: "easeIn",
            duration: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            z: -100,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "z-10 inline-block text-left text-shadow-gradient",
            className
          )}
          key={currentWord}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, scale: 0.9, z: -50 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{
                delay: wordIndex * 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, scale: 0.9, z: -25 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{
                    delay: wordIndex * 0.4 + letterIndex * 0.06,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
