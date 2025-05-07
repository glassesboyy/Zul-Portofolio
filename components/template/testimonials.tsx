"use client";

import { TestimonialsAnimation } from "../animation/testimonialsAnimation";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Zul's expertise in React and modern frontend frameworks truly shines through in our project. He delivered a highly responsive and beautiful user interface that our customers love.",
    name: "David Anderson",
    title: "Product Manager, TechCorp",
  },
  {
    quote:
      "Working with Zul was amazing. His deep understanding of frontend architecture and attention to UI/UX details helped us create a seamless user experience.",
    name: "Jessica Chen",
    title: "Design Lead, WebFlow Solutions",
  },
  {
    quote:
      "Zul transformed our outdated website into a modern, responsive platform. His knowledge of Next.js and Tailwind CSS made the development process efficient and the results outstanding.",
    name: "Mark Wilson",
    title: "CEO, Digital Innovate",
  },
  {
    quote:
      "The frontend optimizations Zul implemented significantly improved our website's performance. His commitment to clean code and best practices is remarkable.",
    name: "Sarah Martinez",
    title: "Technical Director, WebSphere",
  },
  {
    quote:
      "Zul's ability to translate design concepts into pixel-perfect implementations is exceptional. His frontend expertise and problem-solving skills made our project a success.",
    name: "James Lee",
    title: "UX Director, CreativeHub",
  },
];

export const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden h-fit bg-gradient-to-b from-violet-700 to-black">
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="absolute h-full w-full -top-16 md:-top-44 lg:-top-48">
          <div className="absolute h-full w-full bg-black rounded-b-[50%] transform scale-x-[2.3] md:scale-x-[1.9] lg:scale-x-[1.7]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-5 lg:px-6 py-12 md:py-20 lg:py-20 gap-6 md:gap-7 lg:gap-8">
        <div className="w-full md:w-1/3 space-y-4 md:space-y-5 lg:space-y-6 flex-shrink-0">
          <TestimonialsAnimation type="title">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start lg:justify-start gap-1 cursor-pointer group ">
                <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest ">
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
              <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left lg:text-left [text-wrap:balance]">
                <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                  What People Are Saying
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/70 text-center md:text-left lg:text-left leading-relaxed max-w-[90%] [text-wrap:balance]">
              Delivering exceptional frontend solutions and creating engaging
              user experiences that exceed client expectations.
            </p>
          </TestimonialsAnimation>
        </div>

        <TestimonialsAnimation type="cards">
          <div className="relative w-full md:w-2/3 h-[43rem] md:h-[47rem] lg:h-[52rem] flex flex-col items-center justify-center overflow-hidden rounded-3xl flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-black to-black/90" />
            <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>

            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials.slice().reverse()}
                direction="left"
                speed="normal"
              />
            </div>

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
