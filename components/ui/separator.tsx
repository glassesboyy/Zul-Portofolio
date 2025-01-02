"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";

interface SeparatorProps {
  className?: string;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
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
          "w-full h-32 relative flex items-center justify-center overflow-hidden",
          className
        )}
      >
        <div className="absolute w-full h-full flex items-center justify-center">
          {/* Extended central line with glow */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
          />

          {/* Centered geometric shape */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={
              isInView
                ? {
                    scale: 1,
                    rotate: 360,
                  }
                : {
                    scale: 0,
                    rotate: 0,
                  }
            }
            transition={{
              delay: 0.5,
              duration: 0.7,
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute w-4 h-4 bg-gradient-to-tr from-violet-500 to-cyan-500"
          >
            {/* Inner glow effects */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-cyan-400 blur-sm"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1.5 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute inset-0 bg-white/30 blur-xl"
            />
          </motion.div>
        </div>

        {/* Extended horizontal lines */}
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "40%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-[0.5px] bg-gradient-to-r from-violet-500/20 to-transparent"
          />
          <div className="w-8" /> {/* Gap for center */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "40%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-[0.5px] bg-gradient-to-l from-cyan-500/20 to-transparent"
          />
        </div>
      </motion.div>
    );
  }
);

Separator.displayName = "Separator";
