"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSecondText, setShowSecondText] = useState(false);

  const introText = `I'm a passionate Full Stack Web Developer who loves creating seamless, user-friendly web applications. From designing intuitive interfaces to building robust backend systems, I thrive on bringing ideas to life through clean and efficient code.`;

  const personalText = `With a strong drive for continuous learning, I stay updated with the latest tech trends to deliver innovative solutions. Let's collaborate to craft extraordinary digital experiences together! `;

  // Calculate total duration for first text
  const firstTextDuration = (introText.split(" ").length * 0.1 + 0.3) * 1000; // Reduced timing

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowSecondText(true);
      }, firstTextDuration);

      return () => clearTimeout(timer);
    }
  }, [isInView, firstTextDuration]);

  return (
    <div className="container mx-auto p-4">
      <div ref={ref} className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 blur-lg opacity-70 animate-pulse" />
            <div className="relative rounded-xl overflow-hidden w-full h-full">
              <Image
                src="/assets/fotogitar.png"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="text-left">
            <h2 className="text-5xl font-bold text-white">About Me</h2>
          </div>
          {isInView && (
            <>
              <div className="pr-40">
                <TextGenerateEffect
                  words={introText}
                  className="mb-1 font-medium text-justify"
                  duration={0.3} // reduced from 0.6
                />
              </div>

              {showSecondText && (
                <div className="pr-40">
                  <TextGenerateEffect
                    words={personalText}
                    duration={0.4} // reduced from 0.8
                    className="mb-1 font-medium text-justify"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
