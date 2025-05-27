"use client";

import { TestimonialsAnimation } from "../animation/testimonialsAnimation";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "TechVision transformed our business operations with their innovative ERP solution. The system's efficiency has improved our productivity by 40% within just three months.",
    name: "Robert Mitchell",
    title: "CTO, Global Manufacturing Corp",
  },
  {
    quote:
      "Their cloud migration expertise helped us seamlessly transition our legacy systems. The dedicated support team and robust security measures exceeded our expectations.",
    name: "Emily Chang",
    title: "IT Director, FinanceHub International",
  },
  {
    quote:
      "The AI-powered analytics dashboard TechVision developed gives us real-time insights that have revolutionized our decision-making process. A game-changer for our retail chain.",
    name: "Michael Davidson",
    title: "CEO, RetailTech Solutions",
  },
  {
    quote:
      "Outstanding delivery on our healthcare management system. Their understanding of compliance requirements and user experience design has set new standards in medical software.",
    name: "Dr. Sarah Williams",
    title: "Director, Metropolitan Healthcare",
  },
  {
    quote:
      "TechVision's mobile banking solution has helped us acquire 100,000+ new users in just six months. Their technical expertise and security implementations are world-class.",
    name: "James Rodriguez",
    title: "Digital Banking Head, NextGen Bank",
  },
  {
    quote:
      "The custom CRM system perfectly aligned with our workflow. Their agile approach and attention to our specific needs made the development process smooth and effective.",
    name: "Lisa Chen",
    title: "Operations Manager, Sales Force Pro",
  },
  {
    quote:
      "Their blockchain supply chain solution has brought unprecedented transparency to our operations. We've reduced verification time by 75% and improved customer trust.",
    name: "David Kumar",
    title: "Supply Chain Director, Global Logistics",
  },
  {
    quote:
      "TechVision's cybersecurity implementation has fortified our infrastructure. Their proactive approach and continuous monitoring have prevented numerous potential threats.",
    name: "Jennifer Smith",
    title: "Security Officer, SecureNet Solutions",
  },
  {
    quote:
      "The e-commerce platform they built handles our peak season traffic effortlessly. We've seen a 200% increase in online sales since implementation.",
    name: "Andrew Wilson",
    title: "E-commerce Director, Retail Giant",
  },
  {
    quote:
      "Their IoT solution for our smart factory has reduced downtime by 60%. The real-time monitoring and predictive maintenance features are exceptional.",
    name: "Tom Anderson",
    title: "Plant Manager, Industrial Innovations",
  },
];

export const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden h-fit bg-gradient-to-b from-violet-700 to-black">
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="absolute h-full w-full -top-16 md:-top-44 lg:-top-48">
          <div className="absolute h-full w-full bg-black rounded-b-[50%] transform scale-x-[2.3] md:scale-x-[1.9] lg:scale-x-[1.7]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-5 lg:px-6 py-12 md:py-20 lg:py-20 gap-6 md:gap-7 lg:gap-8">
        <div className="w-full md:w-1/3 space-y-4 md:space-y-5 lg:space-y-6 flex-shrink-0">
          <TestimonialsAnimation type="title">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start lg:justify-start gap-1 cursor-pointer group ">
                <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest ">
                  Testimonials
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
              <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left lg:text-left [text-wrap:balance]">
                <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
                  Client Success Stories
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/70 text-center md:text-left lg:text-left leading-relaxed max-w-[90%] [text-wrap:balance]">
              Empowering businesses through innovative technology solutions and
              delivering transformative digital experiences across industries.
            </p>
          </TestimonialsAnimation>
        </div>

        <TestimonialsAnimation type="cards">
          <div className="relative w-full md:w-2/3 h-[43rem] md:h-[47rem] lg:h-[52rem] flex flex-col items-center justify-center overflow-hidden rounded-3xl flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-black to-black/90" />
            <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>

            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials.slice().reverse()}
                direction="left"
                speed="normal"
              />
            </div>

            <div className="w-full h-1/3">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </TestimonialsAnimation>
      </div>
    </div>
  );
};
