"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";

interface SeparatorProps {
  className?: string;
}

export const SeparatorRoundDown = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className }, ref) => {
    const separatorRef = useRef(null);
    const isInView = useInView(separatorRef, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={separatorRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full h-24 md:h-32 lg:h-48 relative bg-transparent",
          className
        )}
      >
        <svg
          viewBox="0 0 1200 240"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <mask id="reveal-mask-down">
              <motion.rect
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 5,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.1,
                }}
                x="0"
                y="0"
                width="1200"
                height="240"
                fill="white"
                style={{ transformOrigin: "center" }}
              />
            </mask>
            <linearGradient
              id="gradient-down"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M 0,0 C 300,210 900,210 1200,0"
            fill="none"
            stroke="url(#gradient-down)"
            className="stroke-[15] md:stroke-[20] lg:stroke-[25]"
            strokeLinecap="round"
            pathLength="1200"
            style={{
              strokeDasharray: "0 1200",
              strokeDashoffset: "0",
            }}
            mask="url(#reveal-mask-down)"
          />
          <path
            d="M 0,0 C 300,210 900,210 1200,0"
            fill="none"
            stroke="url(#gradient-down)"
            className="stroke-[2] md:stroke-[3] lg:stroke-[5]"
            mask="url(#reveal-mask-down)"
          />
          <defs>
            <filter id="thick-middle">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3">
                <animate
                  attributeName="stdDeviation"
                  values="0;3;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </motion.div>
    );
  }
);

SeparatorRoundDown.displayName = "SeparatorRoundDown";
