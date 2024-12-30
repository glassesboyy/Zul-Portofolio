import gsap from "gsap";
import { useAnimationStore } from "@/store/animationStore";

export const initPreloadAnimation = () => {
  const tl = gsap.timeline();

  tl.set("body", { overflow: "hidden" })
    .set(".preload-text", {
      opacity: 0,
      y: 30,
    })
    .set(".loading-bar", { scaleX: 0, transformOrigin: "left" })
    .set(".loading-percent", { opacity: 0 })
    .set(".preloader-top", { yPercent: 0 })
    .set(".preloader-bottom", { yPercent: 0 });

  tl.to(".preload-text", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  })
    .to(".loading-percent", {
      opacity: 1,
      duration: 0.3,
    })
    .to(".loading-bar", {
      scaleX: 1,
      duration: 2,
      ease: "power1.inOut",
    })
    .to(
      ".loading-percent",
      {
        innerText: "100",
        duration: 2,
        snap: { innerText: 1 },
        ease: "power1.inOut",
      },
      "<"
    )
    .to(".preload-text", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    })
    .to(
      ".loading-wrapper",
      {
        opacity: 0,
        duration: 0.3,
      },
      "<"
    )
    .to(".preloader-top", {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    })
    .to(
      ".preloader-bottom",
      {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<"
    )
    .set("body", { overflow: "auto" })
    .set(".preloader", { display: "none" })
    .call(() => {
      useAnimationStore.getState().setPreloadComplete(true);
    });

  return tl;
};
