"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  children: React.ReactNode;
  type?: "title" | "cards";
};

export const TestimonialsAnimation = ({
  children,
  type = "cards",
}: AnimationProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (type === "title") {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    } else {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 150,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50",
            end: "top center+=100",
            toggleActions: "play none none reverse",
            scrub: 1.5,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [type]);

  const className = type === "title" ? "w-full" : "w-full flex-shrink-0";

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
