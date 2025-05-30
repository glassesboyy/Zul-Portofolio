"use client";

import { useAnimationStore } from "@/store/animationStore";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  initScrollAnimation,
  initTechAnimation,
} from "../animation/techAnimation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const techItems = [
  // Cloud & Infrastructure
  { name: "AWS", icon: "devicon-amazonwebservices-plain" }, // Fixed AWS icon
  { name: "Azure", icon: "devicon-azure-plain" },
  { name: "GCP", icon: "devicon-googlecloud-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { name: "Terraform", icon: "devicon-terraform-plain" },

  // Backend Technologies
  { name: "Java", icon: "devicon-java-plain" },
  { name: "Spring", icon: "devicon-spring-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: ".NET", icon: "devicon-dot-net-plain" },
  { name: "Go", icon: "devicon-go-original-wordmark" },

  // Frontend Technologies
  { name: "React", icon: "devicon-react-plain" },
  { name: "Angular", icon: "devicon-angularjs-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain-wordmark" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Webpack", icon: "devicon-webpack-plain" },

  // Databases
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "Elasticsearch", icon: "devicon-elasticsearch-plain" },
  { name: "Oracle", icon: "devicon-oracle-original" },

  // DevOps & Tools
  { name: "Jenkins", icon: "devicon-jenkins-plain" },
  { name: "GitLab", icon: "devicon-gitlab-plain" },
  { name: "GitHub", icon: "devicon-github-plain" },
  { name: "Ansible", icon: "devicon-ansible-plain" },
  { name: "Prometheus", icon: "devicon-prometheus-original" },
  { name: "Grafana", icon: "devicon-grafana-plain" }, // Fixed Grafana icon

  // Project Management & Collaboration
  { name: "Jira", icon: "devicon-jira-plain" },
  { name: "Confluence", icon: "devicon-confluence-plain" }, // Fixed Confluence icon
  { name: "Slack", icon: "devicon-slack-plain" },
  { name: "Bitbucket", icon: "devicon-bitbucket-original" },

  // Testing & Quality
  { name: "Jest", icon: "devicon-jest-plain" },
  { name: "Selenium", icon: "devicon-selenium-original" },
  { name: "SonarQube", icon: "devicon-sonarqube-plain" },

  // Security
  { name: "Vault", icon: "devicon-vault-plain" },
  { name: "Apache", icon: "devicon-apache-plain" },
  { name: "Nginx", icon: "devicon-nginx-original" },

  // Add 3 new technologies
  // Mobile Development
  { name: "Flutter", icon: "devicon-flutter-plain" },
  { name: "Swift", icon: "devicon-swift-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
];

export const Tech = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { preloadComplete } = useAnimationStore();
  const animationTriggered = useRef(false);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".tech-card") || [];
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0 });
      gsap.set(elements, { opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (!preloadComplete || animationTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationTriggered.current) {
          observer.disconnect();
          animationTriggered.current = true;

          const cards =
            containerRef.current?.querySelectorAll(".tech-card") || [];

          initTechAnimation(titleRef.current, Array.from(cards));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [preloadComplete]);

  useEffect(() => {
    initScrollAnimation(titleRef.current, "title");
    initScrollAnimation(subtitleRef.current, "subtitle");
  }, []);

  return (
    <div className="my-12 md:my-20 lg:my-20 mb">
      <div ref={titleRef}>
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 cursor-pointer group">
            <span className="text-xs md:text-sm lg:text-base font-medium text-violet-400 uppercase tracking-widest">
              Our Technology Stack
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="transition-transform duration-300 group-hover:translate-x-1 text-violet-400"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            <span className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text pb-2">
              Enterprise Solutions & Tools
            </span>
          </h2>
        </div>
      </div>

      <div ref={subtitleRef} className="mb-12 text-center">
        {isSubtitleInView && (
          <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed [text-wrap:balance] max-w-[90%] mx-auto mt-3">
            Leveraging industry-leading technologies to deliver scalable,
            secure, and innovative solutions for modern businesses
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 place-items-center gap-4 px-4 md:px-16 lg:px-12"
      >
        {techItems.map((tech, index) => (
          <CardContainer
            key={index}
            className="inter-var tech-card"
            containerClassName="py-1 md:py-2"
          >
            <CardBody
              className={`
                relative group/card h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 cursor-pointer
                bg-gradient-to-t from-black/10 to-violet-800/30
                dark:hover:shadow-2xl dark:hover:shadow-violet-600/30
                border border-violet-900/10 rounded-xl
                transition-all duration-300 ease-out
                hover:border-violet-600/50
                hover:scale-95
                hover:before:opacity-100
              `}
            >
              <CardItem
                translateZ={160}
                className="text-4xl md:text-5xl lg:text-7xl flex items-center justify-center w-full h-full text-white"
              >
                <div className="flex flex-col items-center md:gap-2">
                  <i
                    className={`${tech.icon} group-hover/card:text-violet-100 transition-all duration-500 transform group-hover/card:scale-110`}
                  />
                  <span className="-mb-4 md:mb-0 text-[8px] sm:text-[10px] md:text-xs font-medium text-violet-300 group-hover/card:text-violet-100 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
