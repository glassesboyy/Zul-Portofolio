import gsap from "gsap";

export const initNavbarAnimation = (navbarRef: HTMLElement | null) => {
  const tl = gsap.timeline();

  const isMobile = window.innerWidth < 768;

  gsap.set(navbarRef, {
    y: isMobile ? -20 : -50,
    opacity: 0,
    scale: 0.9,
  });

  tl.to(navbarRef, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: isMobile ? 0.6 : 0.8,
    ease: "back.out(1.7)",
    delay: isMobile ? 0.1 : 0.2,
  });

  return tl;
};
