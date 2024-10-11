import { lazy } from "react";

// Lazy load Di icons
const DiJava = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiJava }))
);
const DiPython = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiPython }))
);
const DiJavascript1 = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiJavascript1 }))
);
const DiWindows = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiWindows }))
);
const DiLinux = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiLinux }))
);
const DiApple = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiApple }))
);
const DiNodejsSmall = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiNodejsSmall }))
);
const DiReact = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiReact }))
);
const DiAngularSimple = lazy(() =>
  import("react-icons/di").then((module) => ({
    default: module.DiAngularSimple,
  }))
);
const DiDatabase = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiDatabase }))
);
const DiHtml5 = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiHtml5 }))
);
const DiCss3 = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiCss3 }))
);
const DiGithubBadge = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiGithubBadge }))
);
const DiNginx = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiNginx }))
);
const DiPostgresql = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiPostgresql }))
);
const DiGit = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiGit }))
);

// Lazy load Fa icons
const FaSitemap = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSitemap }))
);
const FaDesktop = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaDesktop }))
);
const FaCode = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCode }))
);
const FaPalette = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPalette }))
);
const FaMicrochip = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaMicrochip }))
);
const FaUsers = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaUsers }))
);
const FaMap = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaMap }))
);
const FaCloud = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCloud }))
);

// Lazy load Bi icons
const BiCodeCurly = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiCodeCurly }))
);

// Lazy load Si icons
const SiMicrosoftexcel = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftexcel,
  }))
);

// Lazy load Pi icons
const PiFileSqlFill = lazy(() =>
  import("react-icons/pi").then((module) => ({ default: module.PiFileSqlFill }))
);

// Lazy load Md icons
const MdTerminal = lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdTerminal }))
);
const MdDashboardCustomize = lazy(() =>
  import("react-icons/md").then((module) => ({
    default: module.MdDashboardCustomize,
  }))
);

// Lazy load Tb icons
const TbBrandTailwind = lazy(() =>
  import("react-icons/tb").then((module) => ({
    default: module.TbBrandTailwind,
  }))
);
const TbBrandFigma = lazy(() =>
  import("react-icons/tb").then((module) => ({ default: module.TbBrandFigma }))
);
const TbBrandBootstrap = lazy(() =>
  import("react-icons/tb").then((module) => ({
    default: module.TbBrandBootstrap,
  }))
);

