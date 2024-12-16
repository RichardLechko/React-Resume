import React from "react";
import { useTranslation } from "./language/LanguageContext";

const Education = () => {
  const { t, language } = useTranslation();

  const organizations = [
    {
      name: t("education.organizations.depaul_computer_sci_society.name"),
      startDate: t(
        "education.organizations.depaul_computer_sci_society.startDate"
      ),
      endDate: t("education.organizations.depaul_computer_sci_society.endDate"),
      description: t(
        "education.organizations.depaul_computer_sci_society.description"
      ),
    },
    {
      name: t("education.organizations.depaul_uiux_association.name"),
      startDate: t("education.organizations.depaul_uiux_association.startDate"),
      endDate: t("education.organizations.depaul_uiux_association.endDate"),
      description: t(
        "education.organizations.depaul_uiux_association.description"
      ),
    },
    {
      name: t("education.organizations.depaul_cloud_club.name"),
      startDate: t("education.organizations.depaul_cloud_club.startDate"),
      endDate: t("education.organizations.depaul_cloud_club.endDate"),
      description: t("education.organizations.depaul_cloud_club.description"),
    },
  ];

  return (
    <div>
      <section className="education" lang={language}>
        <h1 className="education-heading" lang={language}>
          <span className="content-backdrop" lang={language}>
            {t("education.heading")}
          </span>
        </h1>
        <div className="education-grid" lang={language}>
          <div className="education-card" lang={language}>
            <header className="education-header" lang={language}>
              <h2 className="education-subheading" lang={language}>
                {t("education.current_program")}
              </h2>
            </header>
            <div className="education-details" lang={language}>
              <p className="education-text" lang={language}>
                {t("education.current_program_description_1")}{" "}
                <a
                  className="education-link"
                  href="https://www.depaul.edu/Pages/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DePaul University website"
                  lang={language}
                >
                  {t("education.current_program_description_2")}
                </a>
              </p>
              <p className="education-text" lang={language}>
                {t("education.bachelor_degree")}
              </p>
              <p className="education-grad-text">
                {t("education.expected_graduation")}:{" "}
                <span className="education-highlight">
                  {t("education.expected_graduation_date")}
                </span>
              </p>
            </div>
          </div>

          <div className="education-card">
            <h2 className="education-subheading">
              {t("education.gpa_achievements")}
            </h2>
            <div className="gpa-achievements">
              <div>
                <h3 className="achievement-heading">
                  <span className="achievement-gpa-header">
                    {t("education.major_gpa")}
                  </span>
                  <span className="achievement-highlight">
                    <span className="achievement-gpa">3.7</span> / 4.0
                  </span>
                </h3>
                <p className="achievement-text">{t("education.deans_list")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="organizations" lang={language}>
        <h2 className="organizations-heading" lang={language}>
          {t("education.organizations_heading")}
        </h2>
        <div className="organizations-grid" lang={language}>
          {organizations
            .sort((a, b) => {
              const dateA = new Date(a.startDate);
              const dateB = new Date(b.startDate);
              return dateB - dateA;
            })
            .map((org, index) => (
              <div key={index} className="organization-item" lang={language}>
                <div className="organization-details" lang={language}>
                  <span className="organization-name" lang={language}>
                    {org.name}
                  </span>
                  <span className="organization-dates" lang={language}>
                    {org.startDate} - {org.endDate}
                  </span>
                  <p className="organization-description" lang={language}>
                    {org.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
