import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFaqAnimation = (
  titleRef: HTMLElement | null,
  faqItems: Element[]
) => {
  if (!titleRef || !faqItems.length) return;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: titleRef,
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });

  // Title animation
  tl.fromTo(
    titleRef,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    }
  )
    // Left column animation
    .fromTo(
      faqItems.slice(0, 4),
      {
        opacity: 0,
        x: -30,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
      },
      "-=0.5"
    )
    // Right column animation
    .fromTo(
      faqItems.slice(4),
      {
        opacity: 0,
        x: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
      },
      "-=0.8"
    );

  return tl;
};
