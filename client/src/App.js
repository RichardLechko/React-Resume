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
import { ScrollProvider } from "./components/ScrollToTop.js";

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
    <div className="overflow-x-hidden">
      <Router>
        <ScrollProvider>
          <div className="flex min-h-screen">
            <NavBar
              isSidebarVisible={isSidebarVisible}
              toggleSidebar={toggleSidebar}
              refs={refs}
              className={`transition-all duration-300 ${
                isSidebarVisible ? "w-64 sm:w-72 md:w-80" : "w-0"
              }`}
              style={{ maxWidth: isSidebarVisible ? "16rem" : "0" }}
            />

            <div
              className={`flex-1 flex flex-col transition-all duration-300 ${
                isSidebarVisible
                  ? "max-[768px]:ml-[-1rem] max-[425px]:ml-[-2.5rem]"
                  : "ml-0"
              }`}
            >
              <header className="flex justify-between items-center p-4 sm:p-6 md:p-8 bg-gray-800 text-white fixed w-full top-0 left-0 z-10 transition-all duration-300">
                <h1
                  className={`text-2xl mr-16 transition-all duration-300 ${
                    isSidebarVisible ? "ml-[5rem]" : "ml-0"
                  } max-[640px]:text-base max-[425px]:text-sm max-[425px]:ml-14 max-[425px]:text-center max-[375px]:ml-8`}
                >
                  Richard Lechko - IT Student @ DePaul University
                </h1>
                <button
                  onClick={toggleSidebar}
                  className="p-2 bg-blue-500 text-white font-bold rounded text-lg max-[1024px]:text-base max-[640px]:p-1 max-[425px]:text-sm max-[640px]:text-sm"
                >
                  {isSidebarVisible ? "Close Sidebar" : "Open Sidebar"}
                </button>
              </header>
              <main
                className={`flex-1 overflow-y-auto flex flex-col pt-24 transition-all duration-300 ${
                  isSidebarVisible ? "ml-20" : "ml-0"
                }`}
              >
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
        </ScrollProvider>
      </Router>
    </div>
  );
}

export default App;
