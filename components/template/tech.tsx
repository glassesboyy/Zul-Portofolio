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

// Flatten all tech items into a single array
const techItems = [
  // Front-End
  { name: "React", icon: "devicon-react-plain" },
  { name: "Vue", icon: "devicon-vuejs-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Next Js", icon: "devicon-nextjs-plain" },
  { name: "Redux", icon: "devicon-redux-plain" },
  { name: "Webpack", icon: "devicon-webpack-plain" },
  // Back-End
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "Node Js", icon: "devicon-nodejs-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  // UI/UX
  { name: "Figma", icon: "devicon-figma-plain" },
  { name: "Illustrator", icon: "devicon-illustrator-plain" },
  { name: "Photoshop", icon: "devicon-photoshop-plain" },
  // Mobile
  { name: "Flutter", icon: "devicon-flutter-plain" },
  { name: "Dart", icon: "devicon-dart-plain" },
  // Tools
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Github", icon: "devicon-github-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "VSCode", icon: "devicon-vscode-plain" },
  { name: "NPM", icon: "devicon-npm-original-wordmark" },
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
    <div className="my-12 md:my-20 lg:my-20 mb">
      <div ref={titleRef}>
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 cursor-pointer group">
            <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
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
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
              Technologies & Tools
            </span>
          </h2>
        </div>
      </div>

      <div ref={subtitleRef} className="mb-12 text-center">
        {isSubtitleInView && (
          <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed [text-wrap:balance] max-w-[90%] mx-auto mt-3">
            Crafting powerful web solutions with cutting-edge technologies and
            proven frameworks
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 place-items-center gap-4 px-16 md:px-16 lg:px-32"
      >
        {techItems.map((tech, index) => (
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
