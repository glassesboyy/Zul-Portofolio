"use client";

import { cn } from "@/lib/utils";

export const Footer = () => {
  const navItems = [
    "Home",
    "About",
    "Tech",
    "Certificate",
    "Projects",
    "Testimonials",
    "Services",
    "FAQ",
    "Contact",
  ];

  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-black to-violet-950/20">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Name and Year */}
          <div className="text-center space-y-2">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Teguh Surya Zulfikar
            </p>
            <p className="text-white/70 text-sm">© 2025 All rights reserved</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-2xl px-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={cn(
                  "text-sm text-white/60 hover:text-violet-400",
                  "transition-colors duration-300"
                )}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Thank You Message */}
          <div className="pt-8 border-t border-violet-900/30 text-center max-w-md">
            <p className="text-white/50 text-sm leading-relaxed">
              Thank you for visiting my portfolio. Feel free to reach out if
              you'd like to collaborate on something amazing together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
