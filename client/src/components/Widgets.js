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

    // Add intersection observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe all project cards
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      card.classList.add("fade-in-hidden");
      // Add a stagger effect
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [scrollToTop]);

  const projects = [
    {
      linkText: t("projects.projects-list.northern-trust.linkText"),
      text: t("projects.projects-list.northern-trust.text"),
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      live: true,
      liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
      sourceLink:
        "https://github.com/RichardLechko/depaul-northern-trust-hackathon",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: t("projects.projects-list.freedom-butchers.linkText"),
      text: t("projects.projects-list.freedom-butchers.text"),
      techStack: ["Astro", "NodeJS", "Express", "SCSS", "ShadCN"],
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
        "Astro",
        "SCSS",
        "ShadCN",
        "Go",
        "TypeScript",
        "Supabase",
        "Docker",
        "Selenium",
      ],
      live: true,
      sourceLink: "",
      liveLink: "https://mma-scheduler.vercel.app/",
      inDevelopment: false,
      isPrivate: false,
    },
    {
      linkText: t("projects.projects-list.scarlet-hacks.linkText"),
      text: t("projects.projects-list.scarlet-hacks.text"),
      techStack: [
        "Next.js",
        "JavaScript",
        "Supabase",
        "Anthropic AI",
        "Node.js",
        "Tailwind"
      ],
      live: true,
      liveLink: "https://iit-hackathon.vercel.app/",
      sourceLink: "https://github.com/RichardLechko/scarlet-hacks-2025",
      inDevelopment: false,
      isPrivate: false,
    },
  ];

  return (
    <main id="projects" className="projects-container" lang={language}>
      <header>
        <h1 className="projects-title">
          <span className="content-backdrop">{t("projects.title-name")}</span>
        </h1>
      </header>

      <section className="projects-content">
        <div className="projects-grid">
          <div className="projects-grid-inner">
            {projects.map((project, index) => (
              <WidgetsCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
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
    <article className="project-card" lang={language}>
      <header className="project-header">
        <nav className="project-tech-stack" aria-label="Technologies used">
          {techStack.map((tech, index) => (
            <small key={index} className="tech-tag">
              {tech}
            </small>
          ))}
        </nav>

        {!isPrivate && !inDevelopment && (
          <nav className="project-links" aria-label="Project links">
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
          </nav>
        )}
        {inDevelopment && (
          <small className="development-badge">
            {t("projects.development")}
          </small>
        )}
      </header>

      <h2 className="project-title">{linkText}</h2>

      <div className="project-description">
        <p>
          {text
            .split(
              new RegExp(
                `(${
                  linkText.includes("Northern Trust")
                    ? t(
                        "projects.projects-list.northern-trust.highlightedText"
                      ).join("|")
                    : linkText.includes("Freedom Butchers")
                    ? t(
                        "projects.projects-list.freedom-butchers.highlightedText"
                      ).join("|")
                    : linkText.includes("Cloud Club")
                    ? t(
                        "projects.projects-list.cloud-project.highlightedText"
                      ).join("|")
                    : linkText.includes("MMA")
                    ? t("projects.projects-list.mma.highlightedText").join("|")
                    : linkText.includes("ScarletHacks")
                    ? t(
                        "projects.projects-list.scarlet-hacks.highlightedText"
                      ).join("|")
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
                  : linkText.includes("ScarletHacks")
                  ? t("projects.projects-list.scarlet-hacks.highlightedText")
                  : []
                ).includes(part) ? (
                  <strong className="highlight-text">{part}</strong>
                ) : (
                  part
                )}
              </React.Fragment>
            ))}
        </p>
      </div>
    </article>
  );
};

export default Widgets;
