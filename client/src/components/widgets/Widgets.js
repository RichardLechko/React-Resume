import { AiFillClockCircle } from "react-icons/ai";
import { HiSun, HiCurrencyEuro } from "react-icons/hi2";
import { FaGlobe, FaRegFileLines } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";

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
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Background color of the cobweb
        borderColor: "rgba(54, 162, 235, 1)", // Border color of the cobweb
        borderWidth: 3, // Thickness of the cobweb lines
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Color of each point
        pointBorderColor: "#fff", // Border color of each point
        pointHoverBackgroundColor: "#fff", // Hover color for each point
        pointHoverBorderColor: "rgba(54, 162, 235, 1)", // Hover border color
        pointRadius: 4, // Size of each point
        pointHoverRadius: 7, // Hover size of each point
        fill: true, // Fill the cobweb
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true, // Show angle lines connecting the labels
        },
        grid: {
          color: "rgba(255, 99, 132, 0.5)", // Cobweb line color
          lineWidth: 2, // Cobweb line thickness
        },
        suggestedMin: 0,
        suggestedMax: 10, // Maximum level of expertise (0 to 10 scale)
        ticks: {
          display: false, // Hide the numbers
        },
        pointLabels: {
          font: {
            size: 18,
          },
          display: true, // Show or hide the skill names (labels)
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the "Expertise Level" label at the top
      },
    },
  };

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div id="widgets" className="container mx-auto px-4 py-8 mb-24">
      <div className="w-full mt-16 mb-8 mx-auto justify-around py-0 flex flex-wrap gap-4 font-bold text-center">
        <p className="text-2xl text-darkviolet font-bold">
          To show my understanding of JavaScript, Programming, and in general
          problem solving. I have inclued a bunch of projects that I have worked
          on.
        </p>
      </div>
      <div className="w-full flex justify-center mb-16">
        <div className="w-[500px] h-[500px]">
          {" "}
          {/* Set specific width and height for the chart */}
          <h2 className="text-center text-lg mb-2"></h2>
          <Radar data={data} options={options} />
        </div>
      </div>
      <section className="flex flex-wrap justify-center gap-8 px-4 ">
        <WidgetsCard
          link={"/widgets/timer"}
          linkText={"Timer Widget"}
          icon={<AiFillClockCircle size={50} />}
          text={
            "This is a widget that represents a timer. You enter a time, and when you press start, the timer counts down."
          }
          newTab={false}
        />
        <WidgetsCard
          link={"/widgets/weather"}
          linkText={"Weather App Widget"}
          icon={<HiSun size={50} className="text-yellow-300" />}
          text={
            "This is a weather app, you enter the city and you get the weather and other useful data."
          }
          newTab={false}
        />
        <WidgetsCard
          link={"/widgets/currency"}
          linkText={"Currency Converter Widget"}
          icon={<HiCurrencyEuro size={50} className="text-green-400" />}
          text={
            "This is a currency converter, it can convert currencies from 33 different currencies, that are updated real time using API."
          }
          newTab={false}
        />
        <WidgetsCard
          link={"https://it238-finalproject.vercel.app/"}
          linkText={"IT 238 - Final Project"}
          icon={<FaGlobe size={50} className="text-blue-400" />}
          text={
            "For my IT 238: Interactive Web Scripting class at DePaul, our final project was to create a website. I chose to make my website on a travel guide to France."
          }
          newTab={true}
        />
        <WidgetsCard
          link={"https://loruki-website-gray.vercel.app/index.html"}
          linkText={"Loruki Website"}
          icon={<FaRegFileLines size={50} className="text-blue-400" />}
          text={
            "This is a website to show off sleek design. It is a mockup of a cloud hosting site, with no real products or any business, just to demonstrate designs."
          }
          newTab={true}
        />
        <WidgetsCard
          link="https://github.com/RichardLechko/RichardLechkoResume"
          linkText="Personal Website (Deprecated)"
          icon={<DiGithubBadge size={50} className="text-white" />}
          text="Explore the source code of my project. This repository contains the code for a website I built, showcasing my skills in web development."
          newTab={true}
        />
      </section>
    </div>
  );
};

const WidgetsCard = ({ link, linkText, icon, text, newTab }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-md max-w-sm w-full">
      <div className="text-center mt-4 mx-2 mb-6">
        <h4 className="text-xl mb-4">
          <a
            href={link}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="hover:underline"
          >
            {linkText}
          </a>
        </h4>
        <div className="text-5xl mb-4 flex justify-center">{icon}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Widgets;
