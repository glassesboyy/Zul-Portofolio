"use client";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import { AboutAnimation } from "../animation/aboutAnimation";
import { FloatingDock } from "../ui/floating-dock";
import { Separator } from "../ui/separator";
import { Timeline } from "../ui/timeline";

export const About = () => {
  const description = `With a team of creative and experienced technology professionals, TechVision is committed to delivering innovative solutions that are user-friendly and provide real value. Our vision is to be at the forefront of Indonesia&apos;s digital advancement by providing relevant, adaptive, and sustainable solutions.`;

  const timelineData = [
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            TechVision was founded with a vision for Indonesia&apos;s digital
            revolution. Started with a small team of talented developers
            focusing on web and mobile solutions for SMEs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/logo.png"
              alt="Company Milestone 1"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Milestone 2"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Milestone 3"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded services to include cloud solutions and AI integration.
            Successfully delivered projects for enterprise clients and secured
            seed funding for growth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/logo.png"
              alt="Company Growth 1"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Growth 2"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Growth 3"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Achieved significant growth with a team of 50+ professionals.
            Launched our flagship SaaS product and established partnerships with
            leading technology companies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/logo.png"
              alt="Company Success 1"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Success 2"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Success 3"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continuing to innovate and expand our presence in Indonesia. Focused
            on developing sustainable technology solutions and driving digital
            transformation across industries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/logo.png"
              alt="Company Future 1"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Future 2"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <Image
              src="/assets/logo.png"
              alt="Company Future 3"
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
      href: "https://www.linkedin.com/in/surya-zulfikar-021316287/",
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
    <div className="container mx-auto py-8 md:py-20 flex flex-col items-center gap-8 md:gap-12 h-fit relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl relative w-full">
        <div className="flex justify-center items-center order-2 md:order-1">
          <AboutAnimation type="image">
            <div className="relative w-full max-w-[240px] h-[240px] sm:max-w-[280px] sm:h-[280px] lg:max-w-[370px] lg:h-[370px]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 blur-lg opacity-70 animate-pulse" />
              <div className="relative rounded-xl overflow-hidden w-full h-full group">
                <Image
                  src="/assets/logo.png"
                  alt="Profile picture"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </AboutAnimation>
        </div>

        <div className="order-1 md:order-2">
          <AboutAnimation type="content">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="text-center md:text-left space-y-6">
                <div className="title-container relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1 cursor-pointer group justify-center md:justify-start w-full">
                    <span className="text-xs md:text-sm uppercase tracking-wider text-violet-400 font-medium">
                      About Us
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
                      Welcome to
                    </h2>
                    <h2 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                      TechVision
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

      <div className="w-full my-12">
        <Separator />
      </div>

      <div className="w-full max-w-6xl">
        <AboutAnimation type="content">
          <Timeline data={timelineData} />
        </AboutAnimation>
      </div>
    </div>
  );
};
