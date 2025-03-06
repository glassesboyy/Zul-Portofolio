"use client";

import { useAnimationStore } from "@/store/animationStore";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  initScrollAnimation,
  initTechAnimation,
} from "../animation/techAnimation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const techStack = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Mysql", icon: "devicon-mysql-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "Php", icon: "devicon-php-plain" },
];

export const Tech = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { preloadComplete } = useAnimationStore();
  const animationTriggered = useRef(false);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    // Set initial state when component mounts
    const elements = containerRef.current?.querySelectorAll(".tech-card") || [];
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0 });
      gsap.set(elements, { opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (!preloadComplete || animationTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationTriggered.current) {
          // Immediately disconnect observer and mark as triggered
          observer.disconnect();
          animationTriggered.current = true;

          const cards =
            containerRef.current?.querySelectorAll(".tech-card") || [];

          // Start animation
          initTechAnimation(titleRef.current, Array.from(cards));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [preloadComplete]);

  useEffect(() => {
    initScrollAnimation(titleRef.current, "title");
    initScrollAnimation(subtitleRef.current, "subtitle");
  }, []);

  return (
    <div>
      <div ref={titleRef}>
        <h1 className="mb-4 text-center relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
                Tech Stack
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
            <h2 className="text-3xl md:text-5xl font-bold text-center [text-wrap:balance]">
              <span
                ref={titleRef}
                className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2"
              >
                Technologies & Tools
              </span>
            </h2>
          </div>
        </h1>
      </div>

      <div ref={subtitleRef} className="mb-12 text-center">
        {isSubtitleInView && (
          <p className="text-base md:text-lg leading-relaxed [text-wrap:balance] max-w-[90%] mx-auto">
            Crafting powerful web solutions with cutting-edge technologies and
            proven frameworks
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 place-items-center gap-2 md:gap-4 px-6 md:px-8 lg:px-12"
      >
        {techStack.map((tech, index) => (
          <CardContainer
            key={index}
            className="inter-var tech-card"
            containerClassName="py-1 md:py-2"
          >
            <CardBody
              className={`
              relative group/card h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 cursor-pointer
              bg-gradient-to-t from-black/10 to-violet-800/30
              dark:hover:shadow-2xl dark:hover:shadow-violet-600/30
              border border-violet-900/10 rounded-xl
              transition-all duration-300 ease-out
              hover:border-violet-600/50
              hover:scale-95
              hover:before:opacity-100
            `}
            >
              <CardItem
                translateZ={160}
                className="text-4xl md:text-5xl lg:text-7xl flex items-center justify-center w-full h-full text-white"
              >
                <div className="flex flex-col items-center md:gap-2">
                  <i
                    className={`${tech.icon} group-hover/card:text-violet-100 transition-all duration-500 transform group-hover/card:scale-110`}
                  />
                  <span className="-mb-4 md:mb-0 text-[8px] sm:text-[10px] md:text-xs font-medium text-violet-300 group-hover/card:text-violet-100 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
