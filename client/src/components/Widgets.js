import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { FaUniversity, FaGlobe } from "react-icons/fa";
import { GiMeatCleaver } from "react-icons/gi";

const Widgets = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      linkText: "DePaul x Northern Trust Competition",
      icon: FaUniversity,
      text: "A finance application developed for the Northern Trust x DePaul University competition. This project got us 3rd place in the competition.",
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: "Freedom Butchers Freelance Work",
      icon: GiMeatCleaver,
      text: "A full-fledged e-commerce site developed for a small local business called 'Freedom Butchers'.",
      techStack: ["Astro", "Node.js", "Express", "SCSS"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
      inDevelopment: true,
      isPrivate: false,
    },
    {
      linkText: "DePaul Cloud Club Research",
      icon: FaGlobe,
      text: "Collaborating with graduate students on a cloud project, enhancing frontend skills and contributing to innovative solutions.",
      techStack: [
        "Next.js",
        "SCSS",
        "Node.js",
        "Docker",
        "Express",
        "TypeScript",
      ],
      live: false,
      liveLink: "",
      inDevelopment: true,
      isPrivate: true,
    },
  ];

  return (
    <div id="projects">
      <h1 className="text-4xl font-bold text-center mb-4 sm:text-5xl backdrop-blur-sm">
        Projects
      </h1>

      <section>
        <div className="flex justify-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
  techStack,
  live,
  liveLink,
  inDevelopment,
  isPrivate,
}) => {
  return (
    <div className="flex flex-col h-full p-6 bg-[#eaeae8] dark:bg-[#2D2D2D] rounded-xl shadow-lg transition-transform duration-300">
      <div className="text-center w-full mb-4 flex flex-wrap items-center justify-center gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-[#D0D0D0] dark:bg-[#4A4A4A] text-sm font-semibold py-2 px-3 rounded-full transition duration-200 mb-1 max-[640px]:px-[0.45rem] max-[375px]:py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-2xl text-center mb-4 font-bold dark:text-gray-200">
        {linkText}
      </div>

      <div className="flex-grow flex flex-col items-center justify-center mb-6">
        <span className="text-5xl mb-4">{React.createElement(icon)}</span>
        <p className="text-lg text-center px-4 dark:text-gray-400">{text}</p>
      </div>

      {inDevelopment && (
        <p className="text-center text-sm font-semibold dark:text-gray-300 mb-4">
          *In Development*
        </p>
      )}

      <div className="text-center mt-4">
        {!isPrivate && (
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white dark:bg-blue-800 dark:text-gray-200 py-2 px-4 rounded transition duration-200 hover:bg-blue-700 dark:hover:bg-blue-700"
          >
            {live ? "View Site" : "View Repo"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Widgets;
