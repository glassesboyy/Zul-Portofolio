"use client";

import { useAnimationStore } from "@/store/animationStore";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { initAboutAnimation } from "../animation/aboutAnimation";
import { FloatingDock } from "../ui/floating-dock";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const preloadComplete = useAnimationStore((state) => state.preloadComplete);

  const description = `Let's collaborate to build exceptional digital experiences. As a full-stack developer, I transform innovative ideas into powerful, user-friendly solutions.`;

  useEffect(() => {
    if (isInView && preloadComplete && ref.current) {
      initAboutAnimation(ref.current);
    }
  }, [isInView, preloadComplete]);

  const socialLinks = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-violet-500 dark:text-cyan-400" />
      ),
      href: "https://github.com/glassesboyy",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-violet-500 dark:text-cyan-400" />
      ),
      href: "https://linkedin.com/in/suryazulfikarr",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-violet-500 dark:text-cyan-400" />
      ),
      href: "https://instagram.com/suryazulfikarr",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-violet-500 dark:text-cyan-400" />
      ),
      href: "mailto:aliperwira26@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center gap-12 h-fit relative overflow-hidden">
      <div
        ref={ref}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl relative"
      >
        {/* Left Column - Image */}
        <div className="profile-image-container opacity-0 order-2 lg:order-1">
          <div className="relative w-full max-w-[280px] h-[280px] lg:max-w-[400px] lg:h-[400px] mx-auto">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 blur-lg opacity-70 animate-pulse" />
            <div className="relative rounded-xl overflow-hidden w-full h-full group">
              <Image
                src="/assets/me.png"
                alt="Profile picture"
                fill
                className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
          <div className="text-left space-y-6">
            <div className="title-container opacity-0 relative z-10 space-y-2">
              <div className="inline-flex items-center gap-1 cursor-pointer group">
                <span className="text-sm uppercase tracking-wider text-violet-400 font-medium">
                  About Me
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
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text leading-[1.1]">
                  Hi There! Its Me,
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white/90 leading-[1.1]">
                  Surya Zulfikar
                </h2>
              </div>
            </div>

            <div className="space-y-8">
              <p className="description opacity-0 text-base sm:text-lg md:text-xl font-medium text-white/70 leading-relaxed max-w-2xl">
                {description}
              </p>

              <div className="social-links opacity-0 w-full max-w-md">
                <FloatingDock
                  items={socialLinks}
                  desktopClassName="backdrop-blur-sm bg-transparent"
                  mobileClassName="backdrop-blur-sm bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
