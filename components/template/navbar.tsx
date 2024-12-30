"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useRef } from "react";
import { initNavbarAnimation } from "../animation/navbarAnimation";
import { useAnimationStore } from "@/store/animationStore";

export function Navbar() {
  const headerRef = useRef(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { preloadComplete } = useAnimationStore();

  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (preloadComplete) {
      initNavbarAnimation(headerRef.current, menuItemsRef.current);
    }
  }, [preloadComplete]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full justify-items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-opacity duration-300 ${
        !preloadComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="container flex h-14 items-center">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, i) => (
                <div
                  key={item}
                  ref={(el) => {
                    menuItemsRef.current[i] = el;
                  }}
                  className="relative cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  <NavigationMenuItem>
                    <NavigationMenuLink>{item}</NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
