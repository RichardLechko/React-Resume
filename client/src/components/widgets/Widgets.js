import { AiFillClockCircle } from "react-icons/ai";
import { HiSun, HiCurrencyEuro } from "react-icons/hi2";
import { FaGlobe, FaRegFileLines } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUniversity, FaUser } from "react-icons/fa";
import { GiMeatCleaver } from "react-icons/gi";
import React, { useEffect } from "react";
import { useScroll } from "../ScrollToTop.js";
import { Radar } from "react-chartjs-2";
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

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      link: "https://depaul-northern-trust-hackathon.vercel.app/",
      linkText: "DePaul x Northern Trust Competition",
      icon: <FaUniversity size={50} />,
      text: "A finance application developed for the Northern Trust x DePaul University competition. This project got us 3rd place in the competition.",
      newTab: true,
    },
    {
      link: "https://richardlechko.com",
      linkText: "Personal Portfolio",
      icon: <FaUser size={50} />,
      text: "My web dev portfolio, showcasing personal aspects of my life, education, skills, and more!",
      newTab: true,
    },
    {
      link: "https://freedombutchers.vercel.app/",
      linkText: "Freedom Butchers Freelance Work",
      icon: <GiMeatCleaver size={50} />,
      text: "A full-fledged e-commerce site developed for a small local business called 'Freedom Butchers'.",
      newTab: true,
    },
    {
      link: "https://fintech-solutions-richard-lechko.netlify.app/",
      linkText: "Fintech App",
      icon: <BsCurrencyDollar size={50} />,
      text: "An app showcasing CSS skills.",
      newTab: false,
    },
    {
      link: "/widgets/timer",
      linkText: "Timer Widget",
      icon: <AiFillClockCircle size={50} />,
      text: "A timer widget that counts down from a set time.",
      newTab: false,
    },
    {
      link: "/widgets/weather",
      linkText: "Weather App Widget",
      icon: <HiSun size={50} className="text-yellow-400" />,
      text: "Enter a city to get real-time weather data.",
      newTab: false,
    },
    {
      link: "/widgets/currency",
      linkText: "Currency Converter Widget",
      icon: <HiCurrencyEuro size={50} className="text-green-400" />,
      text: "Convert between 33 currencies using real-time API data.",
      newTab: false,
    },
    {
      link: "https://it238-finalproject.vercel.app/",
      linkText: "IT 238 - Final Project",
      icon: <FaGlobe size={50} className="text-blue-500" />,
      text: "A travel guide website to France for my final project.",
      newTab: true,
    },
    {
      link: "https://loruki-website-gray.vercel.app/index.html",
      linkText: "Loruki Website",
      icon: <FaRegFileLines size={50} className="text-blue-500" />,
      text: "A mockup website for a cloud hosting service.",
      newTab: true,
    },
    {
      link: "https://github.com/RichardLechko/RichardLechkoResume",
      linkText: "Personal Website (Deprecated)",
      icon: <DiGithubBadge size={50} className="text-white" />,
      text: "Source code for my web development portfolio.",
      newTab: true,
    },
  ];

  return (
    <div
      id="widgets"
      className="container mx-auto px-4 py-8 mb-24 flex flex-col items-center"
    >
      <div className="text-center mb-8">
        <p className="text-2xl text-darkviolet font-bold">
          To show my understanding of JavaScript, Programming, and in general
          problem-solving. I have included a bunch of projects that I have
          worked on.
        </p>
      </div>
      <section>
        <h2 className="text-center text-3xl mb-8 font-bold text-darkviolet">
          Main Projects
        </h2>
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <WidgetsCard key={index} {...project} mainProject />
            ))}
          </div>
        </div>
        <h2 className="text-center text-3xl mb-8 font-bold">
          Smaller Projects
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.slice(3).map((project, index) => (
              <WidgetsCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const WidgetsCard = ({ link, linkText, icon, text, newTab, mainProject }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 h-full ${
        mainProject
          ? "bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-blue-700 hover:shadow-2xl hover:scale-105"
          : "bg-gray-700"
      } text-white rounded-lg shadow-lg transition-transform duration-300`}
    >
      <div className="text-center flex-grow">
        <h4
          className={`text-2xl mb-4 ${
            mainProject ? "font-bold" : "font-semibold"
          }`}
        >
          <a
            href={link}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="hover:underline"
            aria-label={`Link to ${linkText}`}
          >
            {linkText}
          </a>
        </h4>
        <div className="text-6xl mb-4 flex justify-center">{icon}</div>
        <p className="text-lg h-20 overflow-hidden text-center">{text}</p>
      </div>
    </div>
  );
};

export default Widgets;
