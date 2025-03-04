"use client";
import { useAnimationStore } from "@/store/animationStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { initHeroAnimation } from "../animation/heroAnimation";
import { FlipWords } from "../ui/flip-word";
import { HeroButton } from "../ui/hero-button";
import { HeroHighlight } from "../ui/hero-highlight";

export function Hero() {
  const titleCharsRef = useRef<HTMLSpanElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const staticTitle = "I'AM ZUL!".split("");
  const greetings = ["HOLA", "HI", "CIAO", "HEJ", "CZE", "OLA", "HOI"];
  const { preloadComplete } = useAnimationStore();

  useEffect(() => {
    gsap.set(titleCharsRef.current, { opacity: 0, y: 20 });
    gsap.set([contentRef.current, ctaRef.current], { y: 20, opacity: 0 });
  }, []);

  useEffect(() => {
    if (preloadComplete) {
      const delay = setTimeout(() => {
        const timeline = initHeroAnimation(
          titleCharsRef.current,
          contentRef.current,
          ctaRef.current
        );

        return () => {
          timeline?.kill();
        };
      }, 1000);

      return () => {
        clearTimeout(delay);
      };
    }
  }, [preloadComplete]);

  return (
    <section className="w-full min-h-screen relative z-10">
      <HeroHighlight
        className={`transition-opacity duration-300 ${
          !preloadComplete ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative z-10 justify-items-center">
          <div className="container py-10 lg:py-16">
            <div className="max-w-6xl text-center mx-auto text-foreground">
              <h1 className="cursor-pointer scroll-m-20 text-5xl md:text-9xl lg:text-9xl font-extrabold mt-8 flex items-center justify-center">
                <FlipWords words={greetings} duration={2500} />
                {staticTitle.map((char, index) => (
                  <span
                    key={index}
                    ref={(el) => {
                      if (el) titleCharsRef.current[index] = el;
                    }}
                    className="inline-block opacity-100 text-shadow-gradient"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <div ref={contentRef} className="mt-5 max-w-6xl">
                <p className="text-sm md:text-4xl lg:text-2xl text-foreground/80">
                  Crafting Innovative Solutions as a Passionate Fullstack Web
                  Developer.
                </p>
              </div>

              <div ref={ctaRef} className="flex justify-center mt-8">
                <HeroButton />
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
