import React, { Suspense, useState, useEffect } from "react";

const Personal = React.lazy(() => import("./Personal.js"));
const TechnicalSkills = React.lazy(() => import("./TechnicalSkills.js"));
const Work = React.lazy(() => import("./Work.js"));
const Education = React.lazy(() => import("./Education.js"));
const Publications = React.lazy(() => import("./Publications.js"));
const Coursework = React.lazy(() => import("./Coursework.js"));
const Contact = React.lazy(() => import("./Contact.js"));
const Projects = React.lazy(() => import("./Widgets.js"));

const MainPage = ({
  personalRef,
  workRef,
  educationRef,
  publicationsRef,
  skillsRef,
  contactRef,
  projectsRef,
}) => {
  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "personal", ref: personalRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "work", ref: workRef },
        { id: "education", ref: educationRef },
        { id: "publications", ref: publicationsRef },
        { id: "contact", ref: contactRef },
      ];

      // Loop through sections and determine which section is in view
      for (const section of sections) {
        const rect = section.ref.current.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.2
        ) {
          setActiveSection(section.id); // Update active section
          break; // Stop at the first visible section
        }
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    personalRef,
    workRef,
    educationRef,
    publicationsRef,
    skillsRef,
    contactRef,
    projectsRef,
  ]);

  return (
    <div className="overflow-x-hidden relative min-h-screen">
      <Suspense
        fallback={
          <div className="loading-spinner min-h-screen">Loading...</div>
        }
      >
        <section
          id="personal"
          ref={personalRef}
          className="pt-40 container mx-auto px-4 max-[1024px]:pt-32"
        >
          <Personal />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className="container flex flex-col mx-auto pt-40"
        >
          <Projects />
        </section>
        <section
          id="work"
          ref={workRef}
          className="pt-40 container mx-auto px-4"
        >
          <Work />
        </section>
        <section
          id="education"
          ref={educationRef}
          className="container flex flex-col mx-auto pt-44 mb-24"
        >
          <Education />
        </section>
        <section
          id="publications"
          ref={publicationsRef}
          className="container flex flex-col mx-auto pt-16"
        >
          <Publications />
        </section>
        <section
          id="relevantCoursework"
          className="container flex flex-col mx-auto pt-40"
        >
          <Coursework />
        </section>
        <section
          id="skills"
          ref={skillsRef}
          className="pt-40 px-4 container mx-auto"
        >
          <TechnicalSkills />
        </section>

        <section
          id="contact"
          ref={contactRef}
          className="container flex flex-col mx-auto pt-48"
        >
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
