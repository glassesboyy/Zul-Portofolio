"use client";
import gsap from "gsap";

import { useAnimationStore } from "@/store/animationStore";
import { useEffect, useRef } from "react";
import { initHeroAnimation } from "../animation/heroAnimation";
import { HeroHighlight } from "../ui/hero-highlight";

export function Hero() {
  const titleCharsRef = useRef<HTMLSpanElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const title = "Zul Personal Website".split("");
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
      }, 1500);

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
              <h1 className="cursor-pointer scroll-m-20 text-5xl font-extrabold lg:text-8xl mt-8">
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
                <p className="text-lg text-foreground/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  similique doloribus numquam cum id perspiciatis explicabo
                  voluptas tenetur. Ducimus illo blanditiis tenetur? Quasi iste
                  ex sint dolorem non inventore minima.
                </p>
              </div>

              <div ref={ctaRef} className="flex justify-center"></div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
