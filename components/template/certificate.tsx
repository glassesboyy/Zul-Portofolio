"use client";

import { useModalStore } from "@/store/modalStore";
import { useState } from "react";
import { Modal } from "../ui/certificate-modal";
import { HeroParallax } from "../ui/hero-parallax";

const certificates = [
  {
    title: "ISO 27001 Information Security Management Certification",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "AWS Advanced Consulting Partner Certification",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "Google Cloud Premier Partner Excellence",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "Microsoft Gold Partner for Cloud Solutions",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "CMMI Level 5 Service Excellence Certification",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "Best Digital Innovation Award 2023 - Indonesia Tech Awards",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "SOC 2 Type II Security Compliance Certification",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "Top 50 Most Innovative Companies in Southeast Asia 2023",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
  {
    title: "Forbes Asia's 100 to Watch 2023",
    thumbnail: "/assets/dummy-certificate.jpg",
  },
];

export const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    thumbnail: string;
  } | null>(null);

  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleOpenModal = (certificate: typeof selectedCertificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    setModalOpen(false);
  };

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-black to-black pointer-events-none" />
      <div className="relative z-10">
        <HeroParallax
          products={certificates}
          headerTitle="Company Achievements"
          headerSubtitle="Recognition of our excellence in technology innovation and digital transformation solutions"
          headerTag="Awards & Certifications"
          onProductClick={(product) => handleOpenModal(product)}
        />
      </div>
      <Modal
        isOpen={!!selectedCertificate}
        onClose={handleCloseModal}
        imageUrl={selectedCertificate?.thumbnail || ""}
        title={selectedCertificate?.title || ""}
      />
    </div>
  );
};
