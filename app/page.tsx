"use client";

import { initPreloadAnimation } from "@/components/animation/preloadAnimation";
import { About } from "@/components/template/about";
import { Certificate } from "@/components/template/certificate";
import { Contact } from "@/components/template/contact";
import { Faq } from "@/components/template/faq";
import { Footer } from "@/components/template/footer";
import { Hero } from "@/components/template/hero";
import { Navbar } from "@/components/template/navbar";
import { Projects } from "@/components/template/projects";
import { Services } from "@/components/template/services";
import { Tech } from "@/components/template/tech";
import { Testimonials } from "@/components/template/testimonials";
import { Separator } from "@/components/ui/separator";
import { SeparatorRoundUp } from "@/components/ui/separator-round-up";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initPreloadAnimation();
  }, []);

  return (
    <div>
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
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <SeparatorRoundUp />
        <section id="about" className="h-fit">
          <About />
        </section>
        <Separator />
        <section id="tech" className="h-fit">
          <Tech />
        </section>
        <Separator />
        <section id="certificate" className="h-fit">
          <Certificate />
        </section>
        <Separator />
        <section id="projects" className="h-fit">
          <Projects />
        </section>
        <Separator />
        <section id="testimonials" className="h-fit">
          <Testimonials />
        </section>
        <Separator />
        <section id="services" className="min-h-screen">
          <Services />
        </section>
        <Separator />
        <section id="faq" className="h-fit">
          <Faq />
        </section>
        <Separator />
        <section id="contact" className="h-fit">
          <Contact />
        </section>
        <section id="footer" className="h-fit">
          <Footer />
        </section>
      </div>
    </div>
  );
}
