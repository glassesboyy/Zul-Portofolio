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
    question: "What industries does TechVision serve?",
    answer:
      "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and education. Our solutions are customized to meet specific industry requirements while maintaining compliance with relevant regulations and standards.",
  },
  {
    id: "faq-2",
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement industry-leading security measures including end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other relevant standards. Our team follows strict security protocols and best practices in all development processes.",
  },
  {
    id: "faq-3",
    question: "What is your typical project timeline and process?",
    answer:
      "Project timelines vary based on scope and complexity. We follow an agile methodology with clear milestones and regular client communications. Typically, medium-sized projects take 3-6 months from discovery to deployment, with ongoing support and maintenance afterward.",
  },
  {
    id: "faq-4",
    question: "Do you provide post-deployment support and maintenance?",
    answer:
      "Yes, we offer comprehensive support packages including 24/7 technical support, regular maintenance, security updates, and performance monitoring. Our dedicated support team ensures your systems run smoothly and efficiently.",
  },
  {
    id: "faq-5",
    question: "How do you handle scalability and future growth?",
    answer:
      "Our solutions are built with scalability in mind, using cloud-native architectures and microservices. We design systems that can easily scale with your business growth, ensuring performance and reliability as user demands increase.",
  },
  {
    id: "faq-6",
    question: "What sets TechVision apart from other IT companies?",
    answer:
      "Our combination of technical expertise, industry experience, and client-focused approach sets us apart. We prioritize innovation, quality, and long-term partnerships, delivering solutions that drive real business value and digital transformation.",
  },
  {
    id: "faq-7",
    question: "Can you integrate with existing systems and technologies?",
    answer:
      "Yes, we specialize in seamless integration with existing infrastructure and legacy systems. Our team has extensive experience in creating custom APIs and middleware solutions to ensure smooth data flow and system interoperability.",
  },
  {
    id: "faq-8",
    question: "What are your payment terms and pricing models?",
    answer:
      "We offer flexible pricing models including project-based, time and materials, and retainer options. Our transparent pricing structure ensures no hidden costs, with payment terms tailored to project scope and client requirements.",
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
                  Learn more about our services, processes, and how we can help
                  transform your business through technology
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
