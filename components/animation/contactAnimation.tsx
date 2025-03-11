"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContactAnimationProps {
  children: React.ReactNode;
  type: "title" | "form";
}

export const ContactAnimation: React.FC<ContactAnimationProps> = ({
  children,
  type,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: type === "title" ? -30 : 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: type === "title" ? 0 : 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [type]);

  return <div ref={elementRef}>{children}</div>;
};
