"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  children: React.ReactNode;
  type: "image" | "content";
};

export const AboutAnimation = ({ children, type }: AnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      if (type === "image") {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: element,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Floating animation
        gsap.to(element, {
          y: -15,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });
      } else {
        // Animasi untuk konten teks
        const titleElement = element.querySelector(
          ".title-container"
        ) as HTMLElement;
        const descElement = element.querySelector(
          ".description"
        ) as HTMLElement;
        const socialElement = element.querySelector(
          ".social-links"
        ) as HTMLElement;

        // Memastikan semua elemen ditemukan
        if (!titleElement || !descElement || !socialElement) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          titleElement,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
          .fromTo(
            descElement,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.4"
          )
          .fromTo(
            socialElement,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.4"
          );
      }
    }, element); // Specify the scope for the context

    return () => ctx.revert();
  }, [type]);

  return <div ref={elementRef}>{children}</div>;
};
