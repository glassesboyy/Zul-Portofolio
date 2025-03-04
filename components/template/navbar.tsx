"use client";

import { useAnimationStore } from "@/store/animationStore";
import {
  IconActivity,
  IconArrowGuide,
  IconArrowGuideFilled,
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconFilterQuestion,
  IconHome,
  IconHotelService,
  IconMail,
  IconMessageStar,
  IconQuestionMark,
  IconUser,
} from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import { initNavbarAnimation } from "../animation/navbarAnimation";
import { FloatingNav } from "../ui/floating-navbar";

export function Navbar() {
  const { preloadComplete } = useAnimationStore();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (preloadComplete && navbarRef.current) {
      initNavbarAnimation(navbarRef.current);
    }
  }, [preloadComplete]);

  if (!preloadComplete) {
    return null;
  }

  return (
    <FloatingNav
      ref={navbarRef}
      navItems={[
        { name: "Home", link: "home", icon: <IconHome className="w-4 h-4" /> },
        {
          name: "About",
          link: "about",
          icon: <IconUser className="w-4 h-4" />,
        },
        { name: "Tech", link: "tech", icon: <IconCode className="w-4 h-4" /> },
        {
          name: "Certificate",
          link: "certificate",
          icon: <IconCertificate className="w-4 h-4" />,
        },
        {
          name: "Projects",
          link: "projects",
          icon: <IconBriefcase className="w-4 h-4" />,
        },
        {
          name: "Testimonials",
          link: "testimonials",
          icon: <IconMessageStar className="w-4 h-4" />,
        },
        {
          name: "Services",
          link: "services",
          icon: <IconArrowGuideFilled className="w-4 h-4" />,
        },
        {
          name: "FAQ",
          link: "faq",
          icon: <IconQuestionMark className="w-4 h-4" />,
        },
        {
          name: "Contact",
          link: "contact",
          icon: <IconMail className="w-4 h-4" />,
        },
      ]}
    />
  );
}
