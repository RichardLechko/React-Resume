import { lazy } from "react";

const DiReact = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiReact }))
);
const DiNodejs = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiNodejs }))
);
const BiLogoRedux = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiLogoRedux }))
);
const BiLogoGit = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiLogoGit }))
);
const BiLogoAws = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiLogoAws }))
);
const SiJest = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJest }))
);
const SiTypescript = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTypescript }))
);
const SiSupabase = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiSupabase }))
);
const SiTailwindcss = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTailwindcss }))
);
const SiPostgresql = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiPostgresql }))
);
const SiFirebase = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiFirebase }))
);
const FaFigma = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaFigma }))
);
const RiNextjsLine = lazy(() =>
  import("react-icons/ri").then((module) => ({ default: module.RiNextjsLine }))
);

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
