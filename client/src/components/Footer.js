import React from "react";
import { useTranslation } from "./language/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">{t("footer.title.text")}</h1>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {t("footer.copyright.prefix")} |{" "}
          {t("footer.copyright.suffix")}
        </p>

        <p className="footer-updated">
          {t("footer.last-updated.prefix")} {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
