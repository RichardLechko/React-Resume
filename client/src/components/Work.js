// client/src/components/Work.js
import React, { useRef, useEffect } from "react";
import { useTranslation } from "./language/LanguageContext";
import styles from "./Work.module.css";

const Work = () => {
  const itemsRef = useRef([]);
  const { t, language } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const cards = document.querySelectorAll('.company-container');
    cards.forEach((card, index) => {
      card.classList.add('fade-in-hidden');
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const workExperiences = [
    {
      companyName: t("work.work-list.preferred-risk-administrators.companyName"),
      position: t("work.work-list.preferred-risk-administrators.position"),
      address: t("work.work-list.preferred-risk-administrators.address"),
      startTime: t("work.work-list.preferred-risk-administrators.startTime"),
      endTime: t("work.work-list.preferred-risk-administrators.endTime"),
      descriptions: [
        t("work.work-list.preferred-risk-administrators.descriptions.0"),
        t("work.work-list.preferred-risk-administrators.descriptions.1"),
      ],
      logo: "/work-images/pris-logo-v2.png",
      tools: [
        "C#", "React", "Nextjs", "JavaScript", "Tailwind"
      ],
    },
    {
      companyName: t("work.work-list.hendrickson.companyName"),
      position: t("work.work-list.hendrickson.position"),
      address: t("work.work-list.hendrickson.address"),
      startTime: t("work.work-list.hendrickson.startTime"),
      endTime: t("work.work-list.hendrickson.endTime"),
      descriptions: [
        t("work.work-list.hendrickson.descriptions.0"),
        t("work.work-list.hendrickson.descriptions.1"),
      ],
      logo: "/work-images/hendrickson-logo.png",
      tools: [
        "PowerBi",
        "KPIs",
        "SQL",
        "Microsoft Products",
        "VPNs",
        "QAD",
        "ERP Systems",
      ],
    },
    {
      companyName: t("work.work-list.rl-it-firm.companyName"),
      position: t("work.work-list.rl-it-firm.position"),
      address: t("work.work-list.rl-it-firm.address"),
      startTime: t("work.work-list.rl-it-firm.startTime"),
      endTime: t("work.work-list.rl-it-firm.endTime"),
      descriptions: [
        t("work.work-list.rl-it-firm.descriptions.0"),
        t("work.work-list.rl-it-firm.descriptions.1"),
      ],
      logo: "/work-images/rl-it-firm-logo.png",
      tools: [
        "Astro",
        "Tailwind",
        "React",
        "Consulting",
        "SASS",
        "TypeScript",
        "Node.js",
        "ShadCN",
      ],
    },
  ];

  return (
    <main id="work" className="work-section">
      <header className="work-container">
        <h1>
          <span className="content-backdrop">{t("work.title-name")}</span>
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
                key={index}
                {...experience}
                ref={(el) => (itemsRef.current[index] = el)}
                className="work-experience-item"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const Company = React.forwardRef(
  (
    { companyName, position, address, startTime, endTime, descriptions, logo, tools },
    ref
  ) => {
    const { t, language } = useTranslation();

    return (
      <article ref={ref} className={`${styles.companyContainer} company-container`} lang={language}>
        <div className={styles.companyInfo}>
          <figure className={styles.companyLogoContainer}>
            <img
              src={logo}
              alt={`${t(companyName)} logo`}
              className={styles.companyLogoImg}
            />
          </figure>

          <header className={styles.companyHeader}>
            <time className={styles.companyDuration}>
              <span className="start-time">{t(startTime)}</span>
              {" - "}
              <span className="end-time">{t(endTime)}</span>
            </time>
            <h2 className={styles.companyName}>{t(companyName)}</h2>
            <h3 className={styles.companyPosition}>{t(position)}</h3>
            <p className={styles.companyAddress}>{t(address)}</p>
          </header>

          <nav className={styles.companyTools}>
            {tools.map((tool, index) => (
              <small key={index} className={styles.companyTool}>
                {tool}
              </small>
            ))}
          </nav>

          <section className={styles.companyContent}>
            <ul className={styles.companyDescriptions}>
              {descriptions.map((desc, index) => {
                const parts = desc
                  .split(
                    new RegExp(
                      `(${companyName.includes("Hendrickson")
                        ? t("work.work-list.hendrickson.highlightedText").join("|")
                        : companyName.includes("RL IT Firm")
                          ? t("work.work-list.rl-it-firm.highlightedText").join("|")
                          : companyName.includes("Preferred Risk")
                            ? t("work.work-list.preferred-risk-administrators.highlightedText").join("|")
                            : ""
                      })`,
                      "g"
                    )
                  )
                  .map((part, index) => (
                    <React.Fragment key={index}>
                      {(companyName.includes("Hendrickson")
                        ? t("work.work-list.hendrickson.highlightedText")
                        : companyName.includes("RL IT Firm")
                          ? t("work.work-list.rl-it-firm.highlightedText")
                          : companyName.includes("Preferred Risk")
                            ? t("work.work-list.preferred-risk-administrators.highlightedText")
                            : []
                      ).includes(part) ? (
                        <strong className="highlight-text">{part}</strong>
                      ) : (
                        part
                      )}
                    </React.Fragment>
                  ));
                return (
                  <li key={index} className={styles.companyDescriptionItem}>
                    {parts}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </article>
    );
  }
);

export default Work;