import React from "react";
import { useTranslation } from "./language/LanguageContext"; // Import useTranslation

const Publications = () => {
  const { t, language } = useTranslation();

  const publicationsData = [
    {
      title: t("publications.publication.title"),
      authors: "Lechko, Richard, Block, Walter",
      isbn: "9798327075924",
      link: "https://a.co/d/64La0PL",
    },
  ];

  return (
    <section id="publications" className="publications-section" lang={language}>
      <h1 className="publications-title">
        <span className="content-backdrop">{t("publications.title")}</span>
      </h1>
      <div className="publications-list">
        {publicationsData.map((publication, index) => (
          <div key={index} className="publication-item">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              {publication.title}
            </a>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-isbn">{publication.isbn}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
