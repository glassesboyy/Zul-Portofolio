"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const techStack = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Vue", icon: "devicon-vuejs-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
];

export const Tech = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-4 px-4 md:px-20 lg:px-72">
      {techStack.map((tech, index) => (
        <CardContainer
          key={index}
          className="inter-var"
          containerClassName="py-2"
        >
          <CardBody
            className={`
              relative group/card h-32 w-32 cursor-pointer
              bg-gradient-to-br from-black via-slate-950 to-violet-900
              dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.2]
              border border-violet-900/50 rounded-xl p-4
              transition-all duration-300 ease-out
              hover:border-violet-600/50
              before:absolute before:inset-0 before:bg-gradient-to-br 
              before:from-violet-600/20 before:via-violet-800/10 before:to-black/20 
              before:rounded-xl before:opacity-0 
              before:transition-opacity before:duration-500
              hover:before:opacity-100
              after:absolute after:inset-0 
              after:bg-gradient-to-br 
              after:from-violet-500/0 after:via-violet-500/[0.1] after:to-black/0 
              after:opacity-0 after:group-hover/card:opacity-100 
              after:transition-opacity after:duration-500 
              after:rounded-xl
            `}
          >
            <CardItem
              translateZ={100}
              className="text-7xl flex items-center justify-center w-full h-full text-violet-300"
            >
              <div className="flex flex-col items-center gap-2">
                <i
                  className={`${tech.icon} group-hover/card:text-violet-100 transition-all duration-500 transform group-hover/card:scale-110`}
                />
                <span className="text-xs font-medium text-violet-300 group-hover/card:text-violet-100 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};
