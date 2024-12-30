"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState, forwardRef } from "react";

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
        "fixed top-10 inset-x-0 max-w-fit mx-auto z-[100] group",
        className
      )}
    >
      <div
        className="flex items-center gap-6 px-8 py-3 rounded-full 
        border border-white/10 
        bg-black/50 backdrop-blur-xl
        transition-all duration-300
        group-hover:shadow-[0_5px_20px_0_rgba(31,38,135,0.37)]
        relative
        before:absolute before:inset-0 before:-z-10 before:rounded-full
        before:opacity-0 group-hover:before:opacity-100
        before:bg-gradient-to-r before:from-violet-500/20 before:to-cyan-500/20
        before:blur-xl before:transition-all before:duration-1000"
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item.name)}
            className={cn(
              "text-sm transition-all relative group/item",
              activeSection === item.name.toLowerCase()
                ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-violet-500 after:to-cyan-500"
                : "",
              "bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text hover:text-transparent",
              activeSection === item.name.toLowerCase()
                ? "text-transparent"
                : "text-zinc-100"
            )}
          >
            <span className="flex items-center gap-1">
              {item.icon}
              <span>{item.name}</span>
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
});

FloatingNav.displayName = "FloatingNav";
