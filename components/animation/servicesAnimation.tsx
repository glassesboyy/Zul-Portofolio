import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesAnimation = (
  titleContainer: HTMLElement | null,
  servicesContainer: HTMLElement | null
) => {
  if (!titleContainer || !servicesContainer) return;

  gsap.fromTo(
    titleContainer.children,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleContainer,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );

  const serviceCards = servicesContainer.children;
  gsap.fromTo(
    serviceCards,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      scrollTrigger: {
        trigger: servicesContainer,
        start: "top center+=150",
        toggleActions: "play none none reverse",
      },
    }
  );
};
