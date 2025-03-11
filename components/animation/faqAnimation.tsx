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

export const animateFaqOpen = (contentElement: HTMLElement) => {
  const content = contentElement;
  const answer = content.querySelector("p");

  // Reset semua properti terlebih dahulu
  gsap.set(content, {
    height: 0,
    display: "block",
    overflow: "hidden",
    opacity: 1,
    paddingTop: 0,
    paddingBottom: "1.25rem",
  });

  gsap.set(answer, {
    y: 20,
    opacity: 0,
    display: "block",
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.to(content, {
    height: "auto",
    duration: 0.5,
  }).to(
    answer,
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.3"
  );

  return tl;
};

export const animateFaqClose = (contentElement: HTMLElement) => {
  const content = contentElement;
  const answer = content.querySelector("p");
  const height = content.offsetHeight;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
    },
    onComplete: () => {
      gsap.set(content, {
        display: "none",
        clearProps: "padding,height,overflow",
      });
    },
  });

  tl.set(content, {
    height: height,
  })
    .to(answer, {
      y: 10,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })
    .to(
      content,
      {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.3,
        ease: "power3.inOut",
      },
      "-=0.1"
    );

  return tl;
};
