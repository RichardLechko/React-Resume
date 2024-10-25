import { lazy } from "react";

const DiReact = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiReact }))
);

// Lazy load Bi icons
const BiLogoRedux = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiLogoRedux }))
);
const BiLogoGit = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiLogoGit }))
);

// Lazy Load Fa6 Icon
const FaFigma = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaFigma }))
);

// Lazy load Cg icon
const CgNpm = lazy(() =>
  import("react-icons/cg").then((module) => ({ default: module.CgNpm }))
);

// Lazy load Si icons
const SiJest = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJest }))
);
const SiCypress = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCypress }))
);
const SiTypescript = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTypescript }))
);
const SiSupabase = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiSupabase }))
);
const SiAppwrite = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiAppwrite }))
);
const SiTailwindcss = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTailwindcss }))
);

// Lazy load Ai icon
const AiOutlineApi = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiOutlineApi }))
);

// Lazy Load Ri icon
const RiNextjsLine = lazy(() =>
  import("react-icons/ri").then((module) => ({ default: module.RiNextjsLine }))
);

// Skills data
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
        icon: <CgNpm className="text-4xl" />,
        name: "NPM",
        description: "Package Manager",
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
    ],
  },
];

export default skillsData;
