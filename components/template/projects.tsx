"use client";

import { Separator } from "../ui/separator";

export const Projects = () => {
  return (
    <div className="my-24 relative h-full w-full py-40 overflow-hidden bg-gradient-to-b from-black via-violet-900 to-violet-700">
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary curve */}
        <div className="absolute inset-0 -top-44">
          <div
            className="absolute inset-0 bg-black
            rounded-t-[100%] transform origin-center scale-x-[1.3]  translate-y-[30%]"
          />
        </div>
      </div>

      {/* Content Container - Adjusted padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div className="text-center mb-24 pt-16">
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
            <Separator />
          </div>
        </div>
      </div>
    </div>
  );
};
