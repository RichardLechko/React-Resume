import React from "react";
import { useTranslation } from "./language/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <header>
          <h2 className="footer-title">{t("footer.title.text")}</h2>
        </header>
        
        <small className="footer-copy">
          &copy; {new Date().getFullYear()} {t("footer.copyright.prefix")} |{" "}
          {t("footer.copyright.suffix")}
        </small>
        
        <time className="footer-updated" dateTime={new Date().toISOString()}>
          {t("footer.last-updated.prefix")} {new Date().toLocaleDateString()}
        </time>
      </div>
    </footer>
  );
};

export default Footer;