const skillsData = [
  {
    head: "OOP",
    skills: [
      {
        icon: <DiJava className="text-4xl" />,
        name: "Java",
        bgColor: "#FF6F61",
        rating: 8,
      },
      {
        icon: <DiPython className="text-4xl" />,
        name: "Python",
        bgColor: "#4CAF50",
        rating: 9,
      },
      {
        icon: <DiJavascript1 className="text-4xl text-black" />,
        name: "JavaScript",
        bgColor: "#F7DF1E",
        rating: 10,
      },
    ],
  },
  {
    head: "OS",
    skills: [
      {
        icon: <DiWindows className="text-4xl" />,
        name: "Windows",
        bgColor: "#0078D4",
        rating: 10,
      },
      {
        icon: <DiLinux className="text-4xl text-black" />,
        name: "Linux",
        bgColor: "#FCC624",
        rating: 10,
      },
      {
        icon: <DiApple className="text-4xl" />,
        name: "Apple",
        bgColor: "#A2AAAD",
        rating: 10,
      },
    ],
  },
  {
    head: "JS Frameworks",
    skills: [
      {
        icon: <DiNodejsSmall className="text-4xl" />,
        name: "Node JS",
        bgColor: "#8CC84B",
        rating: 10,
      },
      {
        icon: <DiReact className="text-4xl" />,
        name: "React",
        bgColor: "#61DAFB",
        rating: 9,
      },
      {
        icon: <DiAngularSimple className="text-4xl" />,
        name: "Angular",
        bgColor: "#DD0031",
        rating: 7,
      },
    ],
  },
  {
    head: "Comp Sci",
    skills: [
      {
        icon: <FaSitemap className="text-4xl" />,
        name: "Computer Net.",
        bgColor: "#009B77",
        rating: 8,
      },
      {
        icon: <DiDatabase className="text-4xl" />,
        name: "Data Structures",
        bgColor: "#F6C91D",
        rating: 8,
      },
      {
        icon: <FaDesktop className="text-4xl" />,
        name: "Computer Systems",
        bgColor: "#4B4F56",
        rating: 8,
      },
    ],
  },
  {
    head: "Web Dev CI/CD",
    skills: [
      {
        icon: <FaCode className="text-4xl" />,
        name: "FE Web Development",
        bgColor: "#FF6F61",
        rating: 10,
      },
      {
        icon: <BiCodeCurly className="text-4xl" />,
        name: "BE Web Development",
        bgColor: "#3B82F6",
        rating: 10,
      },
      {
        icon: <FaPalette className="text-4xl" />,
        name: "UI/UX Design",
        bgColor: "#FBBF24",
        rating: 10,
      },
    ],
  },
  {
    head: "Web Dev Languages",
    skills: [
      {
        icon: <DiHtml5 className="text-4xl" />,
        name: "HTML5",
        bgColor: "#E34F26",
        rating: 10,
      },
      {
        icon: <DiCss3 className="text-4xl" />,
        name: "CSS3",
        bgColor: "#1572B6",
        rating: 10,
      },
      {
        icon: <DiJavascript1 className="text-4xl text-black" />,
        name: "JavaScript",
        bgColor: "#F7DF1E",
        rating: 10,
      },
    ],
  },
  {
    head: "Other",
    skills: [
      {
        icon: <SiMicrosoftexcel className="text-4xl" />,
        name: "Excel",
        bgColor: "#217346",
        rating: 9,
      },
      {
        icon: <DiGithubBadge className="text-4xl text-white" />,
        name: "GitHub",
        bgColor: "#181717",
        rating: 10,
      },
      {
        icon: <PiFileSqlFill className="text-4xl" />,
        name: "SQL",
        bgColor: "#003B57",
        rating: 9,
      },
    ],
  },
  {
    head: "Open Source Tools",
    skills: [
      {
        icon: <DiGit className="text-4xl" />,
        name: "Git",
        bgColor: "#F05032",
        rating: 10,
      },
      {
        icon: <DiPostgresql className="text-4xl" />,
        name: "PostgreSQL",
        bgColor: "#009639",
        rating: 8,
      },
      {
        icon: <DiNginx className="text-4xl text-white" />,
        name: "Nginx",
        bgColor: "#336791",
        rating: 9,
      },
    ],
  },
  {
    head: "AWS",
    skills: [
      {
        icon: <FaMicrochip className="text-4xl" />,
        name: "EC2",
        bgColor: "#FF9900",
        rating: 10,
      },
      {
        icon: <FaMap className="text-4xl text-white" />,
        name: "Route 53",
        bgColor: "#232F3E",
        rating: 10,
      },
      {
        icon: <FaCloud className="text-4xl" />,
        name: "AWS Amplify",
        bgColor: "#00aaff",
        rating: 10,
      },
    ],
  },
  {
    head: "DevOps",
    skills: [
      {
        icon: <MdTerminal className="text-4xl text-white" />,
        name: "Bash",
        bgColor: "#2D2D2D",
        rating: 8,
      },
      {
        icon: <MdDashboardCustomize className="text-4xl" />,
        name: "Agile",
        bgColor: "#00BFAE",
        rating: 9,
      },
      {
        icon: <FaUsers className="text-4xl" />,
        name: "MS Teams",
        bgColor: "#6264A7",
        rating: 10,
      },
    ],
  },
  {
    head: "UI/UX Design",
    skills: [
      {
        icon: <TbBrandTailwind className="text-4xl" />,
        name: "TailwindCSS",
        bgColor: "#3B82F6",
        rating: 10,
      },
      {
        icon: <TbBrandFigma className="text-4xl" />,
        name: "Figma",
        bgColor: "#0ACF83",
        rating: 8,
      },
      {
        icon: <TbBrandBootstrap className="text-4xl" />,
        name: "Bootstrap",
        bgColor: "#0D6EFD",
        rating: 9,
      },
    ],
  },
];

export default skillsData;
