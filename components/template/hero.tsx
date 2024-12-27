"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  fadeInUp,
  heroImageAnimation,
  infiniteTextAnimation,
  infiniteTextContainer,
} from "@/lib/animations";
import { motion } from "framer-motion";

export function Hero() {
  const title = "Zul Personal Website".split("");

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="relative z-[1] justify-items-center">
        <div className="container py-10 lg:py-16">
          <motion.div
            variants={fadeInUp}
            className="max-w-6xl text-center mx-auto"
          >
            <motion.div
              className="flex justify-center"
              variants={heroImageAnimation}
            >
              <Avatar className="mb-1">
                <AvatarImage src="/assets/avatar.jpg" alt="Zul" />
                <AvatarFallback>ZP</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.h1
              variants={infiniteTextContainer}
              animate="animate"
              initial="initial"
              className="scroll-m-20 cursor-pointer text-5xl font-extrabold lg:text-8xl mt-8 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-transparent bg-clip-text"
            >
              {title.map((char, index) => (
                <motion.span
                  key={index}
                  variants={infiniteTextAnimation}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-5 max-w-6xl">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                similique doloribus numquam cum id perspiciatis explicabo
                voluptas tenetur. Ducimus illo blanditiis tenetur? Quasi iste ex
                sint dolorem non inventore minima.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <a
                className="mt-5 group overflow-hidden w-[40px] hover:w-[200px] inline-flex items-center gap-x-2 border border-violet-700 hover:border-cyan-500 text-sm p-1 rounded-full transition-all duration-500 hover:bg-cyan-900/30 shadow-sm shadow-white hover:shadow-lg hover:shadow-white"
                href="#"
              >
                <span className="absolute scale-0 transition-transform [transition-duration:100ms] group-hover:scale-100 group-hover:[transition-duration:1000ms] ms-3">
                  Get in Touch With Zul
                </span>
                <span className="ms-auto py-2 px-2 justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                  <svg
                    className="flex-shrink-0 w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
