"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const projects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with Next.js and TypeScript",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/me.png",
    link: "https://example.com",
  },
  {
    title: "Beta Platform",
    description: "Full-stack e-commerce solution with real-time features",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/project2.jpg",
    link: "https://example.com",
  },
  {
    title: "Gamma Dashboard",
    description: "Analytics dashboard with advanced data visualization",
    tech: ["Vue.js", "D3.js", "Firebase"],
    image: "/projects/project3.jpg",
    link: "https://example.com",
  },
];

export const Projects = () => {
  return (
    <div className="my-16 relative h-full w-full py-32 overflow-hidden bg-gradient-to-b from-black via-violet-700 to-violet-700">
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary curve */}
        <div className="absolute inset-0 -top-32">
          <div
            className="absolute inset-0 bg-black
            rounded-t-[100%] transform origin-center scale-x-[1.4]  translate-y-[25%]"
          />
        </div>
      </div>

      {/* Content Container - Adjusted padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="text-center mb-20 pt-60">
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
            <h2 className="text-3xl md:text-6xl font-bold [text-wrap:balance]">
              <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                Featured Projects
              </span>
            </h2>
            <p className="text-base md:text-base text-white max-w-2xl mx-auto [text-wrap:balance]">
              Explore my latest work showcasing innovative solutions and
              creative designs
            </p>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <CardContainer className="inter-var">
                <CardBody className="relative group/card h-96 w-full rounded-xl p-6 bg-gradient-to-tr from-black via-violet-950/50 to-violet-900/20 border border-violet-900/10 hover:border-violet-600/50 transition-all duration-300">
                  <CardItem
                    translateZ="100"
                    className="text-2xl font-bold text-violet-100 mb-4"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm mb-8"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-violet-900/30 text-violet-200 border border-violet-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>
                  <CardItem
                    translateZ="120"
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <button
                      className="px-4 py-2 rounded-xl bg-violet-600/20 text-violet-200 text-sm w-full 
                      hover:bg-violet-600/30 transition-colors duration-200
                      border border-violet-500/30 hover:border-violet-500/50"
                    >
                      View Project
                    </button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
