"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={
        {
          "--animation-duration": "40s",
          "--animation-direction": direction === "left" ? "normal" : "reverse",
        } as React.CSSProperties
      }
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group w-[350px] max-w-full relative rounded-2xl border border-violet-500/10 flex-shrink-0 px-8 py-6 md:w-[400px] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/30 overflow-hidden"
            style={{
              background:
                "linear-gradient(170deg, rgba(109, 40, 217, 0.05) 0%, rgba(17, 24, 39, 0.2) 100%)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            }}
            key={item.name + idx}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -right-10 -top-10 w-24 h-24 blur-2xl rounded-full bg-violet-600/20 group-hover:bg-violet-600/30 transition-colors duration-300" />

            <blockquote className="relative">
              <span className="absolute -left-2 -top-2 text-4xl text-violet-500/20">
                "
              </span>
              <span className="absolute -bottom-8 -right-2 text-4xl text-violet-500/20">
                "
              </span>

              <span className="relative z-20 text-sm leading-relaxed text-gray-100 font-normal">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 pt-6 border-t border-violet-500/10">
                <span className="flex flex-col gap-1">
                  <span className="text-sm text-violet-400 font-medium">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
