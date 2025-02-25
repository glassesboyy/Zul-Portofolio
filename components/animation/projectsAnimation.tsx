import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectsAnimation = (
  titleContainer: HTMLElement | null,
  subtitleContainer: HTMLElement | null,
  projectsContainer: HTMLElement | null
) => {
  if (!titleContainer || !projectsContainer) return;

  // Title section animation
  gsap.fromTo(
    titleContainer,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: titleContainer,
        start: "top center+=200",
        toggleActions: "play reverse restart reverse",
      },
    }
  );

  // Subtitle animation
  if (subtitleContainer) {
    gsap.fromTo(
      subtitleContainer,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleContainer,
          start: "top center+=200",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
  }

  // Projects grid animation
  const projectCards = projectsContainer.children;
  gsap.fromTo(
    projectCards,
    {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        grid: "auto",
        from: "start",
      },
      scrollTrigger: {
        trigger: projectsContainer,
        start: "top center+=100",
        toggleActions: "play reverse restart reverse",
      },
    }
  );
};
