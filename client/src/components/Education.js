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
                  href="https://www.depaul.edu/Pages/default.aspx"
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

      <section className="organizations">
        <h2 className="organizations-heading">
          {t("education.organizations_heading")}
        </h2>
        <div className="organizations-grid">
          {organizations
            .sort((a, b) => {
              const dateA = new Date(a.startDate);
              const dateB = new Date(b.startDate);
              return dateB - dateA;
            })
            .map((org, index) => (
              <div key={index} className="organization-item">
                <div className="organization-details">
                  <span className="organization-name">{org.name}</span>
                  <span className="organization-dates">
                    {org.startDate} - {org.endDate}
                  </span>
                  <p className="organization-description" lang={language}>
                    {org.description
                      .split(
                        new RegExp(
                          `(${
                            org.name.includes(
                              "DePaul Computer Science Society"
                            ) ||
                            org.name.includes(
                              "Общество компьютерных наук DePaul"
                            )
                              ? t(
                                  "education.organizations.depaul_computer_sci_society.highlightedText"
                                ).join("|")
                              : org.name.includes("DePaul Cloud Club") ||
                                org.name.includes(
                                  "Клуб облачных технологий DePaul"
                                )
                              ? t(
                                  "education.organizations.depaul_cloud_club.highlightedText"
                                ).join("|")
                              : org.name.includes("DePaul UI/UX Association") ||
                                org.name.includes("Ассоциация UI/UX DePaul")
                              ? t(
                                  "education.organizations.depaul_uiux_association.highlightedText"
                                ).join("|")
                              : ""
                          })`,
                          "g"
                        )
                      )
                      .map((part, index) => (
                        <React.Fragment key={index}>
                          {(org.name.includes(
                            "DePaul Computer Science Society"
                          ) ||
                          org.name.includes("Общество компьютерных наук DePaul")
                            ? t(
                                "education.organizations.depaul_computer_sci_society.highlightedText"
                              )
                            : org.name.includes("DePaul Cloud Club") ||
                              org.name.includes(
                                "Клуб облачных технологий DePaul"
                              )
                            ? t(
                                "education.organizations.depaul_cloud_club.highlightedText"
                              )
                            : org.name.includes("DePaul UI/UX Association") ||
                              org.name.includes("Ассоциация UI/UX DePaul")
                            ? t(
                                "education.organizations.depaul_uiux_association.highlightedText"
                              )
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
            ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
