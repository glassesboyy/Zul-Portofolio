import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));
