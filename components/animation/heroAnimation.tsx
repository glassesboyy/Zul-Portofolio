import gsap from "gsap";

export const initHeroAnimation = (
  avatarRef: HTMLDivElement | null,
  titleCharsRef: HTMLSpanElement[],
  contentRef: HTMLDivElement | null,
  ctaRef: HTMLDivElement | null
) => {
  if (!avatarRef || !titleCharsRef.length) return;

  const tl = gsap.timeline();

  tl.fromTo(
    avatarRef,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
    }
  );

  gsap.set(titleCharsRef, {
    opacity: 0,
    y: 20,
  });

  titleCharsRef.forEach((char, index) => {
    tl.to(
      char,
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        delay: index * 0.01,
        ease: "power2.out",
      },
      "-=0.25"
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
