"use client";

import { useEffect, useRef } from "react";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";
import { initContactAnimation } from "../animation/contactAnimation";

export const Contact = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const socialLinks = containerRef.current.querySelectorAll("a");
      initContactAnimation(titleRef.current, Array.from(socialLinks));
    }
  }, []);

  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-8 w-8" />,
      href: "https://github.com/glassesboyy",
      description: "Check out my open-source projects and contributions",
      color: "hover:bg-[#2b3137] transition-colors duration-500",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-8 w-8" />,
      href: "https://linkedin.com/in/suryazulfikarr",
      description: "Connect with me professionally",
      color: "hover:bg-[#0077b5] transition-colors duration-500",
    },
    {
      title: "Discord",
      icon: <IconBrandDiscord className="h-8 w-8" />,
      href: "https://discordapp.com/users/811565856541638686",
      description: "Chat with me on Discord",
      color: "hover:bg-[#5865F2] transition-colors duration-500",
    },
    {
      title: "Spotify",
      icon: <IconBrandSpotify className="h-8 w-8" />,
      href: "https://open.spotify.com/user/31hdddh6jo5kwyxuxion45xjifv4?si=5d95839ef2174a92",
      description: "Check out what I'm listening to",
      color: "hover:bg-[#1DB954] transition-colors duration-500",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-8 w-8" />,
      href: "https://instagram.com/suryazulfikarr",
      description: "Follow my visual journey",
      color: "hover:bg-[#EA4335] transition-colors duration-500",
    },
    {
      title: "Email",
      icon: <IconMail className="h-8 w-8" />,
      href: "mailto:aliperwira26@gmail.com",
      description: "Send me a direct message",
      color: "hover:bg-[#EA4335] transition-colors duration-500",
    },
  ];

  return (
    <div className="relative flex flex-col items-center p-4 md:mt-16">
      <div ref={titleRef} className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-1 group">
          <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest cursor-pointer">
            Contact
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="transition-transform duration-1000 group-hover:translate-x-1 text-violet-400"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold [text-wrap:balance]">
          <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
            Get in Touch With Me
          </span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
          Feel free to reach out through any of these platforms. I'm always open
          to new opportunities and connections.
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 rounded-xl border border-violet-900/50 
                backdrop-blur-sm transition-all duration-300
                ${link.color} hover:border-transparent`}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-violet-500/10 group-hover:bg-white/10 transition-colors duration-300">
                {link.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold">{link.title}</h3>
                  <IconExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-xxs md:text-xs lg:text-xs text-gray-400 mt-1 group-hover:text-white/90 transition-colors duration-300">
                  {link.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
