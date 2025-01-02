import { useAnimationStore } from "@/store/animationStore";
import gsap from "gsap";

export const initPreloadAnimation = () => {
  const tl = gsap.timeline();

  tl.set("body", { overflow: "hidden" })
    .set(".z-letter", {
      strokeDasharray: 900,
      strokeDashoffset: 900,
      opacity: 1,
    })
    .to(".z-letter", {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(".z-letter", {
      fill: "white",
      duration: 0.3,
      ease: "none",
    })
    .to(".z-letter", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(".preloader", {
      opacity: 0,
      duration: 0.3,
    })
    .set("body", { overflow: "auto" })
    .set(".preloader", { display: "none" })
    .call(() => {
      useAnimationStore.getState().setPreloadComplete(true);
    });

  return tl;
};
