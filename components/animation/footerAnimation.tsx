"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  children: React.ReactNode;
  type: "name" | "nav" | "message";
};

export const FooterAnimation = ({ children, type }: AnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      switch (type) {
        case "name":
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              scrollTrigger: {
                trigger: element,
                start: "top bottom-=80",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "nav":
          gsap.fromTo(
            element.children,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              stagger: 0.1,
              scrollTrigger: {
                trigger: element,
                start: "top bottom-=50",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;

        case "message":
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              scrollTrigger: {
                trigger: element,
                start: "top bottom-=20",
                toggleActions: "play none none reverse",
              },
            }
          );
          break;
      }
    }, element);

    return () => ctx.revert();
  }, [type]);

  return <div ref={elementRef}>{children}</div>;
};
