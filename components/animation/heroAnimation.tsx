import gsap from "gsap";

export const initHeroAnimation = (
  titleCharsRef: HTMLSpanElement[],
  contentRef: HTMLDivElement | null,
  ctaRef: HTMLDivElement | null
) => {
  if (!titleCharsRef.length) return;

  const tl = gsap.timeline();

  tl.set({}, {}, "+=0.2");

  titleCharsRef.forEach((char, index) => {
    tl.to(
      char,
      {
        opacity: 1,
        y: 0,
        duration: 0.15,
        delay: index * 0.0001,
        ease: "power2.out",
      },
      "-=0.1"
    );
  });

  tl.fromTo(
    [contentRef, ctaRef],
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
    },
    "-=0.2"
  );

  return tl;
};
