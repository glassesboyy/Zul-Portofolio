"use client";

import { useModalStore } from "@/store/modalStore";
import { useState } from "react";
import { Modal } from "../ui/certificate-modal";
import { HeroParallax } from "../ui/hero-parallax";

const certificates = [
  {
    title: "JF Java Fundamentals Learner - English",
    thumbnail:
      "/assets/certificate/JF Java Fundamentals Learner - English-1.png",
  },
  {
    title: "PCAP Programming Essentials in Python",
    thumbnail:
      "/assets/certificate/PCAP Programming Essentials in Python-1.png",
  },
  {
    title: "RevoU Fundamental Course Software Engineering-1",
    thumbnail:
      "/assets/certificate/Sertifikat RevoU Fundamental Course Software Engineering-1.png",
  },
  {
    title: "Bootcamp FE Intermediate SISTEM x D3TI UNS",
    thumbnail: "/assets/certificate/TIC-V3423083-TEGUH-1.png",
  },
  {
    title: "Myskill Fundamental Career Preparation",
    thumbnail: "/assets/certificate/Fundamental Career Preparation-1.png",
  },
  {
    title: "DD Database Design Learner - English",
    thumbnail: "/assets/certificate/DD Database Design Learner - English-1.png",
  },
  {
    title: "Red Hat System Administration I (RH124)",
    thumbnail:
      "/assets/certificate/Certificate of Attendance (RH124-9.0)-1.png",
  },
  {
    title:
      "Red Hat OpenStack Administration I: Core Operations for Domain Operators (CL110)",
    thumbnail:
      "/assets/certificate/Certificate of Attendance (CL110-16.1)-1.png",
  },
  {
    title: "Certificate of Perticipation SIC6",
    thumbnail: "/assets/certificate/Certificate of Perticipation SIC6.png",
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
          headerTitle="Professional Certifications"
          headerSubtitle="A showcase of my continuous learning journey and technical expertise, validated by industry leaders"
          headerTag="Certifications"
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
