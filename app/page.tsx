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
      <div className="preloader fixed inset-0 z-50 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="preloader-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="preload-text overflow-visible mb-12">
            {["H", "i", " ", "T", "h", "e", "r", "e", "!"].map(
              (letter, index) => (
                <span
                  key={index}
                  className={`preload-letter text-7xl font-extrabold inline-block ${
                    letter === " " ? "mx-3" : "mx-[2px]"
                  } ${
                    index > 2
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(6,182,212,0.6)]"
                      : "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(255,255,255,0.3)]"
                  }`}
                >
                  {letter}
                </span>
              )
            )}
          </div>
          <div className="loading-wrapper w-72 mx-auto">
            <div className="loading-bar-wrapper p-[2px] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700">
              <div className="loading-bar h-1 bg-white rounded-full origin-left"></div>
            </div>
            <div className="loading-percent text-sm mt-3 font-medium bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              0
            </div>
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
