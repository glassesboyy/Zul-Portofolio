"use client";

import { initPreloadAnimation } from "@/components/animation/preloadAnimation";
import { Hero } from "@/components/template/hero";
import { Navbar } from "@/components/template/navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initPreloadAnimation();
  }, []);

  return (
    <>
      <div className="preloader fixed inset-0 z-50 bg-background">
        <div className="preloader-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="preload-text overflow-hidden mb-8">
            <span className="text-7xl font-extrabold inline-block">Hi</span>
            <span className="text-7xl font-extrabold inline-block ml-3 text-cyan-500">
              There!
            </span>
          </div>
          <div className="loading-wrapper w-64 mx-auto">
            <div className="loading-bar h-1 bg-cyan-700 origin-left"></div>
            <div className="loading-percent text-sm mt-2">0</div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
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
