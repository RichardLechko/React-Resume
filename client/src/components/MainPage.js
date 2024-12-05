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
  setActiveSection, // Prop to set active section in the navbar
}) => {
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActive(sectionId);
            setActiveSection(sectionId); // Notify NavBar about the active section
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value to change when a section is considered "in view"
      }
    );

    // List of sections to observe
    const sections = [
      personalRef.current,
      workRef.current,
      educationRef.current,
      publicationsRef.current,
      skillsRef.current,
      contactRef.current,
      projectsRef.current,
    ];

    // Observe all sections
    sections.forEach((section) => section && observer.observe(section));

    // Clean up observer on unmount
    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, [
    personalRef,
    workRef,
    educationRef,
    publicationsRef,
    skillsRef,
    contactRef,
    projectsRef,
    setActiveSection,
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
          className={`pt-40 container mx-auto px-4 ${
            activeSection === "personal" ? "outline" : ""
          }`}
        >
          <Personal />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className={`container flex flex-col mx-auto pt-40 ${
            activeSection === "projects" ? "outline" : ""
          }`}
        >
          <Projects />
        </section>
        <section
          id="work"
          ref={workRef}
          className={`pt-40 container mx-auto px-4 ${
            activeSection === "work" ? "outline" : ""
          }`}
        >
          <Work />
        </section>
        <section
          id="education"
          ref={educationRef}
          className={`container flex flex-col mx-auto pt-44 mb-24 ${
            activeSection === "education" ? "outline" : ""
          }`}
        >
          <Education />
        </section>
        <section
          id="publications"
          ref={publicationsRef}
          className={`container flex flex-col mx-auto pt-16 ${
            activeSection === "publications" ? "outline" : ""
          }`}
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
          className={`pt-40 px-4 container mx-auto ${
            activeSection === "skills" ? "outline" : ""
          }`}
        >
          <TechnicalSkills />
        </section>
        <section
          id="contact"
          ref={contactRef}
          className={`container flex flex-col mx-auto pt-48 ${
            activeSection === "contact" ? "outline" : ""
          }`}
        >
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
