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
        hoverColor: "#61DAFB",
        darkHoverColor: "#1E90FF",
      },
      {
        icon: <BiLogoRedux className="text-4xl" />,
        name: "Redux",
        description: "State Management",
        hoverColor: "#764ABC",
        darkHoverColor: "#A052C6",
      },
      {
        icon: <BiLogoGit className="text-4xl" />,
        name: "Git",
        description: "Version Control",
        hoverColor: "#F05033",
        darkHoverColor: "#FF6347",
      },
      {
        icon: <SiJest className="text-4xl" />,
        name: "Jest",
        description: "Testing Framework",
        hoverColor: "#99424F",
        darkHoverColor: "#D3003F",
      },
      {
        icon: <SiTypescript className="text-4xl" />,
        name: "TypeScript",
        description: "JavaScript but better",
        hoverColor: "#3178C6",
        darkHoverColor: "#004B87",
      },
      {
        icon: <FaFigma className="text-4xl" />,
        name: "Figma",
        description: "Design Tool",
        hoverColor: "#F24E1E",
        darkHoverColor: "#D95B0D",
      },
      {
        icon: <SiSupabase className="text-4xl" />,
        name: "Supabase",
        description: "Backend tool",
        hoverColor: "#3ECF8E",
        darkHoverColor: "#2CA67B",
      },
      {
        icon: <SiTailwindcss className="text-4xl" />,
        name: "Tailwind",
        description: "CSS Framework",
        hoverColor: "#38B2AC",
        darkHoverColor: "#2D8C8B",
      },
      {
        icon: <RiNextjsLine className="text-4xl" />,
        name: "Next.js",
        description: "React Framework",
        hoverColor: "#0070f3",
        darkHoverColor: "#1a73e8",
      },

      {
        icon: <SiPostgresql className="text-4xl" />,
        name: "PostgreSQL",
        description: "Relational Database",
        hoverColor: "#336791",
        darkHoverColor: "#154360",
      },
      {
        icon: <BiLogoAws className="text-4xl" />,
        name: "AWS",
        description: "Cloud Services",
        hoverColor: "#FF9900",
        darkHoverColor: "#FFA500",
      },
      {
        icon: <DiNodejs className="text-4xl" />,
        name: "Node.js",
        description: "JavaScript Runtime",
        hoverColor: "#83CD29",
        darkHoverColor: "#5F7B1E",
      },
      {
        icon: <SiFirebase className="text-4xl" />,
        name: "Firebase",
        description: "Backend-as-a-Service",
        hoverColor: "#FFCA28",
        darkHoverColor: "#FFA726",
      },
    ],
  },
];

export default skillsData;
