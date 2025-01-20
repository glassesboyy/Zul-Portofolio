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
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        }
      );
    } else {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          width: "100%",
        },
        {
          opacity: 1,
          y: 0,
          width: "100%",
          duration: 1.5,
          delay: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top center+=200",
            toggleActions: "play reverse restart reverse",
          },
        }
      );
    }

    // Cleanup
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
