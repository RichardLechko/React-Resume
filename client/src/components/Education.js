import React from "react";
import { useTranslation } from "./language/LanguageContext";

const Education = () => {
  const { t, language } = useTranslation();

  return (
    <div>
      <section className="education" lang={language}>
        <h1 className="education-heading">
          <span className="content-backdrop">{t("education.heading")}</span>
        </h1>
        
        <div className="education-grid">
          <div className="education-card">
            <header className="education-header">
              <h2 className="education-subheading">
                {t("education.current_program")}
              </h2>
            </header>
            
            <div className="education-details">
              <p className="education-text">
                {t("education.current_program_description_1")}{" "}
      <a
                  className="education-link"
                  href="https://www.depaul.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DePaul University website"
                >
                  {t("education.current_program_description_2")}
                </a>
              </p>
              <p className="education-text">
                <span className="education-highlight">
                  {t("education.bachelor_degree")}
                </span>
              </p>
              <p className="education-grad-text">
                {t("education.expected_graduation")}:{" "}
                <span className="education-highlight">
                  {t("education.expected_graduation_date")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
