import React, { useRef, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import { ScrollProvider } from "./components/ScrollToTop.js";
import StarryBackground from "./components/Background.js";

const ErrorBoundary = lazy(() => import("./components/ErrorBoundary.js"));
const Currency = lazy(() => import("./components/widgets/Currency.js"));
const Timer = lazy(() => import("./components/widgets/Timer.js"));
const Weather = lazy(() => import("./components/widgets/Weather.js"));
const MainPage = lazy(() => import("./components/MainPage.js"));

function App() {
  const personalRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const refs = {
    personal: personalRef,
    skills: skillsRef,
    work: workRef,
    education: educationRef,
    publications: publicationsRef,
    contact: contactRef,
    projects: projectsRef,
  };

  return (
    <div className="min-h-screen">
      <StarryBackground />
      <Router>
        <ScrollProvider>
          <div className="flex flex-col min-h-screen z-0">
            <div className="flex min-h-screen flex-1">
              <NavBar refs={refs} />
              <div className="flex-1 flex flex-col">
                <main className="flex-1 flex flex-col pt-24">
                  <Suspense fallback={<div>Loading...</div>}>
                    <ErrorBoundary>
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
                              contactRef={contactRef}
                              projectsRef={projectsRef}
                            />
                          }
                        />
                        <Route
                          path="/widgets/currency"
                          element={<Currency />}
                        />
                        <Route path="/widgets/timer" element={<Timer />} />
                        <Route path="/widgets/weather" element={<Weather />} />
                        {/* Dynamic routes for the sections */}
                        {Object.keys(refs).map((section) => (
                          <Route
                            key={section}
                            path={`/${section}`}
                            element={<MainPage section={section} refs={refs} />}
                          />
                        ))}
                      </Routes>
                    </ErrorBoundary>
                  </Suspense>
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
