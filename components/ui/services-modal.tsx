"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modalStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    keywords: string[];
    process: string[];
    technologies: string[];
    additionalInfo?: string;
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  useEffect(() => {
    setModalOpen(isOpen);
    return () => setModalOpen(false);
  }, [isOpen, setModalOpen]);

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm md:max-w-3xl lg:max-w-4xl max-h-[90vh] md:max-h-[90vh] lg:max-h-[90vh] overflow-y-auto scrollbar-hide bg-black/90 border border-violet-500/20 px-8 pt-8 pb-8">
        <AnimatePresence>
          {isOpen && (
            <>
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-16 h-16 rounded-xl shadow-sm p-4 shadow-cyan-400 font-normal cursor-pointer border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  <DialogTitle className="text-4xl md:text-5xl lg:text-5xl font-extrabold">
                    {service.title}
                  </DialogTitle>
                </motion.div>
              </DialogHeader>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-base md:text-lg lg:text-lg text-white/70"
                >
                  {service.description}
                </motion.p>

                {/* Keywords */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-white">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-white/70 space-y-1">
                    {service.keywords.map((keyword, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {keyword}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-white">
                    Development Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-sm flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-white shadow-sm shadow-cyan-400 border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300">
                          {index + 1}
                        </span>
                        <span className="text-white/70">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-white">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      >
                        <Badge variant="default">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Additional Info */}
                {service.additionalInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-bold text-white">
                      Additional Information
                    </h3>
                    <p className="text-white/70">{service.additionalInfo}</p>
                  </motion.div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
