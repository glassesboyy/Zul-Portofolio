import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface TimelineItemProps {
  title: string;
  content: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  index: number;
  totalItems: number;
}

export const TimelineItem = ({
  title,
  content,
  scrollYProgress,
  index,
  totalItems,
}: TimelineItemProps) => {
  const pointProgress = useTransform(
    scrollYProgress,
    [
      (index - 0.2) / totalItems,
      index / totalItems,
      (index + 0.2) / totalItems,
    ],
    [0.3, 1, 1]
  );

  return (
    <div className="flex justify-start pt-10 md:pt-40">
      <motion.div
        style={{ opacity: pointProgress }}
        className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
      >
        <motion.div
          style={{ opacity: pointProgress }}
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-violet-500/20"
        >
          <div className="h-4 w-4 rounded-full bg-violet-500/50 border border-violet-500/90" />
        </motion.div>
        <motion.h3
          style={{ opacity: pointProgress }}
          className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-white"
        >
          {title}
        </motion.h3>
      </motion.div>

      <div className="relative pl-20 pr-4 md:pl-1 w-full">
        <motion.h3
          style={{ opacity: pointProgress }}
          className="md:hidden block text-2xl mb-4 text-left font-bold text-white/20"
        >
          {title}
        </motion.h3>
        <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-500">
          {content}
        </div>
      </div>
    </div>
  );
};
