"use client";

import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PinContainer } from "../ui/3d-pin";
import { Separator } from "../ui/separator";

const projects = [
  {
    title: "Temperature Converter",
    description:
      "A user-friendly web app that quickly converts temperatures between Celsius, Fahrenheit, Kelvin, and Reamur, showing both the result and the conversion formula.",
    href: "https://revou-fundamental-course.github.io/30-sept-24-glassesboyy/",
    tech: "HTML • CSS • JavaScript",
    image: "/assets/projects/kalkulatorfinal.png",
    status: "done",
  },
  {
    title: "Startup Landing Page",
    description:
      "I designed and developed a modern, responsive landing page for a startup, ensuring a seamless user experience and strong online presence.",
    href: "https://fe-sistem-final-project-zul.vercel.app/",
    tech: "Vue • Tailwind • Eslint • Daisy UI • Typescript",
    image: "/assets/projects/startuplandingpage.png",
    status: "on progress",
  },
];

const Chip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2 rounded-full text-xxxs shadow-sm shadow-cyan-400 font-medium bg-black/20 text-violet-300 border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300">
    {text}
  </span>
);

const StatusBadge = ({ status }: { status: "on progress" | "done" }) => {
  const statusStyles = {
    "on progress":
      "bg-violet-500/20 text-violet-300 border-violet-500/30 hover:border-violet-500/50 shadow-cyan-400/20",
    done: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:border-cyan-500/50 shadow-violet-400/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm lg:text-sm shadow-sm font-medium border hover:shadow-md transition-all duration-300 ${statusStyles[status]}`}
    >
      {status === "on progress" ? "On Progress" : "Done"}
    </span>
  );
};

export const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      const newPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-60 md:pt-60 lg:pt-80 pb-10 relative h-full w-full overflow-hidden bg-gradient-to-b from-black via-violet-900 to-violet-700">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 -top-16 md:-top-36 lg:-top-44">
          <div
            className="absolute inset-0 bg-black
            rounded-t-[100%] transform origin-center scale-x-[2.3] md:scale-x-[1.9] lg:scale-x-[1.7]  translate-y-[25%]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div ref={titleRef}>
          <h1 className="mb-4 text-center relative">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 cursor-pointer group">
                <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
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
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto [text-wrap:balance]">
              Explore my latest work showcasing innovative solutions and
              creative designs
            </p>
          )}
        </div>
      </div>
      <Separator />

      {isClient && (
        <div className="relative z-10 max-w-full px-4 sm:px-6">
          <div
            ref={scrollContainerRef}
            className="relative overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div ref={projectsContainerRef} className="flex px-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="h-[48vh] md:h-[45vh] lg:h-[91vh] min-w-[70vw] lg:min-w-[70vw] flex items-center justify-center overflow-hidden"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <PinContainer title={project.title} href={project.href}>
                    <div className="flex basis-full flex-col p-6 tracking-tight text-white/70 w-full h-full min-w-[60vw]">
                      <h3 className="!m-0 !pb-2 font-bold text-lg md:text-3xl lg:text-5xl text-white">
                        {project.title}
                      </h3>
                      <div className="text-xs md:text-base lg:text-lg !m-0 !p-0 font-normal">
                        <span className="text-white/70">
                          {project.description}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.split("•").map((tech, i) => (
                          <Chip key={i} text={tech.trim()} />
                        ))}
                      </div>
                      <div
                        className="relative w-full mx-auto mt-6 rounded-lg overflow-hidden"
                        style={{ aspectRatio: "21/9" }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-xl opacity-80 hover:opacity-100 transisition-opacity duration-700"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
                      </div>
                      <div className="flex justify-center mt-6">
                        <StatusBadge
                          status={project.status as "on progress" | "done"}
                        />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
