// App.js
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Contact from "./components/Contact.js";
import Widgets from "./components/widgets/Widgets.js";
import Footer from "./components/Footer.js";
import Currency from "./components/widgets/Currency.js";
import Timer from "./components/widgets/Timer.js";
import Weather from "./components/widgets/Weather.js";
import MainPage from "./components/MainPage.js";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  const personalRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);

  const refs = {
    personal: personalRef,
    skills: skillsRef,
    work: workRef,
    education: educationRef,
    publications: publicationsRef,
  };

  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is here */}
      <div className="flex min-h-screen overflow-hidden">
        <NavBar 
          isSidebarVisible={isSidebarVisible} 
          toggleSidebar={toggleSidebar} 
          refs={refs}
        />
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isSidebarVisible ? "ml-20" : "ml-0"
          }`}
        >
          <header className="flex justify-between items-center p-8 bg-gray-800 text-white fixed w-full top-0 left-0 z-30 transition-all duration-300">
            <h1
              className={`text-2xl transition-all duration-300 ${
                isSidebarVisible ? "ml-20" : "ml-0"
              }`}
            >
              Richard Lechko - IT Student @ DePaul University
            </h1>
            <button
              onClick={toggleSidebar}
              className="p-2 bg-blue-500 text-white rounded"
            >
              {isSidebarVisible ? "Close Sidebar" : "Open Sidebar"}
            </button>
          </header>
          <main className="flex-1 flex flex-col pt-24 overflow-hidden">
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    personalRef={personalRef}
                    skillsRef={skillsRef}
                    workRef={workRef}
                    educationRef={educationRef}
                    publicationsRef={publicationsRef}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/widgets" element={<Widgets />} />
              <Route path="/widgets/currency" element={<Currency />} />
              <Route path="/widgets/timer" element={<Timer />} />
              <Route path="/widgets/weather" element={<Weather />} />
            </Routes>
            <Footer refs={refs} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
