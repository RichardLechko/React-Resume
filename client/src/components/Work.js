// client/src/components/Work.js
import React, { useRef, useEffect } from "react";
import { useTranslation } from "./language/LanguageContext";
import { renderHighlighted } from "../utils/highlight";
import workExperiences from "../data/work";
import styles from "./Work.module.css";

const Work = () => {
  const itemsRef = useRef([]);
  const { t, language } = useTranslation();

  useEffect(() => {
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

    const cards = document.querySelectorAll(".company-container");
    cards.forEach((card, index) => {
      card.classList.add("fade-in-hidden");
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main id="work" className="work-section">
      <header className="work-container">
        <h1>
          <span className="content-backdrop">{t("work.title")}</span>
        </h1>
      </header>

      <div className="work-content">
        <aside className="work-left">
          <div className="work-left-inner"></div>
        </aside>
        <section className="work-right">
          <div className="work-right-inner"></div>
          <div className={styles.workExperiences}>
            {workExperiences.map((experience, index) => (
              <Company
                key={experience.id}
                experience={experience}
                ref={(el) => (itemsRef.current[index] = el)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const Company = React.forwardRef(({ experience }, ref) => {
  const { t, language } = useTranslation();
  const base = `work.items.${experience.id}`;
  const endLabel = experience.isCurrent
    ? t("common.present")
    : experience.endDate;
  const descriptionsRaw = t(`${base}.descriptions`);
  const descriptions = Array.isArray(descriptionsRaw) ? descriptionsRaw : [];

  return (
    <article
      ref={ref}
      className={`${styles.companyContainer} company-container`}
      lang={language}
    >
      <div className={styles.companyInfo}>
        <figure className={styles.companyLogoContainer}>
          <img
            src={experience.logo}
            alt={`${t(`${base}.company`)} logo`}
            className={styles.companyLogoImg}
          />
        </figure>

        <header className={styles.companyHeader}>
          <time className={styles.companyDuration}>
            <span className="start-time">{experience.startDate}</span>
            {" - "}
            <span className="end-time">{endLabel}</span>
          </time>
          <h2 className={styles.companyName}>{t(`${base}.company`)}</h2>
          <h3 className={styles.companyPosition}>{t(`${base}.position`)}</h3>
          <p className={styles.companyAddress}>{t(`${base}.address`)}</p>
        </header>

        <nav className={styles.companyTools}>
          {experience.tools.map((tool, index) => (
            <small key={index} className={styles.companyTool}>
              {tool}
            </small>
          ))}
        </nav>

        <section className={styles.companyContent}>
          <ul className={styles.companyDescriptions}>
            {descriptions.map((desc, index) => (
              <li key={index} className={styles.companyDescriptionItem}>
                {renderHighlighted(desc)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
});

export default Work;
