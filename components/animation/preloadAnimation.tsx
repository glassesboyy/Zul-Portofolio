import gsap from "gsap";
import { useAnimationStore } from "@/store/animationStore";

export const initPreloadAnimation = () => {
  const tl = gsap.timeline();

  // Initial state
  tl.set("body", { overflow: "hidden" })
    .set(".preload-letter", {
      opacity: 0,
      y: 100,
      rotateY: 45,
      textShadow: "0 0 0 rgba(255,255,255,0)",
    })
    .set(".loading-bar-wrapper", { opacity: 0 })
    .set(".loading-bar", { scaleX: 0 })
    .set(".loading-percent", { opacity: 0 });

  // Animation sequence
  tl.to(".preload-letter", {
    opacity: 1,
    y: 0,
    rotateY: 0,
    duration: 1,
    stagger: 0.08,
    ease: "back.out(1.7)",
  })
    // Add glow effect to letters
    .to(
      ".preload-letter",
      {
        textShadow: "0 0 40px rgba(255,255,255,0.2)",
        duration: 1,
        stagger: 0.08,
      },
      "<"
    )
    .to(".loading-bar-wrapper", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".loading-percent", {
      opacity: 1,
      duration: 0.4,
    })
    .to(".loading-percent", {
      innerText: "100",
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.inOut",
    })
    .to(
      ".loading-bar",
      {
        scaleX: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      "<"
    )
    .to(
      ".preloader-content",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "+=0.2"
    )
    .to(
      ".preloader",
      {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1.2,
        ease: "power4.inOut",
      },
      "-=0.3"
    )
    .set("body", { overflow: "auto" })
    .set(".preloader", { display: "none" })
    .call(() => {
      useAnimationStore.getState().setPreloadComplete(true);
    });

  return tl;
};
