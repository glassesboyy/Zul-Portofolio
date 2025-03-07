"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "../ui/glowing-effect";

const services = [
  {
    title: "Front End Development",
    description:
      "Creating beautiful, responsive interfaces with modern frameworks like React, Next.js, and Vue. Pixel-perfect execution with smooth animations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    size: "large",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality. Creating intuitive and engaging experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    size: "medium",
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL API design with comprehensive documentation. Seamless third-party integrations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
    size: "small",
  },
  {
    title: "Database Design",
    description:
      "Optimized database architecture using SQL and NoSQL solutions. Expert in data modeling and query optimization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    size: "medium",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end web solutions from concept to deployment. Bridging front-end aesthetics with back-end functionality.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    size: "large",
  },
  {
    title: "Back End Development",
    description:
      "Building secure and scalable server-side solutions using Node.js, Python, and PHP. Expert in microservices architecture.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    size: "small",
  },
];

export const Services = () => {
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      import("../animation/servicesAnimation").then(
        ({ initServicesAnimation }) => {
          initServicesAnimation(titleRef.current, servicesContainerRef.current);
        }
      );
    }
  }, [isClient]);

  return (
    <div className="relative min-h-screen w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
                Services
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
            <h2 className="text-3xl md:text-5xl font-bold [text-wrap:balance]">
              <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                What I Offer
              </span>
            </h2>
          </div>
          <div ref={subtitleRef}>
            {isSubtitleInView && (
              <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto mt-4 [text-wrap:balance]">
                Comprehensive web development solutions tailored to your needs
              </p>
            )}
          </div>
        </div>

        {/* Updated Services Grid */}
        <div
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative min-h-[20rem]",
                index === 0 && "md:col-span-3 lg:col-span-4",
                index === 1 && "md:col-span-3 lg:col-span-2",
                index === 2 && "md:col-span-3 lg:col-span-2",
                index === 3 && "md:col-span-3 lg:col-span-4",
                index === 4 && "md:col-span-3 lg:col-span-3",
                index === 5 && "md:col-span-3 lg:col-span-3"
              )}
            >
              <div className="relative h-full rounded-2xl border p-2">
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={60}
                  glow={false}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.01}
                  variant="default"
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.5px] border-violet-500/20 p-6 bg-black/50 backdrop-blur-sm">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-violet-500/30 p-3 bg-violet-500/10">
                      {service.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
