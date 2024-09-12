import { AiFillClockCircle } from "react-icons/ai";
import { HiSun, HiCurrencyEuro } from "react-icons/hi2";
import { FaGlobe, FaRegFileLines } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";

import React, { useEffect } from "react";
import { useScroll } from "../ScrollToTop.js";

const Widgets = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div id="widgets" className="container mx-auto px-4 py-8 mb-24">
      <div className="w-full mt-16 mb-24 mx-auto justify-around py-0 flex flex-wrap gap-4 font-bold text-center">
        <p className="text-2xl text-darkviolet font-bold">
          To show my understanding of JavaScript and Programming, I have made
          some widgets that have loads of functionality.
        </p>
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
