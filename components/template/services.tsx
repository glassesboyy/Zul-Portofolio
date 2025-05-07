"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { PrimaryButton } from "../ui/primary-button";
import { ServiceModal } from "../ui/services-modal";

const servicesData = [
  {
    title: "Static Website Development",
    description:
      "Creating high-quality static websites like landing pages, company profiles, or personal portfolios with a focus on modern design, smooth navigation, and fast performance, ensuring an excellent user experience across devices.",
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
    keywords: [
      "Landing Page",
      "Company Profile",
      "Portfolio Website",
      "Modern Design",
      "Fast Loading",
    ],
    process: [
      "Requirements Analysis",
      "Wireframe Creation",
      "Development",
      "Optimization",
      "Testing",
      "Deployment",
    ],
    additionalInfo:
      "Specializing in creating fast, secure, and easy-to-manage static websites.",
  },
  {
    title: "Design to Code Conversion",
    description:
      "Turning designs into clean, responsive code, ensuring pixel-perfect accuracy and smooth functionality across devices.",
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
    keywords: [
      "UI to Code",
      "Pixel Perfect",
      "Clean Code",
      "Design Implementation",
      "Cross Browser Support",
    ],
    process: [
      "Design Review",
      "Asset Analysis",
      "Code Implementation",
      "Responsive Check",
      "Testing",
    ],
    additionalInfo:
      "Prioritizing visual accuracy and code quality in every design conversion.",
  },
  {
    title: "Responsive Website Development",
    description:
      "Ensuring optimal website display across all screen sizes using mobile-first approach and modern responsive techniques.",
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
    size: "medium",
    keywords: [
      "Mobile First",
      "Responsive Design",
      "Cross Device",
      "Fluid Layout",
      "Adaptive Images",
    ],
    process: [
      "Mobile First Planning",
      "Responsive Development",
      "Cross Device Testing",
      "Performance Check",
      "Browser Testing",
    ],
    additionalInfo: "Focus on consistent user experience across all devices.",
  },
  {
    title: "Dynamic Web/SPA Development",
    description:
      "Developing modern web applications that offer dynamic, interactive, and responsive user experiences. The focus is on creating smooth navigation, adaptable interfaces, and ensuring the application works well across different devices and screen sizes. The aim is to deliver a seamless, user-friendly experience that meets diverse needs efficiently.",
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
    size: "large",
    keywords: [
      "Single Page Application",
      "Dynamic Content",
      "State Management",
      "Client-side Routing",
      "Modern Web Apps",
    ],
    process: [
      "Architecture Planning",
      "Component Design",
      "Development",
      "State Management",
      "Testing",
      "Deployment",
    ],
    additionalInfo:
      "Building modern web applications with high performance and optimal user experience.",
  },
  {
    title: "Frontend API Integration",
    description:
      "Integrating the frontend with different data sources to display real-time information and enable dynamic interactions. This involves connecting the user interface to external systems, ensuring that data is updated seamlessly and that the user experience remains interactive and responsive.",
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
    size: "medium",
    keywords: [
      "API Integration",
      "Real-time Data",
      "Data Fetching",
      "Error Handling",
      "State Management",
    ],
    process: [
      "API Analysis",
      "Integration Planning",
      "Implementation",
      "Error Handling",
      "Testing",
      "Documentation",
    ],
    additionalInfo:
      "Integrating APIs with robust error handling and optimal performance.",
  },
  {
    title: "Reusable UI Components",
    description:
      "Creating reusable and maintainable user interface components that streamline the development process. These components are designed to be flexible, allowing for easy updates and consistent use across different parts of the application, which helps improve efficiency and reduce repetitive work.",
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
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m0 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    size: "medium",
    keywords: [
      "Component Library",
      "Reusable UI",
      "Design System",
      "Maintainable Code",
      "Documentation",
    ],
    process: [
      "Component Planning",
      "Development",
      "Testing",
      "Documentation",
      "Integration",
      "Maintenance",
    ],
    additionalInfo:
      "Creating consistent, reusable components that are easy to integrate.",
  },
  {
    title: "Frontend Performance Optimization",
    description:
      "Improving website loading speed and performance through various modern optimization techniques.",
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
    keywords: [
      "Performance Optimization",
      "Load Time",
      "Core Web Vitals",
      "Image Optimization",
      "Code Splitting",
    ],
    process: [
      "Performance Audit",
      "Optimization Planning",
      "Implementation",
      "Testing",
      "Monitoring",
    ],
    additionalInfo:
      "Focus on performance optimization for better user experience.",
  },
  {
    title: "UI Testing and Debugging",
    description:
      "Performing comprehensive testing to ensure that the user interface functions correctly and consistently across a wide range of browsers and devices. This includes checking layout, responsiveness, and overall user experience to identify and fix any issues, ensuring the application runs smoothly for all users regardless of how they access it.",
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
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m0 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    size: "small",
    keywords: [
      "Cross Browser Testing",
      "Responsive Testing",
      "Debug",
      "Error Fixing",
      "Quality Assurance",
    ],
    process: [
      "Test Planning",
      "Implementation",
      "Debug",
      "Fix Issues",
      "Documentation",
      "Maintenance",
    ],
    additionalInfo:
      "Ensuring UI quality through comprehensive testing and effective debugging.",
  },
];

export const Services = () => {
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });
  const [selectedService, setSelectedService] = useState<
    (typeof servicesData)[0] | null
  >(null);

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

  const handleOpenModal = (service: (typeof servicesData)[0]) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen w-full bg-black py-10 md:py-20 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                Comprehensive Front-End Web Development solutions tailored to
                your needs
              </p>
            )}
          </div>
        </div>

        <div
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative min-h-[20rem]",
                index === 0 && "md:col-span-3 lg:col-span-4",
                index === 1 && "md:col-span-3 lg:col-span-2",
                index === 2 && "md:col-span-3 lg:col-span-2",
                index === 3 && "md:col-span-3 lg:col-span-4",
                index === 4 && "md:col-span-3 lg:col-span-3",
                index === 5 && "md:col-span-3 lg:col-span-3",
                index === 6 && "md:col-span-3 lg:col-span-2",
                index === 7 && "md:col-span-3 lg:col-span-4"
              )}
            >
              <div className="relative h-full rounded-2xl border border-cyan-700/30 p-2">
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
                    <div className="w-fit rounded-xl border border-violet-500/30 p-3 bg-black">
                      {service.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                      <PrimaryButton
                        text="Learn More"
                        fromColor="from-violet-600"
                        toColor="to-cyan-600"
                        radius="rounded-xl"
                        height="h-10"
                        padding="p-5"
                        font="font-normal"
                        onClick={() => handleOpenModal(service)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        service={selectedService!}
      />
    </div>
  );
};
