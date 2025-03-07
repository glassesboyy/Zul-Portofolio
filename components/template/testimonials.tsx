"use client";

import { TestimonialsAnimation } from "../animation/testimonialsAnimation";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

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
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden h-fit">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-5 lg:px-6 py-12 md:py-20 lg:py-20 gap-6 md:gap-7 lg:gap-8">
        {/* Title Section - Left Side */}
        <div className="w-full md:w-1/3 space-y-4 md:space-y-5 lg:space-y-6 flex-shrink-0">
          <TestimonialsAnimation type="title">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 cursor-pointer group">
                <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
                  Testimonials
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="transition-transform duration-300 group-hover:translate-x-1 text-violet-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-left [text-wrap:balance]">
                <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                  What People Are Saying
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed max-w-[90%] [text-wrap:balance]">
              Trusted by clients worldwide, delivering exceptional results and
              transforming ideas into reality.
            </p>
          </TestimonialsAnimation>
        </div>

        {/* Cards Section - Right Side */}
        <TestimonialsAnimation type="cards">
          <div className="relative w-full md:w-2/3 h-[38rem] md:h-[42rem] lg:h-[46rem] flex flex-col items-center justify-center overflow-hidden rounded-3xl flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-black to-black/90" />
            <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            {/* First Row - Moving Right */}
            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>

            {/* Second Row - Moving Left */}
            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials.slice().reverse()}
                direction="left"
                speed="normal"
              />
            </div>

            {/* Third Row - Moving Right */}
            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </TestimonialsAnimation>
      </div>
    </div>
  );
};
