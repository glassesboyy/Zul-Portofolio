"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useModalStore } from "@/store/modalStore";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const Modal = ({ isOpen, onClose, imageUrl, title }: ModalProps) => {
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  useEffect(() => {
    setModalOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      setModalOpen(false);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, setModalOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-4xl w-full bg-black/90 rounded-xl pb-2 pt-16 border border-violet-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 items-center justify-center rounded-xl text-white shadow-sm shadow-cyan-400 border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-white text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
