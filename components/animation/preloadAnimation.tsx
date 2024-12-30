import gsap from "gsap";
import { useAnimationStore } from "@/store/animationStore";

export const initPreloadAnimation = () => {
  const tl = gsap.timeline();

  // Initial state
  tl.set("body", { overflow: "hidden" })
    .set(".preload-text span", {
      y: 100,
      opacity: 0,
      rotateX: -90,
    })
    .set(".loading-bar", { scaleX: 0 })
    .set(".loading-percent", { opacity: 0 });

  // Animation sequence
  tl.to(".preload-text span", {
    y: 0,
    opacity: 1,
    rotateX: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
  })
    .to(".loading-percent", {
      opacity: 1,
      duration: 0.4,
    })
    .to(".loading-percent", {
      innerText: "100",
      duration: 2.5,
      snap: { innerText: 1 },
      ease: "power2.inOut",
    })
    .to(
      ".loading-bar",
      {
        scaleX: 1,
        duration: 2.5,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(".preloader-content", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    })
    .to(".preloader", {
      duration: 1,
      yPercent: -100,
      ease: "power2.inOut",
    })
    .set("body", { overflow: "auto" })
    .set(".preloader", { display: "none" })
    .call(() => {
      useAnimationStore.getState().setPreloadComplete(true);
    });

  return tl;
};
