"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modalStore";
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
      <DialogContent className="max-w-sm md:max-w-3xl lg:max-w-4xl max-h-[90vh] md:max-h-[90vh] lg:max-h-[90vh] overflow-y-auto bg-black/90 border border-violet-500/20 px-8 pt-8 pb-8">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl shadow-sm p-4 shadow-cyan-400 font-normal cursor-pointer border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300">
              {service.icon}
            </div>
            <DialogTitle className="text-4xl md:text-5xl lg:text-5xl font-extrabold">
              {service.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <p className="text-base md:text-lg lg:text-lg text-white/70">
            {service.description}
          </p>

          {/* Keywords */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Key Features</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              {service.keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-sm flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-white shadow-sm shadow-cyan-400 border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300">
                    {index + 1}
                  </span>
                  <span className="text-white/70">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <Badge key={index} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          {service.additionalInfo && (
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Additional Information
              </h3>
              <p className="text-white/70">{service.additionalInfo}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
