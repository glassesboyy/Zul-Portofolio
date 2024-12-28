"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Navbar() {
  const headerRef = useRef(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Navbar animation
    tl.fromTo(
      headerRef.current,
      {
        y: -100,
        opacity: 0,
        backdropFilter: "blur(0px)",
      },
      {
        y: 0,
        opacity: 1,
        backdropFilter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Menu items animation
    menuItemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        {
          y: -30,
          opacity: 0,
          scale: 0.8,
          rotation: -15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        `-=${index ? 0.4 : 0}`
      );
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full justify-items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
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
                  className="relative"
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
