import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initTechAnimation = (
  titleRef: HTMLElement | null,
  cardsRef: Element[]
) => {
  if (!titleRef || !cardsRef.length) return;

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    paused: true,
  });

  tl.fromTo(
    titleRef,
    {
      opacity: 0,
      y: -100,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 2,
      ease: "power4.out",
    }
  ).fromTo(
    cardsRef,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      stagger: {
        amount: 1,
        grid: [2, 6],
        from: "random",
      },
    },
    "-=1.5"
  );

  tl.play();

  return tl;
};

export const initScrollAnimation = (
  element: HTMLElement | null,
  type: "title" | "subtitle"
) => {
  if (!element) return;

  if (type === "title") {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top center+=200",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
  } else {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top center+=200",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
  }
};
