"use client";

import { useEffect, useRef } from "react";
import { useAnimationStore } from "@/store/animationStore";
import { FloatingNav } from "../ui/floating-navbar";
import { initNavbarAnimation } from "../animation/navbarAnimation";

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
        { name: "Tech", link: "tech" },
        { name: "Projects", link: "projects" },
        { name: "Skills", link: "skills" },
        { name: "Contact", link: "contact" },
      ]}
    />
  );
}
