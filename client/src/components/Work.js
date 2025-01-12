import React, { useRef, useEffect } from "react";
import { useTranslation } from "./language/LanguageContext";

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
        </section>
      </div>
    </main>
  );
};

const Company = React.forwardRef(
  (
    { companyName, position, startTime, endTime, descriptions, logo, tools },
    ref
  ) => {
    const { t, language } = useTranslation();

    return (
      <article ref={ref} className="company-container" lang={language}>
        <div className="company-info">
          <figure className="company-logo-container">
            <img
              src={logo}
              alt={`${t(companyName)} logo`}
              className="company-logo-img"
            />
          </figure>

          <header className="company-header">
            <time className="company-duration">
              <span className="start-time">{t(startTime)}</span>
              {" - "}
              <span className="end-time">{t(endTime)}</span>
            </time>
            <h2 className="company-name">{t(companyName)}</h2>
            <h3 className="company-position">{t(position)}</h3>
          </header>

          <nav className="company-tools">
            {tools.map((tool, index) => (
              <small key={index} className="company-tool">
                {tool}
              </small>
            ))}
          </nav>

          <section className="company-content">
            <ul className="company-descriptions">
              {descriptions.map((desc, index) => (
                <li key={index} className="company-description-item">
                  {desc
                    .split(
                      new RegExp(
                        `(${
                          companyName.includes("Hendrickson")
                            ? t("work.work-list.hendrickson.highlightedText").join("|")
                            : companyName.includes("RL IT Firm")
                            ? t("work.work-list.rl-it-firm.highlightedText").join("|")
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
                          <strong className="highlight-text">{part}</strong>
                        ) : (
                          part
                        )}
                      </React.Fragment>
                    ))}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    );
  }
);

export default Work;
