"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const testimonials = [
  {
    quote:
      "Surya delivered an exceptional website that perfectly captured our vision. His attention to detail and technical expertise made the entire process smooth and successful.",
    name: "Sarah Johnson",
    title: "CEO, TechStart",
  },
  {
    quote:
      "Working with Surya was a game-changer for our project. His full-stack expertise and problem-solving skills helped us create a robust and scalable solution.",
    name: "Michael Chen",
    title: "CTO, InnovateX",
  },
  {
    quote:
      "The web application Surya developed exceeded our expectations. His ability to understand our requirements and translate them into a user-friendly interface was impressive.",
    name: "Emily Rodriguez",
    title: "Product Manager, DigitalFlow",
  },
  {
    quote:
      "Surya's technical skills and creativity shine through in every project. He's a reliable developer who consistently delivers high-quality solutions.",
    name: "David Kim",
    title: "Lead Developer, WebSphere",
  },
  {
    quote:
      "We were amazed by Surya's ability to tackle complex challenges and deliver elegant solutions. His full-stack expertise was invaluable to our project.",
    name: "Lisa Zhang",
    title: "Tech Director, CloudNine",
  },
];

export const Testimonials = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-16 md:px-6 gap-8">
        {/* Title Section - Left Side */}
        <div ref={titleRef} className="w-full md:w-1/3 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-left bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            Client Testimonials
          </h2>
          {isInView && (
            <TextGenerateEffect
              words="What others say about my work and collaboration"
              className="text-lg font-normal md:text-lg text-white/70 text-left"
            />
          )}
        </div>

        {/* Cards Section - Right Side */}
        <div className="relative w-full md:w-2/3 h-[40rem] flex flex-col items-center justify-center gap-[-1] overflow-hidden bg-black">
          <div className="absolute left-0 top-0 w-[10%] h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-[10%] h-full bg-gradient-to-l from-black to-transparent z-10" />

          {/* First Row - Moving Right */}
          <div className="w-full h-1/3">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          {/* Second Row - Moving Left */}
          <div className="w-full h-1/3">
            <InfiniteMovingCards
              items={testimonials.slice().reverse()}
              direction="left"
              speed="slow"
            />
          </div>

          {/* Third Row - Moving Right */}
          <div className="w-full h-1/3">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
