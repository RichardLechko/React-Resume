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
          <div className="flex flex-col min-h-screen">
            <div className="flex min-h-screen flex-1">
              <NavBar
                refs={refs} // Pass all refs here
              />

              <div
                className={`flex-1 flex flex-col transition-all duration-300`}
              >
                <main
                  className={`flex-1 flex flex-col pt-24 transition-all duration-300`}
                >
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <MainPage
                          personalRef={personalRef}
                          workRef={workRef}
                          educationRef={educationRef}
                          publicationsRef={publicationsRef}
                          skillsRef={skillsRef}
                        />
                      }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/widgets" element={<Widgets />} />
                    <Route path="/widgets/currency" element={<Currency />} />
                    <Route path="/widgets/timer" element={<Timer />} />
                    <Route path="/widgets/weather" element={<Weather />} />
                  </Routes>
                </main>
              </div>
            </div>
            <Footer refs={refs} />
          </div>
        </ScrollProvider>
      </Router>
    </div>
  );
}

export default App;
