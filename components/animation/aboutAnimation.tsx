import gsap from "gsap";

export const initAboutAnimation = (container: HTMLElement) => {
  const tl = gsap.timeline();

  // Initial states
  gsap.set(
    [
      ".profile-image-container",
      ".title-container",
      ".description",
      ".social-links",
    ],
    {
      opacity: 0,
      y: 30,
    }
  );

  gsap.set(".profile-image-container", {
    scale: 0.8,
  });

  // Animation sequence
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
    .to(
      ".title-container",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .to(
      ".description",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .to(
      ".social-links",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Floating animation
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
