import { lazy } from "react";

import { DiReact, DiNodejs } from "react-icons/di";
import { BiLogoRedux, BiLogoGit, BiLogoAws } from "react-icons/bi";
import {
  SiJest,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

const skillsData = [
  {
    skills: [
      {
        icon: <DiReact className="text-4xl" />,
        name: "React",
        description: "JavaScript Library",
      },
      {
        icon: <BiLogoRedux className="text-4xl" />,
        name: "Redux",
        description: "State Management",
      },
      {
        icon: <BiLogoGit className="text-4xl" />,
        name: "Git",
        description: "Version Control",
      },
      {
        icon: <SiJest className="text-4xl" />,
        name: "Jest",
        description: "Testing Framework",
      },
      {
        icon: <SiTypescript className="text-4xl" />,
        name: "TypeScript",
        description: "JavaScript but better",
      },
      {
        icon: <FaFigma className="text-4xl" />,
        name: "Figma",
        description: "Design Tool",
      },
      {
        icon: <SiSupabase className="text-4xl" />,
        name: "Supabase",
        description: "Backend tool",
      },
      {
        icon: <SiTailwindcss className="text-4xl" />,
        name: "Tailwind",
        description: "CSS Framework",
      },
      {
        icon: <RiNextjsLine className="text-4xl" />,
        name: "Next.js",
        description: "React Framework",
      },
      {
        icon: <SiPostgresql className="text-4xl" />,
        name: "PostgreSQL",
        description: "Relational Database",
      },
      {
        icon: <BiLogoAws className="text-4xl" />,
        name: "AWS",
        description: "Cloud Services",
      },
      {
        icon: <DiNodejs className="text-4xl" />,
        name: "Node.js",
        description: "JavaScript Runtime",
      },
      {
        icon: <SiFirebase className="text-4xl" />,
        name: "Firebase",
        description: "Backend-as-a-Service",
      },
    ],
  },
];

export default skillsData;
