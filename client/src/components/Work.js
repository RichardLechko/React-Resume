import React, { useRef } from "react";
import { useTranslation } from "./language/LanguageContext";

const Work = () => {
  const itemsRef = useRef([]);
  const { t, language } = useTranslation();

  const workExperiences = [
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
    <section id="work" className="work-section">
      <div className="work-container">
        <h1>
          <span className="content-backdrop">{t("work.title-name")}</span>
        </h1>
        <div className="work-content">
          <div className="work-left">
            <div className="work-left-inner"></div>
          </div>
          <div className="work-right">
            <div className="work-right-inner"></div>
            <div className="work-experiences">
              {workExperiences.map((experience, index) => (
                <Company
                  key={index}
                  {...experience}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="work-experience-item"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Company = React.forwardRef(
  (
    { companyName, position, startTime, endTime, descriptions, logo, tools },
    ref
  ) => {
    const { t, language } = useTranslation();

    return (
      <div ref={ref} className="company-container" lang={language}>
        <div className="company-info" lang={language}>
          <div className="company-logo-container" lang={language}>
            <div className="company-logo" lang={language}>
              <img
                src={logo}
                alt={`${t(companyName)} logo`}
                className="company-logo-img"
                lang={language}
              />
            </div>
          </div>

          <div className="company-header" lang={language}>
            <p className="company-duration" lang={language}>
              <span className="start-time" lang={language}>
                {t(startTime)}
              </span>{" "}
              -{" "}
              <span className="end-time" lang={language}>
                {t(endTime)}
              </span>
            </p>
            <h2 className="company-name" lang={language}>
              {t(companyName)}
            </h2>
            <h3 className="company-position" lang={language}>
              {t(position)}
            </h3>
          </div>

          <div className="company-content">
            <ul className="company-descriptions">
              {descriptions.map((desc, index) => (
                <li key={index} className="company-description-item">
                  {desc
                    .split(
                      new RegExp(
                        `(${
                          companyName.includes("Hendrickson")
                            ? t(
                                "work.work-list.hendrickson.highlightedText"
                              ).join("|")
                            : companyName.includes("RL IT Firm")
                            ? t(
                                "work.work-list.rl-it-firm.highlightedText"
                              ).join("|")
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
                          : []
                        ).includes(part) ? (
                          <span className="highlight-text">{part}</span>
                        ) : (
                          part
                        )}
                      </React.Fragment>
                    ))}
                </li>
              ))}
            </ul>

            <div className="company-tools">
              {tools.map((tool, index) => (
                <span key={index} className="company-tool">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Work;
