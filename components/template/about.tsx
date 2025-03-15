"use client";

import { useAnimationStore } from "@/store/animationStore";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import { AboutAnimation } from "../animation/aboutAnimation";
import { FloatingDock } from "../ui/floating-dock";
import { Separator } from "../ui/separator";
import { Timeline } from "../ui/timeline";

export const About = () => {
  const preloadComplete = useAnimationStore((state) => state.preloadComplete);

  const description = `Let's collaborate to build exceptional digital experiences. As a full-stack developer, I transform innovative ideas into powerful, user-friendly solutions.`;

  const timelineData = [
    {
      title: "2018 - 2020",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Served as Chairperson of Class Management during Junior High School
            2 Magelang, leading various activities including anniversary
            celebrations, class meetings, and graduation events.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/me.png"
              alt="Junior High Activities"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/fotogitar.png"
              alt="Class Management"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Ventured into entrepreneurship by managing an online fashion
            business on Instagram (@kaptenmarket) during my junior and senior
            high school years, gaining valuable business experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/fotogitar.png"
              alt="Business Journey"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/me.png"
              alt="Fashion Business"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020-2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Attended State Senior High School 5 Magelang, graduating with an
            average score of 82.7. Served as Coordinator of Organization
            Commission A in MPK (Student Council), where I was responsible for
            channeling student aspirations to school administration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/me.png"
              alt="High School Life"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/fotogitar.png"
              alt="MPK Activities"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my journey at Sebelas Maret University, pursuing a degree in
            Informatics Engineering. Currently actively involved in university
            academic activities and expanding my knowledge in the field.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/fotogitar.png"
              alt="University Life 1"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/me.png"
              alt="University Life 2"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
  ];

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
    {
      title: "Spotify",
      icon: <IconBrandSpotify className="h-full w-full text-white" />,
      href: "https://open.spotify.com/user/31hdddh6jo5kwyxuxion45xjifv4?si=5d95839ef2174a92",
    },
    {
      title: "Discord",
      icon: <IconBrandDiscord className="h-full w-full text-white" />,
      href: "https://discordapp.com/users/811565856541638686",
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

      <div className="w-full max-w-5xl mt-12">
        <Separator />
      </div>

      {/* Timeline Section */}
      <div className="w-full max-w-6xl">
        <AboutAnimation type="content">
          <Timeline data={timelineData} />
        </AboutAnimation>
      </div>
    </div>
  );
};
