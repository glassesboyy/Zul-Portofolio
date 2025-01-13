import gsap from "gsap";

export const initAboutAnimation = (container: HTMLElement) => {
  const tl = gsap.timeline();

  // Set initial states
  gsap.set(".profile-image-container", {
    visibility: "visible",
    opacity: 0,
    scale: 0.8,
    y: 30,
  });

  // Enhanced animation sequence
  tl.from(container, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  })
    .to(
      ".profile-image-container",
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      0.3
    )
    .from(
      ".about-title",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.8"
    );

  // Enhanced floating animation
  gsap.to(".profile-image-container", {
    y: -15,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1.5,
  });

  return tl;
};
