"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  animateFaqClose,
  animateFaqOpen,
  initFaqAnimation,
} from "../animation/faqAnimation";

const faqs = [
  {
    id: "faq-1",
    question: "What front-end technologies do you work with?",
    answer:
      "I primarily work with React.js, Next.js, TypeScript, and TailwindCSS. I'm also experienced with modern JavaScript (ES6+), HTML5, CSS3, and various front-end libraries and frameworks. I stay current with the latest front-end development trends and best practices.",
  },
  {
    id: "faq-2",
    question: "Can you make my website responsive and mobile-friendly?",
    answer:
      "Absolutely! I implement responsive design principles in all my projects, ensuring optimal viewing experience across all devices - from mobile phones to desktop computers. I use modern CSS techniques like Flexbox, Grid, and mobile-first approach.",
  },
  {
    id: "faq-3",
    question: "How do you handle website performance optimization?",
    answer:
      "I focus on core web vitals and implement various optimization techniques including code splitting, lazy loading, image optimization, caching strategies, and efficient asset delivery. I also use performance monitoring tools to ensure fast loading times and smooth user experience.",
  },
  {
    id: "faq-4",
    question: "Do you work with APIs and backend integration?",
    answer:
      "Yes, I have extensive experience integrating front-end applications with RESTful APIs and GraphQL endpoints. I can handle state management, data fetching, error handling, and implement proper security measures for API communications.",
  },
  {
    id: "faq-5",
    question: "How do you ensure cross-browser compatibility?",
    answer:
      "I test thoroughly across different browsers (Chrome, Firefox, Safari, Edge) and use modern CSS prefixing and polyfills when needed. I follow progressive enhancement principles to ensure a consistent experience for all users.",
  },
  {
    id: "faq-6",
    question: "Can you implement animations and interactive features?",
    answer:
      "Yes, I create smooth, performant animations using CSS transitions, Framer Motion, and GSAP. I ensure all interactive elements are accessible and enhance the user experience without compromising performance.",
  },
  {
    id: "faq-7",
    question: "How do you approach accessibility (a11y)?",
    answer:
      "I follow WCAG guidelines and implement proper ARIA attributes, semantic HTML, keyboard navigation, and screen reader compatibility. I believe in creating inclusive web experiences that work for all users regardless of their abilities.",
  },
  {
    id: "faq-8",
    question: "What is your development workflow like?",
    answer:
      "I use Git for version control, implement CI/CD practices, and follow component-based architecture. I write clean, documented code and use tools like ESLint and Prettier for code quality. I'm comfortable with agile methodologies and can adapt to team workflows.",
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
      className="faq-item group rounded-xl border border-violet-500/20 bg-black hover:bg-violet-500/10 hover:border-violet-500/40 transition-all duration-500"
    >
      <button
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6 transition-all duration-300"
        onClick={() => handleClick(faq.id)}
      >
        <span className="text-basefont-medium text-white">{faq.question}</span>
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
        <p className="text-xs  text-white/70">{faq.answer}</p>
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
