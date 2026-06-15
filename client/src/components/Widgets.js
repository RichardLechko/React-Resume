// client/src/components/Widgets.js
import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { useTranslation } from "./language/LanguageContext";
import { renderHighlighted } from "../utils/highlight";
import projects from "../data/projects";
import { LuChevronsLeftRight, LuMousePointerClick } from "react-icons/lu";
import styles from "./Widgets.module.css";

const Widgets = () => {
  const { t, language } = useTranslation();
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      card.classList.add("fade-in-hidden");
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [scrollToTop]);

  return (
    <main id="projects" className="projects-container" lang={language}>
      <header>
        <h1 className="projects-title">
          <span className="content-backdrop">{t("projects.title")}</span>
        </h1>
      </header>

      <section className="projects-content">
        <div className="projects-grid">
          <div className={styles.projectsGridInner}>
            {projects.map((project) => (
              <WidgetsCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const WidgetsCard = ({ project }) => {
  const { t, language } = useTranslation();
  const base = `projects.items.${project.id}`;
  const { techStack, liveLink, sourceLink, inDevelopment, isPrivate } = project;

  return (
    <article className={`${styles.projectCard} project-card`} lang={language}>
      <header className={styles.projectHeader}>
        <nav className={styles.projectTechStack} aria-label="Technologies used">
          {techStack.map((tech, index) => (
            <small key={index} className={styles.techTag}>
              {tech}
            </small>
          ))}
        </nav>

        {!isPrivate && !inDevelopment && (
          <nav className={styles.projectLinks} aria-label="Project links">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLinkButton}
                aria-label={t("common.viewSource")}
              >
                <LuChevronsLeftRight size={20} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLinkButton}
                aria-label={t("common.viewLive")}
              >
                <LuMousePointerClick size={20} />
              </a>
            )}
          </nav>
        )}
        {inDevelopment && (
          <small className={styles.developmentBadge}>
            {t("projects.inDevelopment")}
          </small>
        )}
      </header>

      <h2 className={styles.projectTitle}>{t(`${base}.name`)}</h2>

      <div className={styles.projectDescription}>
        <p>{renderHighlighted(t(`${base}.description`))}</p>
      </div>
    </article>
  );
};

export default Widgets;
