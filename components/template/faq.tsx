"use client";

import { useEffect, useRef, useState } from "react";
import { initFaqAnimation } from "../animation/faqAnimation";
import { useInView } from "framer-motion";

const faqs = [
  {
    question: "What is your development process?",
    answer:
      "My development process follows an agile methodology, starting with requirement gathering, followed by design, development, testing, and deployment. I ensure continuous communication and iterations based on feedback.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "I break down projects into manageable milestones with clear deadlines. Regular updates and transparent communication help keep projects on track and address any potential delays proactively.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer post-development support and maintenance services to ensure your application runs smoothly. This includes bug fixes, updates, and feature enhancements as needed.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various other frontend and backend technologies. I stay updated with the latest industry trends.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "I implement comprehensive testing strategies, including unit testing, integration testing, and end-to-end testing. Code reviews and best practices are integral to my development process.",
  },
  {
    question: "What is your communication style?",
    answer:
      "I maintain clear and consistent communication through regular updates, scheduled meetings, and responsive channels. I believe in transparency and keeping all stakeholders informed throughout the project lifecycle.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, I specialize in creating tailored solutions that meet specific business needs. Each project is approached uniquely, considering your requirements, goals, and target audience.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing models including project-based, hourly rates, and retainer options. Each quote is customized based on project scope, complexity, and timeline requirements.",
  },
];

export const Faq = () => {
  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && faqItemsRef.current) {
      const faqItems = faqItemsRef.current.querySelectorAll(".faq-item");
      initFaqAnimation(titleRef.current, Array.from(faqItems));
    }
  }, [isClient]);

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef}>
          <div className="space-y-2 text-center mb-12">
            <div className="inline-flex items-center gap-1 cursor-pointer group">
              <span className="text-sm font-medium text-violet-400 uppercase tracking-widest">
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
            <h2 className="text-3xl md:text-4xl font-bold [text-wrap:balance]">
              <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                Frequently Asked Questions
              </span>
            </h2>
            <div ref={subtitleRef}>
              {isSubtitleInView && (
                <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-4">
                  Get answers to common questions about my services, process,
                  and expertise
                </p>
              )}
            </div>
          </div>
        </div>

        <div ref={faqItemsRef} className="grid md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item group rounded-lg border border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40 transition-all duration-300"
            >
              <button
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-violet-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-base text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
