import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";

const Widgets = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      linkText: "DePaul x Northern Trust Competition",
      text: "A finance application developed for the Northern Trust x DePaul University competition. This project got us 3rd place in the competition.",
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: "Freedom Butchers Freelance Work",
      text: "A full-fledged e-commerce site developed for a small local business called 'Freedom Butchers'.",
      techStack: ["Astro", "Node.js", "Express", "SCSS", "Docker", "ShadCN"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: "DePaul Cloud Club Research",
      text: "Collaborating with graduate students on a cloud project, enhancing frontend skills and contributing to innovative solutions.",
      techStack: [
        "Next.js",
        "SCSS",
        "Node.js",
        "Docker",
        "Express",
        "TypeScript",
        "Django",
      ],
      live: false,
      liveLink: "",
      inDevelopment: true,
      isPrivate: true,
    },
    {
      linkText: "MMA Scheduler",
      text: "This MMA software provides a comprehensive platform for scheduling and tracking MMA events, including fighter details, match dates, and categories. It aggregates and displays real-time data through web scraping, enabling users to stay updated with upcoming fights and results.",
      techStack: [
        "Next.js",
        "SCSS",
        "ShadCN",
        "TypeScript",
        "Redux",
        "Go",
        "Supabase",
        "Cypress",
        "Jest",
        "Docker",
        "AWS",
      ],
      live: false,
      liveLink: "",
      inDevelopment: true,
      isPrivate: true,
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-title">
        <span className="content-backdrop">Projects</span>
      </h1>

      <section className="projects-content">
        <div className="projects-grid">
          <div className="projects-grid-inner">
            {projects.map((project, index) => (
              <WidgetsCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const WidgetsCard = ({
  linkText,
  text,
  techStack,
  live,
  liveLink,
  inDevelopment,
  isPrivate,
}) => {
  return (
    <div className="project-card">
      <div className="project-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-title">{linkText}</div>

      <div className="project-description">
        <p>{text}</p>
      </div>

      {inDevelopment && <p className="development-badge">*In Development*</p>}

      <div className="project-links">
        {!isPrivate && (
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            {live ? "View Site" : "View Repo"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Widgets;
