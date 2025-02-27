"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { ContactAnimation } from "../animation/contactAnimation";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const isFormInView = useInView(formRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <ContactAnimation type="title">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1 cursor-pointer group">
            <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
              Get in Touch
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="transition-transform duration-300 group-hover:translate-x-1 text-violet-400"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold [text-wrap:balance]">
            <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
              Let's Collaborate
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life.
            Let's create something amazing together.
          </p>
        </div>
      </ContactAnimation>

      <ContactAnimation type="form">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black border border-violet-900/50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black border border-violet-900/50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-black border border-violet-900/50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black border border-violet-900/50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-white font-medium 
                     hover:opacity-90 transition-all duration-300 transform hover:scale-[0.98]
                     focus:ring-2 focus:ring-violet-500/20"
          >
            Send Message
          </button>
        </form>
      </ContactAnimation>
    </div>
  );
};
