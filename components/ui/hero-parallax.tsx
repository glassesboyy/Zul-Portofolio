"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroParallax = ({
  products,
  headerTitle,
  headerSubtitle,
  headerTag,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  headerTitle?: string;
  headerSubtitle?: string;
  headerTag?: string;
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const springConfig = {
    stiffness: isDesktop ? 300 : isTablet ? 250 : 200,
    damping: isDesktop ? 30 : isTablet ? 25 : 20,
    bounce: isDesktop ? 100 : isTablet ? 80 : 60,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0], [0, 0]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.1],
      [isDesktop ? 35 : isTablet ? 35 : 35, 0]
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.6, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.1],
      [
        isDesktop ? -50 : isTablet ? -10 : 15,
        isDesktop ? -50 : isTablet ? -10 : 15,
      ]
    ),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[36vh] md:h-[30vh] lg:h-[60vh] 
        bg-black overflow-hidden antialiased relative flex flex-col self-auto 
        [perspective:1000px] [transform-style:preserve-3d] my-4 md:my-16 lg:my-20"
    >
      <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
        <div className="space-y-2 text-right">
          {headerTag && (
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
                {headerTag}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="transition-transform duration-300 group-hover:translate-x-1 text-violet-400"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
              {headerTitle}
            </span>
          </h2>
          {headerSubtitle && (
            <p className="text-sm md:text-base lg:text-lg mt-2 md:mt-4 lg:mt-8 text-white/70 w-full ml-auto">
              {headerSubtitle}
            </p>
          )}
        </div>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative w-full px-4 mt-6 md:mt-8 lg:mt-16"
      >
        {/* Single Row with all certificates */}
        <motion.div className="flex overflow-x-auto scrollbar-hide mb-4 md:mb-6 lg:mb-10">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 min-w-max px-4">
            {products.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        scale: 0.95,
      }}
      key={product.title}
      className="group/product h-40 md:h-52 lg:h-72 w-[240px] md:w-[320px] lg:w-[460px] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block relative h-full w-full rounded-lg md:rounded-xl overflow-hidden
          before:absolute before:inset-0
          before:bg-gradient-to-t before:from-black/80 before:to-transparent
          before:opacity-100 before:transition-opacity before:duration-700
          before:z-10
          group-hover/product:before:opacity-30"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 to-violet-900/60 
          opacity-100 group-hover/product:opacity-0 transition-opacity duration-700 z-20"
        />

        <div
          className="absolute inset-0 border border-violet-500/50 rounded-xl z-20
          group-hover/product:border-violet-500/20 group-hover/product:shadow-lg
          group-hover/product:shadow-violet-600/20 transition-all duration-700"
        />

        <Image
          src={product.thumbnail}
          height="900"
          width="900"
          className="object-cover object-left-top absolute h-full w-full inset-0 
            transition-transform duration-700 group-hover/product:scale-105"
          alt={product.title}
        />

        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-30">
          <h2
            className="text-white font-medium text-xs md:text-sm lg:text-lg
              opacity-100 group-hover/product:opacity-0 
              transform translate-y-0 group-hover/product:translate-y-4 
              transition-all duration-700 text-shadow-lg shadow-black/50"
          >
            {product.title}
          </h2>
          <div
            className="h-[0.5px] w-full bg-gradient-to-r from-violet-500 via-violet-500
            to-cyan-400 rounded-full group-hover/product:w-0 transition-all duration-700"
          />
        </div>
      </Link>
    </motion.div>
  );
};
