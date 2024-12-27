"use client";

import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  navAnimation,
  navItemAnimation,
  staggerContainer,
} from "@/lib/animations";

export function Navbar() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={navAnimation}
      className="sticky top-0 z-50 w-full justify-items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        <NavigationMenu className="mx-auto">
          <motion.div variants={staggerContainer}>
            <NavigationMenuList>
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    variants={navItemAnimation}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavigationMenuItem>
                      <NavigationMenuLink className="transisition duration-300 cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </motion.div>
                )
              )}
            </NavigationMenuList>
          </motion.div>
        </NavigationMenu>
      </div>
    </motion.header>
  );
}
