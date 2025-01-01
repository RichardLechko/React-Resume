import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { useTranslation } from "./language/LanguageContext";
import { LuChevronsLeftRight, LuMousePointerClick } from "react-icons/lu";
import LanguageSelector from "./language/LanguageSelector";

const Widgets = () => {
  const { t, language } = useTranslation();
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  const projects = [
    {
      linkText: t("projects.projects-list.northern-trust.linkText"),
      text: t("projects.projects-list.northern-trust.text"),
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      sourceLink: "https://github.com/RichardLechko/depaul-northern-trust-hackathon",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: t("projects.projects-list.freedom-butchers.linkText"),
      text: t("projects.projects-list.freedom-butchers.text"),
      techStack: ["Astro", "Node.js", "Express", "SCSS", "Docker", "ShadCN"],
      live: true,
      liveLink: "https://freedombutchers.vercel.app/",
      sourceLink: "https://github.com/RichardLechko/superior-sphere",
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
      sourceLink: "https://github.com/RichardLechko/depaul-cloud-project",
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
      sourceLink: "https://github.com/RichardLechko/MMA-Scheduler",
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
  liveLink,
  sourceLink,
  inDevelopment,
  isPrivate,
}) => {
  const { t, language } = useTranslation();

  return (
    <div className="project-card" lang={language}>
      <div className="project-header">
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        {!isPrivate && !inDevelopment && (
          <div className="project-links">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button"
                aria-label="View Source Code"
              >
                <LuChevronsLeftRight size={20} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button"
                aria-label="View Live Site"
              >
                <LuMousePointerClick size={20} />
              </a>
            )}
          </div>
        )}
        {inDevelopment && (
          <p className="development-badge">{t("projects.development")}</p>
        )}
      </div>

      <div className="project-title">{linkText}</div>

      <div className="project-description">
        <p>
          {text
            .split(
              new RegExp(
                `(${
                  linkText.includes("Northern Trust")
                    ? t("projects.projects-list.northern-trust.highlightedText").join("|")
                    : linkText.includes("Freedom Butchers")
                    ? t("projects.projects-list.freedom-butchers.highlightedText").join("|")
                    : linkText.includes("Cloud Club")
                    ? t("projects.projects-list.cloud-project.highlightedText").join("|")
                    : linkText.includes("MMA")
                    ? t("projects.projects-list.mma.highlightedText").join("|")
                    : ""
                })`,
                "g"
              )
            )
            .map((part, index) => (
              <React.Fragment key={index}>
                {(linkText.includes("Northern Trust")
                  ? t("projects.projects-list.northern-trust.highlightedText")
                  : linkText.includes("Freedom Butchers")
                  ? t("projects.projects-list.freedom-butchers.highlightedText")
                  : linkText.includes("Cloud Club")
                  ? t("projects.projects-list.cloud-project.highlightedText")
                  : linkText.includes("MMA")
                  ? t("projects.projects-list.mma.highlightedText")
                  : []
                ).includes(part) ? (
                  <span className="highlight-text">{part}</span>
                ) : (
                  part
                )}
              </React.Fragment>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Widgets;
