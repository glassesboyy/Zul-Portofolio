"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";
import { Separator } from "../ui/separator";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    href: "https://project1.demo",
    tech: "Next.js • TypeScript • MongoDB",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    href: "https://project2.demo",
    tech: "React • Node.js • Socket.io",
  },
  {
    title: "Learning Platform",
    description: "Interactive online learning platform with video streaming",
    href: "https://project3.demo",
    tech: "Laravel • MySQL • AWS",
  },
  {
    title: "Social Network",
    description: "Feature-rich social platform with real-time messaging",
    href: "https://project4.demo",
    tech: "Next.js • PostgreSQL • Redis",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    href: "https://project1.demo",
    tech: "Next.js • TypeScript • MongoDB",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    href: "https://project2.demo",
    tech: "React • Node.js • Socket.io",
  },
  {
    title: "Learning Platform",
    description: "Interactive online learning platform with video streaming",
    href: "https://project3.demo",
    tech: "Laravel • MySQL • AWS",
  },
  {
    title: "Social Network",
    description: "Feature-rich social platform with real-time messaging",
    href: "https://project4.demo",
    tech: "Next.js • PostgreSQL • Redis",
  },
];

const Chip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2 rounded-full text-xxxs shadow-sm shadow-cyan-400 font-medium bg-black/20 text-violet-300 border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300">
    {text}
  </span>
);

export const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      import("../animation/projectsAnimation").then(
        ({ initProjectsAnimation }) => {
          initProjectsAnimation(
            titleRef.current,
            subtitleRef.current,
            projectsContainerRef.current
          );
        }
      );
    }
  }, [isClient]);

  return (
    <div className="pt-40 pb-10 relative h-full w-full overflow-hidden bg-gradient-to-b from-black via-violet-900 to-violet-700">
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary curve */}
        <div className="absolute inset-0 -top-44">
          <div
            className="absolute inset-0 bg-black
            rounded-t-[100%] transform origin-center scale-x-[1.7]  translate-y-[25%]"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div ref={titleRef}>
          <h1 className="mb-4 text-center relative">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 cursor-pointer group">
                <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
                  Projects
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
                <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                  Featured Projects
                </span>
              </h2>
            </div>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-12 text-center">
          {isSubtitleInView && (
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto [text-wrap:balance]">
              Explore my latest work showcasing innovative solutions and
              creative designs
            </p>
          )}
        </div>
        <Separator />
      </div>

      {/* Project Grid */}
      {isClient && (
        <div
          ref={projectsContainerRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-[20rem] w-full flex items-center justify-center"
              >
                <PinContainer title={project.title} href={project.href}>
                  <div className="flex basis-full flex-col py-2 px-4 tracking-tight text-white/70 w-[15rem] h-[17rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-white">
                      {project.title}
                    </h3>
                    <div className="text-xs !m-0 !p-0 font-normal">
                      <span className="text-white/70">
                        {project.description}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {project.tech.split("•").map((tech, i) => (
                        <Chip key={i} text={tech.trim()} />
                      ))}
                    </div>
                    <div className="relative flex-1 w-full mt-4 rounded-lg overflow-hidden">
                      <Image
                        src="/assets/dummy1.png"
                        alt={project.title}
                        fill
                        className="object-cover transform transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
