import { useAnimationStore } from "@/store/animationStore";
import gsap from "gsap";

export const initPreloadAnimation = () => {
  const tl = gsap.timeline();

  tl.set("body", { overflow: "hidden" })
    .set(".preloader", {
      background: "black",
    })
    .set(".letter", {
      opacity: 0,
      y: 100,
      scale: 0.5,
      color: "#E6D5FF",
      textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
    })
    .to(".letter", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    })
    .to(".letter", {
      y: -100,
      opacity: 0,
      scale: 1.2,
      duration: 0.6,
      stagger: 0.05,
      delay: 0.5,
      ease: "power2.in",
    })
    .to(".preloader", {
      opacity: 0,
      duration: 0.5,
    })
    .set("body", { overflow: "auto" })
    .set(".preloader", { display: "none" })
    .call(() => {
      useAnimationStore.getState().setPreloadComplete(true);
    });

  return tl;
};
