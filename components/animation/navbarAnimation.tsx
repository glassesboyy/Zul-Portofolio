import gsap from "gsap";

export const initNavbarAnimation = (
  headerRef: HTMLElement | null,
  menuItemsRef: (HTMLDivElement | null)[]
) => {
  const tl = gsap.timeline();

  // Navbar animation
  tl.fromTo(
    headerRef,
    {
      y: -100,
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    {
      y: 0,
      opacity: 1,
      backdropFilter: "blur(10px)",
      duration: 1.2,
      ease: "power3.out",
    }
  );

  // Menu items animation
  menuItemsRef.forEach((item, index) => {
    tl.fromTo(
      item,
      {
        y: -30,
        opacity: 0,
        scale: 0.8,
        rotation: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      `-=${index ? 0.4 : 0}`
    );
  });

  return tl;
};
