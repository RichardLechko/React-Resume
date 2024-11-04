import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { FaUniversity, FaUser, FaBook, FaGlobe } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { GiMeatCleaver } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { HiSun, HiCurrencyEuro } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

const Widgets = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      mainProject: true,
      linkText: "DePaul x Northern Trust Competition",
      icon: FaUniversity,
      text: "A finance application developed for the Northern Trust x DePaul University competition. This project got us 3rd place in the competition.",
      newTab: true,
      techStack: ["React", "JS", "Tailwind", "Python", "Flask"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      inDevelopment: false,
    },
    {
      mainProject: true,
      linkText: "Personal Portfolio",
      icon: FaUser,
      text: "My web dev portfolio, showcasing personal aspects of my life, education, skills, and more!",
      newTab: true,
      techStack: ["React", "Tailwind", "JavaScript", "Node.js"],
      live: true,
      liveLink: "https://www.richardlechko.com/",
      inDevelopment: false,
    },
    {
      mainProject: true,
      linkText: "Freedom Butchers Freelance Work",
      icon: GiMeatCleaver,
      text: "A full-fledged e-commerce site developed for a small local business called 'Freedom Butchers'.",
      newTab: true,
      techStack: ["Astro", "Node.js", "Express", "SCSS"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
      inDevelopment: true,
    },
    {
      mainProject: true,
      linkText: "Blog",
      icon: FaBook,
      text: "My public notes page.",
      newTab: true,
      techStack: ["React", "HyGraph", "API", "Tailwind"],
      live: true,
      liveLink: "https://public-notes-page-react.vercel.app/",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Fintech App",
      icon: BsCurrencyDollar,
      text: "An app showcasing CSS skills.",
      newTab: true,
      techStack: ["HTML", "CSS"],
      live: false,
      liveLink: "https://github.com/RichardLechko/Fintech-Solutions",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Timer Widget",
      icon: AiFillClockCircle,
      text: "A timer widget that counts down from a set time.",
      newTab: false,
      techStack: ["JavaScript", "HTML", "CSS"],
      live: true,
      liveLink: "/widgets/timer",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Weather App Widget",
      icon: HiSun,
      text: "Enter a city to get real-time weather data.",
      newTab: false,
      techStack: ["JavaScript", "API", "HTML", "Tailwind"],
      live: true,
      liveLink: "/widgets/weather",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Currency Converter Widget",
      icon: HiCurrencyEuro,
      text: "Convert between 33 currencies using real-time API data.",
      newTab: false,
      techStack: ["JavaScript", "API", "HTML", "Tailwind"],
      live: true,
      liveLink: "/widgets/currency",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "IT 238 - Final Project",
      icon: FaGlobe,
      text: "A travel guide website to France for my final project.",
      newTab: true,
      techStack: ["JavaScript", "CSS", "HTML"],
      live: false,
      liveLink: "https://github.com/RichardLechko/it238-finalproject",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Loruki Website",
      icon: FaRegFileLines,
      text: "A mockup website for a cloud hosting service.",
      newTab: true,
      techStack: ["HTML", "CSS"],
      live: false,
      liveLink: "https://github.com/RichardLechko/Loruki-Website",
      inDevelopment: false,
    },
    {
      mainProject: false,
      linkText: "Personal Website (Deprecated)",
      icon: DiGithubBadge,
      text: "Source code for my web development portfolio.",
      newTab: true,
      techStack: ["HTML", "CSS", "JavaScript"],
      live: false,
      liveLink: "https://github.com/RichardLechko/RichardLechkoResume",
      inDevelopment: false,
    },
  ];

  return (
    <div id="projects">
      <h1 className="text-4xl mb-4 font-bold text-center max-[640px]:text-3xl max-[425px]:text-2xl">
        Projects:
      </h1>

      <section>
        <div className="flex justify-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.mainProject)
              .map((project, index) => (
                <WidgetsCard key={index} {...project} />
              ))}
          </div>
        </div>
        <h1 className="text-center text-3xl mb-8 font-bold">
          Smaller Projects
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => !project.mainProject)
              .map((project, index) => (
                <WidgetsCard key={index} {...project} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const WidgetsCard = ({
  linkText,
  icon,
  text,
  newTab,
  mainProject,
  techStack,
  live,
  liveLink,
  inDevelopment,
}) => {
  return (
    <div
      className={`flex flex-col h-full p-6 ${
        mainProject
          ? "bg-[#eaeae8] dark:bg-[#2D2D2D]"
          : "bg-[#D8D8D8] dark:bg-[#1E1E1E]"
      } rounded-xl shadow-lg transition-transform duration-300`}
    >
      {/* Tech Stack */}
      <div className="text-center mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className={`inline-block ${
              mainProject
                ? "bg-[#D0D0D0] dark:bg-[#4A4A4A]"
                : "bg-[#eaeae8] dark:bg-[#3B3B3B]"
            } text-sm font-semibold py-2 px-3 rounded-full mr-2 transition duration-200 mb-1`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link Text */}
      <h4
        className={`text-2xl text-center mb-4 ${
          mainProject ? "font-bold" : "font-semibold"
        } dark:text-gray-200`}
      >
        {linkText}
      </h4>

      {/* Icon and Description Container */}
      <div className="flex-grow flex flex-col items-center justify-center mb-6">
        <span className="text-5xl mb-4">{React.createElement(icon)}</span>
        <p className="text-lg text-center px-4 dark:text-gray-400">{text}</p>
      </div>

      {/* In Development Notice */}
      {inDevelopment && (
        <p className="text-center text-sm font-semibold dark:text-gray-300 mb-4">
          *In Development*
        </p>
      )}

      {/* Button */}
      <div className="text-center mt-4">
        <a
          href={liveLink || "#"}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="inline-block bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 py-2 px-4 rounded transition duration-200 hover:bg-blue-600 dark:hover:bg-blue-600"
        >
          {live ? "View Site" : "View Repo"}
        </a>
      </div>
    </div>
  );
};

export default Widgets;
