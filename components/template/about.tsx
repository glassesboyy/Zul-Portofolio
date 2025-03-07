"use client";

import { useAnimationStore } from "@/store/animationStore";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { AboutAnimation } from "../animation/aboutAnimation";
import { FloatingDock } from "../ui/floating-dock";

export const About = () => {
  const preloadComplete = useAnimationStore((state) => state.preloadComplete);

  const description = `Let's collaborate to build exceptional digital experiences. As a full-stack developer, I transform innovative ideas into powerful, user-friendly solutions.`;

  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "https://github.com/glassesboyy",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-white" />,
      href: "https://linkedin.com/in/suryazulfikarr",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-white" />,
      href: "https://instagram.com/suryazulfikarr",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-white" />,
      href: "mailto:aliperwira26@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-20 flex flex-col items-center gap-8 md:gap-12 h-fit relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl relative w-full">
        {/* Left Column - Image */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <AboutAnimation type="image">
            <div className="relative w-full max-w-[240px] h-[240px] sm:max-w-[280px] sm:h-[280px] lg:max-w-[370px] lg:h-[370px]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 blur-lg opacity-70 animate-pulse" />
              <div className="relative rounded-xl overflow-hidden w-full h-full group">
                <img
                  src="/assets/me.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </AboutAnimation>
        </div>

        {/* Right Column - Content */}
        <div className="order-1 md:order-2">
          <AboutAnimation type="content">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="text-center md:text-left space-y-6">
                <div className="title-container relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1 cursor-pointer group justify-center md:justify-start w-full">
                    <span className="text-xs md:text-sm uppercase tracking-wider text-violet-400 font-medium">
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
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text leading-[1.1]">
                      Hi There! Its Me,
                    </h2>
                    <h2 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                      Surya Zulfikar
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="description text-base sm:text-lg text-center md:text-left font-medium text-white/70 leading-relaxed max-w-lg mx-auto md:mx-0">
                    {description}
                  </p>

                  <div className="social-links w-full max-w-md mx-auto md:mx-0">
                    <div className="flex md:justify-center md:block">
                      <FloatingDock
                        items={socialLinks}
                        className="backdrop-blur-sm bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AboutAnimation>
        </div>
      </div>
    </div>
  );
};
