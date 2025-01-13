"use client";

import { useAnimationStore } from "@/store/animationStore";
import { useEffect, useRef } from "react";
import { initNavbarAnimation } from "../animation/navbarAnimation";
import { FloatingNav } from "../ui/floating-navbar";

export function Navbar() {
  const { preloadComplete } = useAnimationStore();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (preloadComplete && navbarRef.current) {
      initNavbarAnimation(navbarRef.current);
    }
  }, [preloadComplete]);

  if (!preloadComplete) {
    return null;
  }

  return (
    <FloatingNav
      ref={navbarRef}
      navItems={[
        { name: "Home", link: "home" },
        { name: "About", link: "about" },
        { name: "Tech", link: "tech" },
        { name: "Projects", link: "projects" },
        { name: "Skills", link: "skills" },
        { name: "Contact", link: "contact" },
      ]}
    />
  );
}
