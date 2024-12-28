"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Hero() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleCharsRef = useRef<HTMLSpanElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const title = "Zul Personal Website".split("");

  useEffect(() => {
    if (!avatarRef.current || !titleCharsRef.current.length) return;

    const tl = gsap.timeline();

    tl.fromTo(
      avatarRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    const chars = titleCharsRef.current;

    gsap.set(chars, {
      opacity: 0,
      y: 20,
    });

    chars.forEach((char, index) => {
      tl.to(
        char,
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          delay: index * 0.01,
          ease: "power2.out",
        },
        "-=0.25"
      );
    });

    tl.fromTo(
      [contentRef.current, ctaRef.current],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
      },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-[1] justify-items-center">
        <div className="container py-10 lg:py-16">
          <div className="max-w-6xl text-center mx-auto">
            <div ref={avatarRef} className="flex justify-center">
              <Avatar className="mb-1">
                <AvatarImage src="/assets/avatar.jpg" alt="Zul" />
                <AvatarFallback>ZP</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="scroll-m-20 text-5xl font-extrabold lg:text-8xl mt-8">
              {title.map((char, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) titleCharsRef.current[index] = el;
                  }}
                  className="inline-block opacity-100"
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <div ref={contentRef} className="mt-5 max-w-6xl">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                similique doloribus numquam cum id perspiciatis explicabo
                voluptas tenetur. Ducimus illo blanditiis tenetur? Quasi iste ex
                sint dolorem non inventore minima.
              </p>
            </div>

            <div ref={ctaRef} className="flex justify-center">
              <a
                className="mt-5 group overflow-hidden w-[40px] hover:w-[200px] inline-flex items-center gap-x-2 border border-violet-700 hover:border-cyan-500 text-sm p-1 rounded-full transition-all duration-500 hover:bg-cyan-900/30 shadow-sm shadow-violet-700 hover:shadow-2xl hover:shadow-violet-700"
                href="#"
              >
                <span className="absolute scale-0 transition-transform [transition-duration:100ms] group-hover:scale-100 group-hover:[transition-duration:1000ms] ms-3">
                  Get in Touch With Zul
                </span>
                <span className="ms-auto py-2 px-2 justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                  <svg
                    className="flex-shrink-0 w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
