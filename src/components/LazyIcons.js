import { lazy } from "react";

// Lazy load icon components
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

const FaSitemap = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaSitemap }))
);
const FaDesktop = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaDesktop }))
);
const FaCode = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaCode }))
);
const FaPalette = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaPalette }))
);
const FaFileCode = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaFileCode }))
);
const FaMicrochip = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaMicrochip }))
);
const FaUsers = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaUsers }))
);
const FaMap = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaMap }))
);
const FaAnglesUp = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaAnglesUp }))
);

const BiCodeCurly = lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiCodeCurly }))
);
const SiMicrosoftexcel = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftexcel,
  }))
);
const PiFileSqlFill = lazy(() =>
  import("react-icons/pi").then((module) => ({ default: module.PiFileSqlFill }))
);
const BsFillLockFill = lazy(() =>
  import("react-icons/bs").then((module) => ({
    default: module.BsFillLockFill,
  }))
);
const MdCable = lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdCable }))
);
const MdTerminal = lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdTerminal }))
);
const MdDashboardCustomize = lazy(() =>
  import("react-icons/md").then((module) => ({
    default: module.MdDashboardCustomize,
  }))
);

const FaSync = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSync }))
);
const FaUser = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaUser }))
);
const FaTools = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaTools }))
);
const FaBriefcase = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaBriefcase }))
);
const FaGraduationCap = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: module.FaGraduationCap,
  }))
);
const FaBook = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaBook }))
);
const FaEnvelope = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaEnvelope }))
);
const FaSoundcloud = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSoundcloud }))
);
const FaSpotify = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSpotify }))
);
const FaLinkedin = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaLinkedin }))
);
const FaMapMarkerAlt = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: module.FaMapMarkerAlt,
  }))
);
const FaPhoneAlt = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPhoneAlt }))
);

const AiFillClockCircle = lazy(() =>
  import("react-icons/ai").then((module) => ({
    default: module.AiFillClockCircle,
  }))
);
const HiSun = lazy(() =>
  import("react-icons/hi2").then((module) => ({ default: module.HiSun }))
);
const HiCurrencyEuro = lazy(() =>
  import("react-icons/hi2").then((module) => ({
    default: module.HiCurrencyEuro,
  }))
);

const IoRefresh = lazy(() =>
  import("react-icons/io5").then((module) => ({ default: module.IoRefresh }))
);

export {
  DiJava,
  DiPython,
  DiJavascript1,
  DiWindows,
  DiLinux,
  DiApple,
  DiNodejsSmall,
  DiReact,
  DiAngularSimple,
  DiDatabase,
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  FaSitemap,
  FaDesktop,
  FaCode,
  FaPalette,
  FaFileCode,
  FaMicrochip,
  FaUsers,
  FaMap,
  FaAnglesUp,
  BiCodeCurly,
  SiMicrosoftexcel,
  PiFileSqlFill,
  BsFillLockFill,
  MdCable,
  MdTerminal,
  MdDashboardCustomize,
  FaSync,
  FaUser,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaEnvelope,
  FaSoundcloud,
  FaSpotify,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  AiFillClockCircle,
  HiSun,
  HiCurrencyEuro,
  IoRefresh,
};
