import gsap from "gsap";

export const initAboutAnimation = (container: HTMLElement) => {
  const tl = gsap.timeline();

  // Set initial state
  gsap.set(".profile-image-container", {
    visibility: "visible",
    opacity: 0,
    scale: 0.8,
    y: 30,
  });

  // Initial entrance animation
  tl.from(container, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
  })
    .to(
      ".profile-image-container",
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      0 // Start at the same time as container animation
    )
    .from(
      ".about-title",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.6"
    );

  // Add floating animation
  gsap.to(".profile-image-container", {
    y: -20,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1, // Start after initial animation
  });

  return tl;
};
