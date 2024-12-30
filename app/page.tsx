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
      <div className="preloader fixed inset-0 z-50 flex">
        <div className="preloader-top absolute top-0 left-0 w-full h-1/2 bg-black"></div>
        <div className="preloader-bottom absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>
        <div className="preloader-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
          <div className="preload-text relative mb-8 overflow-hidden">
            <h2 className="text-2xl md:text-4xl mb-5 font-bold bg-gradient-to-r from-violet-700  to-cyan-300 bg-clip-text text-transparent">
              Ready for Absolute Cinema?
            </h2>
          </div>
          <div className="loading-wrapper fixed bottom-0 left-0 w-full">
            <div className="loading-bar-wrapper h-[2px] w-full bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20">
              <div className="loading-bar h-full w-full bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]"></div>
            </div>
            <div className="loading-percent mt-4 text-sm font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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
