"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useAnimationStore } from "@/store/animationStore";
import { initAboutAnimation } from "../animation/aboutAnimation";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const preloadComplete = useAnimationStore((state) => state.preloadComplete);

  const introText = `I'm a passionate Full Stack Web Developer who loves creating seamless, user-friendly web applications. From designing intuitive interfaces to building robust backend systems, I thrive on bringing ideas to life through clean and efficient code.`;

  const personalText = `With a strong drive for continuous learning, I stay updated with the latest tech trends to deliver innovative solutions. Let's collaborate to craft extraordinary digital experiences together!`;

  const connectText = `Stay connected and explore more of my work! Visit my social media profiles down below for updates, insights, and exciting projects.`;

  // Calculate total duration for first and second text
  const firstTextDuration = (introText.split(" ").length * 0.1 + 0.3) * 1000; // Reduced timing
  const secondTextDuration =
    (personalText.split(" ").length * 0.1 + 0.4) * 1000;

  useEffect(() => {
    if (isInView && preloadComplete && ref.current) {
      initAboutAnimation(ref.current);

      const firstTimer = setTimeout(() => {
        setShowSecondText(true);
      }, firstTextDuration);

      const secondTimer = setTimeout(() => {
        setShowThirdText(true);
      }, firstTextDuration + secondTextDuration);

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
      };
    }
  }, [isInView, preloadComplete, firstTextDuration, secondTextDuration]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl"
      >
        <div className="w-full lg:w-1/2 flex justify-center profile-image-container opacity-0">
          <div className="relative w-full max-w-[280px] h-[280px] lg:max-w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 blur-lg opacity-70 animate-pulse" />
            <div className="relative rounded-xl overflow-hidden w-full h-full group">
              <Image
                src="/assets/fotogitar.png"
                alt="Profile picture"
                fill
                className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="text-center lg:text-left mb-6 relative inline-flex items-center justify-center w-full about-title">
            {/* Left geometric shape */}
            {isInView && preloadComplete && (
              <motion.div
                initial={{ scale: 0, rotate: 0, x: 50, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  x: 0,
                  opacity: 1.2,
                }}
                transition={{
                  duration: 1,
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute right-[calc(50%+130px)] top-1/3 -translate-y-1/2 w-4 h-4 bg-gradient-to-tr from-violet-500 to-cyan-500"
              >
                <motion.div
                  animate={{ opacity: isInView ? [0.5, 1, 0.5] : 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-cyan-400 blur-sm"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1.5 } : { scale: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute inset-0 bg-white/30 blur-xl"
                />
              </motion.div>
            )}

            {/* Right geometric shape */}
            {isInView && preloadComplete && (
              <motion.div
                initial={{ scale: 0, rotate: 0, x: -50, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: -360,
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute left-[calc(50%+130px)] top-1/3 -translate-y-1/2 w-4 h-4 bg-gradient-to-tr from-violet-500 to-cyan-500"
              >
                <motion.div
                  animate={{ opacity: isInView ? [0.5, 1, 0.5] : 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-cyan-400 blur-sm"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1.5 } : { scale: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute inset-0 bg-white/30 blur-xl"
                />
              </motion.div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>

          {isInView && (
            <div className="space-y-4 lg:pr-12">
              <TextGenerateEffect
                words={introText}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-justify leading-relaxed"
                duration={0.3}
              />

              {showSecondText && (
                <TextGenerateEffect
                  words={personalText}
                  duration={0.4}
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-justify leading-relaxed"
                />
              )}

              {showThirdText && (
                <TextGenerateEffect
                  words={connectText}
                  duration={0.4}
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-justify leading-relaxed"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
