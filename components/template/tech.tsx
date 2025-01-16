"use client";

import { useAnimationStore } from "@/store/animationStore";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { initTechAnimation } from "../animation/techAnimation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const techStack = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Mysql", icon: "devicon-mysql-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "Php", icon: "devicon-php-plain" },
];

export const Tech = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { preloadComplete } = useAnimationStore();
  const animationTriggered = useRef(false);
  const geometryRef = useRef(null);
  const isInView = useInView(geometryRef, { once: true, margin: "-100px" });
  const subtitleRef = useRef(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    // Set initial state when component mounts
    const elements = containerRef.current?.querySelectorAll(".tech-card") || [];
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0 });
      gsap.set(elements, { opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (!preloadComplete || animationTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationTriggered.current) {
          // Immediately disconnect observer and mark as triggered
          observer.disconnect();
          animationTriggered.current = true;

          const cards =
            containerRef.current?.querySelectorAll(".tech-card") || [];

          // Start animation
          initTechAnimation(titleRef.current, Array.from(cards));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [preloadComplete]);

  return (
    <div>
      <h1 ref={geometryRef} className="mb-4 text-center relative">
        {" "}
        {/* Changed mb-12 to mb-4 */}
        {/* Left geometric shape */}
        <motion.div
          initial={{ scale: 0, rotate: 0, x: 50, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  rotate: 360,
                  x: 0,
                  opacity: 1.2,
                }
              : {
                  scale: 0,
                  rotate: 0,
                  x: 50,
                  opacity: 0,
                }
          }
          transition={{
            delay: 0.5,
            duration: 1,
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute right-[calc(50%+150px)] top-1/3 -translate-y-1/2 w-4 h-4 bg-gradient-to-tr from-violet-500 to-cyan-500"
        >
          <motion.div
            animate={{ opacity: isInView ? [0.5, 1, 0.5] : 0 }}
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
        {/* Right geometric shape */}
        <motion.div
          initial={{ scale: 0, rotate: 0, x: -50, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  rotate: -360,
                  x: 0,
                  opacity: 1,
                }
              : {
                  scale: 0,
                  rotate: 0,
                  x: -50,
                  opacity: 0,
                }
          }
          transition={{
            delay: 0.5,
            duration: 1.2,
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute left-[calc(50%+150px)] top-1/3 -translate-y-1/2 w-4 h-4 bg-gradient-to-tr from-violet-500 to-cyan-500"
        >
          <motion.div
            animate={{ opacity: isInView ? [0.5, 1, 0.5] : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-cyan-400 blur-sm"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1.5 } : { scale: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute inset-0 bg-white/30 blur-xl"
          />
        </motion.div>
        <span
          ref={titleRef}
          className="inline-block text-5xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          Tech Stack
        </span>
      </h1>

      {/* Modified subtitle section */}
      <div ref={subtitleRef} className="mb-12 text-center">
        {isSubtitleInView && (
          <p className="text-xs font-normal md:text-lg text-white text-center">
            Mastering modern technologies to create exceptional digital
            experiences
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-items-center gap-4 px-4 md:px-20 lg:px-48"
      >
        {techStack.map((tech, index) => (
          <CardContainer
            key={index}
            className="inter-var tech-card"
            containerClassName="py-2"
          >
            <CardBody
              className={`
              relative group/card h-32 w-32 cursor-pointer
              bg-gradient-to-br from-black via-slate-950 to-violet-900
              dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.2]
              border border-violet-900/50 rounded-xl p-4
              transition-all duration-300 ease-out
              hover:border-violet-600/50
              hover:scale-95
              before:absolute before:inset-0 before:bg-gradient-to-br 
              before:from-violet-600/20 before:via-violet-800/10 before:to-black/20 
              before:rounded-xl before:opacity-0 
              before:transition-opacity before:duration-500
              hover:before:opacity-100
              after:absolute after:inset-0 
              after:bg-gradient-to-br 
              after:from-violet-500/0 after:via-violet-500/[0.1] after:to-black/0 
              after:opacity-0 after:group-hover/card:opacity-100 
              after:transition-opacity after:duration-500 
              after:rounded-xl
            `}
            >
              <CardItem
                translateZ={200}
                className="text-7xl flex items-center justify-center w-full h-full text-violet-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <i
                    className={`${tech.icon} group-hover/card:text-violet-100 transition-all duration-500 transform group-hover/card:scale-110`}
                  />
                  <span className="text-xs font-medium text-violet-300 group-hover/card:text-violet-100 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
