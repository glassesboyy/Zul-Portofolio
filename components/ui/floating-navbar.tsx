"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  // Add new useEffect for body overflow control
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
        "fixed top-6 z-[100]",
        "lg:inset-x-0 lg:max-w-fit lg:mx-auto",
        "w-full",
        className
      )}
    >
      {/* Desktop Navigation (1025px and above) */}
      <div
        className={cn(
          "relative hidden lg:flex items-center gap-4 px-4 py-2 rounded-full",
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
              {activeSection === item.name.toLowerCase() && (
                <span className="absolute -bottom-2.5 -left-2 w-full h-[4px] bg-gradient-to-r from-transparent via-cyan-700 to-transparent" />
              )}
            </span>
            {activeSection === item.name.toLowerCase() && (
              <motion.div
                layoutId="pill-desktop"
                className={cn(
                  "absolute inset-0 rounded-full",
                  "bg-black/10",
                  "border border-violet-500/50",
                  "shadow-inner shadow-violet-500/50"
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

      {/* Mobile and Tablet Navigation (0-1024px) */}
      <div className="lg:hidden flex justify-end px-6">
        {" "}
        {/* Added padding and justify-end */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "p-2 rounded-full",
            "bg-black/70 border border-violet-500/20",
            "backdrop-blur-md z-[101]"
          )}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IconX className="w-6 h-6 text-violet-300" />
          ) : (
            <IconMenu2 className="w-6 h-6 text-violet-300" />
          )}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-md pt-20 px-4",
                "flex flex-col gap-2 z-[100]",
                "overflow-hidden"
              )}
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
                {navItems.map((item) => (
                  <motion.button
                    variants={itemVariants}
                    key={item.name}
                    onClick={() => {
                      handleClick(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-3 p-4 w-full rounded-lg",
                      "transition-all duration-300",
                      "text-base sm:text-lg",
                      "my-1",
                      activeSection === item.name.toLowerCase()
                        ? "bg-violet-500/20 text-violet-300"
                        : "text-zinc-400 hover:bg-violet-500/10"
                    )}
                  >
                    <span className="w-6">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

FloatingNav.displayName = "FloatingNav";
