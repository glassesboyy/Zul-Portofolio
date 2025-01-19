"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

export const FloatingNav = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    navItems: {
      name: string;
      link: string;
      icon?: JSX.Element;
    }[];
  }
>(({ className, navItems }, ref) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateHidden = () => {
      const currentScroll = scrollY?.get() ?? 0;
      const previousScroll = scrollY?.getPrevious() ?? 0;

      if (currentScroll < previousScroll) {
        setHidden(false);
      } else if (currentScroll > 100 && currentScroll > previousScroll) {
        setHidden(true);
      }
    };

    return scrollY?.onChange(() => updateHidden());
  }, [scrollY]);

  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section.toLowerCase());
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { y: 0, opacity: 1, scale: 1 },
        hidden: { y: -100, opacity: 0, scale: 0.9 },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-6 inset-x-0 max-w-fit mx-auto z-[100]",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center gap-4 px-4 py-2 rounded-full",
          "border border-violet-500/20",
          "bg-black/70",
          "shadow-lg shadow-violet-500/10",
          "backdrop-blur-md"
        )}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item.name)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2 text-sm",
              "transition-all duration-300 rounded-full",
              "hover:bg-violet-500/10 hover:scale-105",
              activeSection === item.name.toLowerCase()
                ? "text-violet-300 font-medium"
                : "text-zinc-400"
            )}
          >
            {item.icon}
            <span className="relative">
              {item.name}
              {activeSection === item.name.toLowerCase()}
            </span>
            {activeSection === item.name.toLowerCase() && (
              <motion.div
                layoutId="pill"
                className={cn(
                  "absolute inset-0 rounded-full",
                  "bg-gradient-to-r from-violet-950/50 to-violet-900/50",
                  "border border-violet-500/20",
                  "shadow-inner shadow-violet-500/10"
                )}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
});

FloatingNav.displayName = "FloatingNav";
