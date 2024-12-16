import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { useTranslation } from "./language/LanguageContext";
import LanguageSelector from "./language/LanguageSelector";

const Widgets = () => {
  const { t, language } = useTranslation();
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const projects = [
    {
      /* linkText: "DePaul x Northern Trust Competition", */
      linkText: t("projects.projects-list.northern-trust.linkText"),
      text: t("projects.projects-list.northern-trust.text"),
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: t("projects.projects-list.freedom-butchers.linkText"),
      text: t("projects.projects-list.freedom-butchers.text"),
      techStack: ["Astro", "Node.js", "Express", "SCSS", "Docker", "ShadCN"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: t("projects.projects-list.cloud-project.linkText"),
      text: t("projects.projects-list.cloud-project.text"),
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
      linkText: t("projects.projects-list.mma.linkText"),
      text: t("projects.projects-list.mma.text"),
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
    <div id="projects" className="projects-container" lang={language}>
      <h1 className="projects-title">
        <span className="content-backdrop">{t("projects.title-name")}</span>
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
  const { t, language } = useTranslation();

  return (
    <div className="project-card" lang={language}>
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

      {inDevelopment && (
        <p className="development-badge">{t("projects.development")}</p>
      )}

      <div className="project-links">
        {!isPrivate && (
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            {t("projects.view-site")}
          </a>
        )}
      </div>
    </div>
  );
};

export default Widgets;
