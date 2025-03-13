"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  children: React.ReactNode;
  type: "header" | "content";
};

export const TimelineAnimation = ({ children, type }: AnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      if (type === "header") {
        const headerGroup = element.querySelector(".timeline-header-group");
        const title = element.querySelector(".timeline-title");
        const description = element.querySelector(".timeline-description");

        gsap.fromTo(
          [headerGroup, title, description],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: element,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else if (type === "content") {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, element);

    return () => ctx.revert();
  }, [type]);

  return <div ref={elementRef}>{children}</div>;
};
