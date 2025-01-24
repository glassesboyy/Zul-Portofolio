"use client";
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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0], [0, 0]),
    springConfig
  );
  // const translateXReverse = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, -800]),
  //   springConfig
  // );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [30, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.05, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [-400, -100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[110vh] bg-black overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto my-20 md:my-40 px-4 w-full left-0 top-0">
        <div className="space-y-2 text-right">
          {headerTag && (
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
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
          <h1 className="text-2xl md:text-5xl font-bold dark:text-white">
            <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
              {headerTitle}
            </span>
          </h1>
          {headerSubtitle && (
            <p className="text-base md:text-lg mt-8 dark:text-neutral-200 w-full ml-auto">
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
        className="relative w-full px-4 mt-20"
      >
        {/* Single Row with all certificates */}
        <motion.div className="flex overflow-x-auto scrollbar-hide mb-10">
          <div className="flex space-x-7 min-w-max px-4">
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
      className="group/product h-64 w-96 relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block relative h-full w-full rounded-xl overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-t before:from-black/80 before:to-transparent before:z-10
          before:opacity-60 before:transition-opacity before:duration-700
          group-hover/product:before:opacity-30"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 to-violet-900/60 
          opacity-0 group-hover/product:opacity-100 transition-opacity duration-700 z-20"
        />

        <div
          className="absolute inset-0 border border-violet-500/20 rounded-xl z-20
          group-hover/product:border-violet-500/50 group-hover/product:shadow-lg
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

        <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
          <h2
            className="text-white font-medium text-lg opacity-0 
            group-hover/product:opacity-100 transform translate-y-4 
            group-hover/product:translate-y-0 transition-all duration-700
            text-shadow-lg shadow-black/50"
          >
            {product.title}
          </h2>
          <div
            className="h-[0.5px] w-0 bg-gradient-to-r from-violet-500 via-violet-500 
            to-cyan-400 rounded-full group-hover/product:w-full transition-all duration-700"
          />
        </div>
      </Link>
    </motion.div>
  );
};
