"use client";

import { initPreloadAnimation } from "@/components/animation/preloadAnimation";
import { About } from "@/components/template/about";
import { Hero } from "@/components/template/hero";
import { Navbar } from "@/components/template/navbar";
import { Philo } from "@/components/template/philo";
import { Tech } from "@/components/template/tech";
import { Separator } from "@/components/ui/separator";
import { SeparatorRoundDown } from "@/components/ui/separator-round-down";
import { SeparatorRoundUp } from "@/components/ui/separator-round-up";
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
        <Separator />
        <Philo />
        <SeparatorRoundUp />
        <section id="about" className="h-fit">
          <About />
        </section>
        <Separator />
        <section id="tech" className="h-fit my-20">
          <Tech />
        </section>
        <SeparatorRoundDown />
        <section id="projects" className="min-h-screen">
          {/* Projects content */}
        </section>
        <section id="skills" className="min-h-screen">
          {/* Skills content */}
        </section>
        {/* Separator Round Kebawah */}
        <section id="contact" className="min-h-screen">
          {/* Contact content */}
        </section>
      </div>
    </>
  );
}
