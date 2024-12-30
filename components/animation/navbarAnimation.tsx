import gsap from "gsap";

export const initNavbarAnimation = (navbarRef: HTMLElement | null) => {
  const tl = gsap.timeline();

  // Set initial state
  gsap.set(navbarRef, {
    y: -50,
    opacity: 0,
    scale: 0.9,
  });

  // Navbar reveal animation
  tl.to(navbarRef, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.2,
  });

  return tl;
};
