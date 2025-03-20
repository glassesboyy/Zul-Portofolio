"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  initFaqAnimation,
  animateFaqOpen,
  animateFaqClose,
} from "../animation/faqAnimation";

const faqs = [
  {
    id: "faq-1",
    question: "What is your development process?",
    answer:
      "My development process follows an agile methodology, starting with requirement gathering, followed by design, development, testing, and deployment. I ensure continuous communication and iterations based on feedback.",
  },
  {
    id: "faq-2",
    question: "How do you handle project timelines?",
    answer:
      "I break down projects into manageable milestones with clear deadlines. Regular updates and transparent communication help keep projects on track and address any potential delays proactively.",
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer post-development support and maintenance services to ensure your application runs smoothly. This includes bug fixes, updates, and feature enhancements as needed.",
  },
  {
    id: "faq-4",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various other frontend and backend technologies. I stay updated with the latest industry trends.",
  },
  {
    id: "faq-5",
    question: "How do you ensure project quality?",
    answer:
      "I implement comprehensive testing strategies, including unit testing, integration testing, and end-to-end testing. Code reviews and best practices are integral to my development process.",
  },
  {
    id: "faq-6",
    question: "What is your communication style?",
    answer:
      "I maintain clear and consistent communication through regular updates, scheduled meetings, and responsive channels. I believe in transparency and keeping all stakeholders informed throughout the project lifecycle.",
  },
  {
    id: "faq-7",
    question: "Do you offer custom solutions?",
    answer:
      "Yes, I specialize in creating tailored solutions that meet specific business needs. Each project is approached uniquely, considering your requirements, goals, and target audience.",
  },
  {
    id: "faq-8",
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing models including project-based, hourly rates, and retainer options. Each quote is customized based on project scope, complexity, and timeline requirements.",
  },
];

const leftColumnFaqs = faqs.slice(0, 4);
const rightColumnFaqs = faqs.slice(4, 8);

export const Faq = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && faqContainerRef.current) {
      const faqItems = faqContainerRef.current.querySelectorAll(".faq-item");
      initFaqAnimation(titleRef.current, Array.from(faqItems));
    }
  }, [isClient]);

  const handleClick = (id: string) => {
    const contentElement = document.querySelector(
      `#content-${id}`
    ) as HTMLElement;
    if (!contentElement) return;

    if (activeId === id) {
      animateFaqClose(contentElement);
      setActiveId(null);
    } else {
      if (activeId) {
        const activeElement = document.querySelector(
          `#content-${activeId}`
        ) as HTMLElement;
        if (activeElement) {
          animateFaqClose(activeElement);
        }
      }

      animateFaqOpen(contentElement);
      setActiveId(id);
    }
  };

  const renderFaqItem = (faq: (typeof faqs)[0]) => (
    <div
      key={faq.id}
      className="faq-item group rounded-2xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-500"
    >
      <button
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6 transition-all duration-300"
        onClick={() => handleClick(faq.id)}
      >
        <span className="text-base md:text-xl lg:text-lg font-medium text-white">
          {faq.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`h-6 w-6 text-violet-400 transition-all duration-500 ${
              activeId === faq.id ? "rotate-[360deg]" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeId === faq.id ? "M19 9l-7 7-7-7" : "M12 4v16m8-8H4"}
            />
          </svg>
        </span>
      </button>
      <div
        id={`content-${faq.id}`}
        className="px-4 pb-5 sm:px-6 sm:pb-6 hidden overflow-hidden"
      >
        <p className="text-xs md:text-base lg:text-base text-white/70">
          {faq.answer}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef}>
          <div className="space-y-2 text-center mb-12">
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
                FAQ
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
                Frequently Asked Questions
              </span>
            </h2>
            <div ref={subtitleRef}>
              {isSubtitleInView && (
                <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto mt-4">
                  Get answers to common questions about my services, process,
                  and expertise
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          ref={faqContainerRef}
          className="flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="flex-1 space-y-4">
            {leftColumnFaqs.map(renderFaqItem)}
          </div>

          <div className="flex-1 space-y-4">
            {rightColumnFaqs.map(renderFaqItem)}
          </div>
        </div>
      </div>
    </div>
  );
};
