"use client";
import { useAnimationStore } from "@/store/animationStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { initHeroAnimation } from "../animation/heroAnimation";
import { HeroHighlight } from "../ui/hero-highlight";
import { PrimaryButton } from "../ui/primary-button";

export function Hero() {
  const titleCharsRef = useRef<HTMLSpanElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const firstLine = "Driven by Passion,".split("");
  const secondLine = "Powered by Code.".split("");

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
              <h1 className="cursor-pointer scroll-m-20 text-4.5xl md:text-7.5xl lg:text-9xl font-extrabold mt-8 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  {firstLine.map((char, index) => (
                    <span
                      key={`first-${index}`}
                      ref={(el) => {
                        if (el) titleCharsRef.current[index] = el;
                      }}
                      className="inline-block opacity-100 text-shadow-gradient"
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  {secondLine.map((char, index) => (
                    <span
                      key={`second-${index}`}
                      ref={(el) => {
                        if (el)
                          titleCharsRef.current[firstLine.length + index] = el;
                      }}
                      className="inline-block opacity-100 text-shadow-gradient"
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </h1>
              <div
                ref={contentRef}
                className="mt-8 max-w-3xl md:max-w-3xl lg:max-w-6xl mx-auto"
              >
                <p className="text-sm md:text-2xl lg:text-2xl text-foreground/80 text-center">
                  With a user-first design approach and a commitment to creating
                  meaningful digital experiences, I specialize in crafting
                  elegant and intuitive front-end solutions. From seamless
                  interfaces to smooth interactions, I bring passion, precision,
                  and purpose to every pixel and line of code.
                </p>
              </div>

              <div ref={ctaRef} className="flex justify-center mt-12">
                <PrimaryButton
                  text="Let's Collaborate"
                  fromColor="from-violet-600"
                  toColor="to-cyan-600"
                  radius="rounded-full"
                  link="#contact"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
