import React, { useState, useRef, lazy, Suspense, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import { ScrollProvider } from "./components/ScrollToTop.js";
import ShareSheet from "./components/SharedSheet.js";
import ErrorBoundary from "./components/ErrorBoundary.js";

const Contact = lazy(() => import("./components/Contact.js"));
const Widgets = lazy(() => import("./components/widgets/Widgets.js"));
const Currency = lazy(() => import("./components/widgets/Currency.js"));
const Timer = lazy(() => import("./components/widgets/Timer.js"));
const Weather = lazy(() => import("./components/widgets/Weather.js"));
const MainPage = lazy(() => import("./components/MainPage.js"));

function App() {
  const [isShareSheetVisible, setShareSheetVisible] = useState(false);
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

  const toggleShareSheet = useCallback(() => {
    setShareSheetVisible((prevState) => !prevState);
  }, []);

  const shareButtonClass =
    "fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-lg";

  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex min-h-screen flex-1">
              <NavBar refs={refs} />
              <div className="flex-1 flex flex-col transition-all duration-300">
                <main className="flex-1 flex flex-col pt-24 transition-all duration-300">
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
                            />
                          }
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/widgets" element={<Widgets />} />
                        <Route
                          path="/widgets/currency"
                          element={<Currency />}
                        />
                        <Route path="/widgets/timer" element={<Timer />} />
                        <Route path="/widgets/weather" element={<Weather />} />
                        {Object.keys(refs).map((section) => (
                          <Route
                            key={section}
                            path={`/${section}`}
                            element={
                              <MainPageSection section={section} refs={refs} />
                            }
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

      <button onClick={toggleShareSheet} className={shareButtonClass}>
        Share
      </button>
      <ShareSheet isVisible={isShareSheetVisible} onClose={toggleShareSheet} />
    </div>
  );
}

const MainPageSection = React.memo(({ section, refs }) => {
  const scrollToSection = () => {
    const ref = refs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scrollToSection();
  }, [section]);

  return null;
});

export default App;
