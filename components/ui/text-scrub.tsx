"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextScrubProps {
  children: React.ReactNode;
  className?: string;
}

export const TextScrub = ({ children, className }: TextScrubProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = new SplitType(textRef.current, {
      types: "words,chars",
      tagName: "span",
    });

    gsap.from(text.chars, {
      opacity: 0.2,
      scale: 0.8,
      duration: 0.3,
      ease: "power4.out",
      stagger: {
        amount: 0.01,
        from: "start",
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center+=100",
        end: "bottom center",
        scrub: 1,
      },
    });

    return () => {
      text.revert();
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`whitespace-nowrap inline-block ${className}`}
    >
      {children}
    </div>
  );
};
