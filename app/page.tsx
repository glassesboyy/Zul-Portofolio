"use client";

import { initPreloadAnimation } from "@/components/animation/preloadAnimation";
import { Hero } from "@/components/template/hero";
import { Navbar } from "@/components/template/navbar";
import { Philo } from "@/components/template/philo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initPreloadAnimation();
  }, []);

  return (
    <>
      <div className="preloader fixed inset-0 z-50 bg-black flex items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 200 200">
          <path
            className="z-letter"
            d="M30 40
               L170 40
               L170 60
               L70 140
               L170 140
               L170 160
               L30 160
               L30 140
               L130 60
               L30 60
               Z"
            stroke="white"
            strokeWidth="5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <Philo />
        <section id="about" className="min-h-screen">
          {/* About content */}
        </section>
        <section id="projects" className="min-h-screen">
          {/* Projects content */}
        </section>
        <section id="skills" className="min-h-screen">
          {/* Skills content */}
        </section>
        <section id="contact" className="min-h-screen">
          {/* Contact content */}
        </section>
      </div>
    </>
  );
}
