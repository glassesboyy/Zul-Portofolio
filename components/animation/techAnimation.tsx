import gsap from "gsap";

export const initTechAnimation = (
  titleRef: HTMLElement | null,
  cardsRef: Element[]
) => {
  if (!titleRef || !cardsRef.length) return;

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    paused: true,
  });

  // Title animation
  tl.fromTo(
    titleRef,
    {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 2,
      ease: "power4.out",
    }
  )
    // Cards animation
    .fromTo(
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

  // Play animation immediately
  tl.play();

  return tl;
};
