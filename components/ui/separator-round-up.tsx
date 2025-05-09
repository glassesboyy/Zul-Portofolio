"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import { useMergeRefs } from "@/hooks/use-merge-refs";

interface SeparatorProps {
  className?: string;
}

export const SeparatorRoundUp = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className }, forwardedRef) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(internalRef, { once: true, margin: "-100px" });
    const mergedRefs = useMergeRefs(internalRef, forwardedRef);

    return (
      <motion.div
        ref={mergedRefs}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("w-full h-24 md:h-32 lg:h-48 relative", className)}
      >
        <svg
          viewBox="0 0 1200 240"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <mask id="reveal-mask-up">
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
            <linearGradient id="gradient-up" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M 0,240 C 300,30 900,30 1200,240"
            fill="none"
            stroke="url(#gradient-up)"
            className="stroke-[2] md:stroke-[3] lg:stroke-[5]"
            mask="url(#reveal-mask-up)"
          />
        </svg>
      </motion.div>
    );
  }
);

SeparatorRoundUp.displayName = "SeparatorRoundUp";
