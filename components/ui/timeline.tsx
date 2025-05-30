"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TimelineAnimation } from "../animation/timelineAnimation";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({
  title,
  content,
  scrollYProgress,
  index,
  totalItems,
}: {
  title: string;
  content: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  index: number;
  totalItems: number;
}) => {
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
          className="md:hidden block text-4xl mb-4 text-left font-bold text-white"
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

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <TimelineAnimation type="header">
          <div className="space-y-2 text-center md:text-left mb-12">
            <div className="timeline-header-group inline-flex items-center gap-1 cursor-pointer group">
              <span className="timeline-subtitle text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
                Journey
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="timeline-icon transition-transform duration-300 group-hover:translate-x-1 text-violet-400"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <h2 className="timeline-title text-3xl md:text-5xl font-bold [text-wrap:balance]">
              <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                Our Career Timeline
              </span>
            </h2>
            <p className="timeline-description text-sm md:text-base lg:text-lg text-white/70 max-w-2xl">
              Exploring TechVision journey and key milestones
            </p>
          </div>
        </TimelineAnimation>

        <div ref={ref} className="relative max-w-7xl mx-auto">
          {data.map((item, index) => (
            <TimelineItem
              key={`timeline-${index}`}
              title={item.title}
              content={item.content}
              scrollYProgress={scrollYProgress}
              index={index}
              totalItems={data.length}
            />
          ))}

          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-violet-500 via-purple-500 to-cyan-400 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
