// client/src/components/Education.js
import React, { useEffect } from "react";
import { useTranslation } from "./language/LanguageContext";
import styles from "./Education.module.css";

const Education = () => {
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

    const cards = document.querySelectorAll('.education-card');
    cards.forEach((card, index) => {
      card.classList.add('fade-in-hidden');
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="education" lang={language}>
      <header>
        <h1 className="education-heading">
          <span className="content-backdrop">{t("education.heading")}</span>
        </h1>
      </header>

      <section className={styles.educationGrid}>
        <article className={`${styles.educationCard} education-card`}>
          <header className="education-header">
            <h2 className={styles.educationSubheading}>
              {t("education.current_program")}
            </h2>
          </header>

          <div className={styles.educationDetails}>
            <p className={styles.educationText}>
              {t("education.current_program_description_1")}{" "}
              <strong>
                <a 
                  className={styles.educationLink}
                  href="https://www.depaul.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DePaul University website"
                >
                  {t("education.current_program_description_2")}
                </a>
              </strong>
            </p>
            <p className={styles.educationText}>
              <strong className={styles.educationHighlight}>
                {t("education.bachelor_degree")}
              </strong>
            </p>
            <p className={styles.educationGradText}>
              {t("education.expected_graduation")}:{" "}
              <strong className={styles.educationHighlight}>
                {t("education.expected_graduation_date")}
              </strong>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Education;