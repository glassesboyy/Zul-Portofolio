import { create } from "zustand";

interface AnimationStore {
  preloadComplete: boolean;
  setPreloadComplete: (complete: boolean) => void;
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  preloadComplete: false,
  setPreloadComplete: (complete) => set({ preloadComplete: complete }),
}));
