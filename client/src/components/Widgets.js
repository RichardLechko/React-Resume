import { FaUniversity, FaUser, FaBook, FaGlobe } from "react-icons/fa";
import { GiMeatCleaver } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { HiSun, HiCurrencyEuro } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

import { FaRegFileLines } from "react-icons/fa6";

import { Radar } from "react-chartjs-2";
import { useEffect, useRef } from "react";
import { useScroll } from "./ScrollToTop.js";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Widgets = () => {
  const { scrollToTop } = useScroll();
  const chartRef = useRef(null);

  const data = {
    labels: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "SQL",
      "C",
      "React",
      "Node.js",
    ],
    datasets: [
      {
        label: "Expertise Level",
        data: [10, 10, 10, 5, 9, 3, 9, 10],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 4,
        pointHoverRadius: 7,
        fill: true,
      },
    ],
  };

  const getLabelColor = () => {
    return document.body.classList.contains("dark")
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 1)";
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        grid: {
          color: "rgba(255, 99, 132, 0.5)",
          lineWidth: 2,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { display: false },
        pointLabels: {
          display: true,
          color: getLabelColor(),
          font: (ctx) => {
            const size = Math.min(Math.round(ctx.chart.width / 32), 18);
            return { size };
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  useEffect(() => {
    const updateChartColors = () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current;

        chartInstance.data.datasets[0].backgroundColor =
          document.body.classList.contains("dark")
            ? "rgba(255, 99, 132, 0.6)"
            : "rgba(54, 162, 235, 0.6)";

        chartInstance.data.datasets[0].borderColor =
          document.body.classList.contains("dark")
            ? "rgba(255, 99, 132, 1)"
            : "rgba(54, 162, 235, 1)";

        chartInstance.options.scales.r.pointLabels.color = getLabelColor();

        chartInstance.update();
      }
    };

    updateChartColors();

    const observer = new MutationObserver(updateChartColors);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      mainProject: true,
      linkText: "DePaul x Northern Trust Competition",
      icon: <FaUniversity size={50} />,
      text: "A finance application developed for the Northern Trust x DePaul University competition. This project got us 3rd place in the competition.",
      newTab: true,
      techStack: ["React", "JS", "Tailwind", "Python", "Flask"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
    },
    {
      mainProject: true,
      linkText: "Personal Portfolio",
      icon: <FaUser size={50} />,
      text: "My web dev portfolio, showcasing personal aspects of my life, education, skills, and more!",
      newTab: true,
      techStack: ["React", "Tailwind", "JavaScript", "Node.js"],
      live: true,
      liveLink: "https://www.richardlechko.com/",
    },
    {
      mainProject: true,
      linkText: "Freedom Butchers Freelance Work",
      icon: <GiMeatCleaver size={50} />,
      text: "A full-fledged e-commerce site developed for a small local business called 'Freedom Butchers'.",
      newTab: true,
      techStack: ["Astro", "Node.js", "Express", "SCSS"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
    },
    {
      mainProject: true,
      linkText: "Blog",
      icon: <FaBook size={50} />,
      text: "My public notes page.",
      newTab: true,
      techStack: ["React", "HyGraph", "API", "Tailwind"],
      live: true,
      liveLink: "https://public-notes-page-react.vercel.app/",
    },
    {
      mainProject: false,
      linkText: "Fintech App",
      icon: <BsCurrencyDollar size={50} />,
      text: "An app showcasing CSS skills.",
      newTab: true,
      techStack: ["HTML", "CSS"],
      live: false,
      liveLink: "https://github.com/RichardLechko/Fintech-Solutions",
    },
    {
      mainProject: false,
      linkText: "Timer Widget",
      icon: <AiFillClockCircle size={50} />,
      text: "A timer widget that counts down from a set time.",
      newTab: false,
      techStack: ["JavaScript", "HTML", "CSS"],
      live: true,
      liveLink: "/widgets/timer",
    },
    {
      mainProject: false,
      linkText: "Weather App Widget",
      icon: <HiSun size={50} className="text-yellow-400" />,
      text: "Enter a city to get real-time weather data.",
      newTab: false,
      techStack: ["JavaScript", "API", "HTML", "Tailwind"],
      live: true,
      liveLink: "/widgets/weather",
    },
    {
      mainProject: false,
      linkText: "Currency Converter Widget",
      icon: <HiCurrencyEuro size={50} className="text-green-400" />,
      text: "Convert between 33 currencies using real-time API data.",
      newTab: false,
      techStack: ["JavaScript", "API", "HTML", "Tailwind"],
      live: true,
      liveLink: "/widgets/currency",
    },
    {
      mainProject: false,
      linkText: "IT 238 - Final Project",
      icon: <FaGlobe size={50} className="text-blue-500" />,
      text: "A travel guide website to France for my final project.",
      newTab: true,
      techStack: ["JavaScript", "CSS", "HTML"],
      live: false,
      liveLink: "https://github.com/RichardLechko/it238-finalproject",
    },
    {
      mainProject: false,
      linkText: "Loruki Website",
      icon: <FaRegFileLines size={50} className="text-blue-500" />,
      text: "A mockup website for a cloud hosting service.",
      newTab: true,
      techStack: ["HTML", "CSS"],
      live: false,
      liveLink: "https://github.com/RichardLechko/Loruki-Website",
    },
    {
      mainProject: false,
      linkText: "Personal Website (Deprecated)",
      icon: <DiGithubBadge size={50} />,
      text: "Source code for my web development portfolio.",
      newTab: true,
      techStack: ["HTML", "CSS", "JavaScript"],
      live: false,
      liveLink: "https://github.com/RichardLechko/RichardLechkoResume",
    },
  ];

  return (
    <div
      id="projects"
      className="container mx-auto px-4 pt-32 mb-20 flex flex-col items-center"
    >
      <h1 className="text-4xl mb-4 font-bold text-center max-[640px]:text-3xl max-[425px]:text-2xl">
        Projects:
      </h1>
      <div className="w-full max-w-[500px] aspect-square mx-auto max-[640px]:max-w-[380px] max-[375px]:max-w-[280px]">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
      <section className="mt-16">
        <h1 className="text-center text-3xl mb-8 font-bold">Main Projects</h1>
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
}) => {
  return (
    <div
      className={`flex flex-col h-full p-6 ${
        mainProject
          ? "bg-[#eaeae8] dark:bg-[#2D2D2D]"
          : "bg-[#D8D8D8] dark:bg-[#1E1E1E]"
      } rounded-xl shadow-lg transition-transform duration-300`}
    >
      <div className="flex-grow text-center">
        <div className="mb-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`inline-block ${
                mainProject
                  ? "bg-[#D0D0D0] dark:bg-[#4A4A4A] hover:bg-[#B8B8B8] dark:hover:bg-[#3A3A3A]"
                  : "bg-[#eaeae8] dark:bg-[#3B3B3B] hover:bg-[#D1D1D1] dark:hover:bg-[#2A2A2A]"
              } text-sm font-semibold py-2 px-3 rounded-full mr-2 transition duration-200 mb-4`}
            >
              {tech}
            </span>
          ))}
        </div>

        <h4
          className={`text-2xl mb-4 ${
            mainProject ? "font-bold" : "font-semibold"
          } dark:text-gray-200`}
        >
          {linkText}
        </h4>

        <div className="text-6xl mb-4 flex justify-center">
          <span className="text-[#3b82f6] dark:text-[#3b82f6]">{icon}</span>
        </div>

        <p className="text-lg h-20 overflow-hidden text-center dark:text-gray-400">
          {text}
        </p>
      </div>
      <a
        href={liveLink || "#"}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="mt-4 inline-block bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 py-2 px-4 rounded transition duration-200 hover:bg-blue-600 dark:hover:bg-blue-600 self-end mx-auto"
      >
        {live ? "View Site" : "View Repo"}
      </a>
    </div>
  );
};

export default Widgets;
