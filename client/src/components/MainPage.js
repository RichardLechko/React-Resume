import React, { useRef, Suspense } from "react";

// Lazy load components
const Personal = React.lazy(() => import("./Personal.js"));
const TechnicalSkills = React.lazy(() => import("./TechnicalSkills.js"));
const NonTechnicalSkills = React.lazy(() => import("./NonTechnicalSkills.js"));
const Work = React.lazy(() => import("./Work.js"));
const Education = React.lazy(() => import("./Education.js"));
const Publications = React.lazy(() => import("./Publications.js"));
const Coursework = React.lazy(() => import("./Coursework.js"));

const MainPage = ({
  personalRef,
  workRef,
  educationRef,
  publicationsRef,
  skillsRef,
}) => {
  return (
    <div className="overflow-x-hidden relative">
      <Suspense fallback={<div>Loading Personal...</div>}>
        <section id="personal" ref={personalRef}>
          <Personal />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Technical Skills...</div>}>
        <section id="technical-skills" ref={skillsRef}>
          <TechnicalSkills />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Non-Technical Skills...</div>}>
        <section id="non-technical-skills">
          <NonTechnicalSkills />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Work Experience...</div>}>
        <section id="work" ref={workRef}>
          <Work />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Education...</div>}>
        <section id="education" ref={educationRef}>
          <Education />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Coursework...</div>}>
        <section id="relevantCoursework">
          <Coursework />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Publications...</div>}>
        <section id="publications" ref={publicationsRef}>
          <Publications />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
