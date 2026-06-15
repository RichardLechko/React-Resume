// client/src/components/Footer.js
import React from "react";
import { useTranslation } from "./language/LanguageContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <header>
          <h2 className="footer-title">{t("footer.name")}</h2>
        </header>

        <small className="footer-copy">
          &copy; {new Date().getFullYear()} {t("footer.name")} |{" "}
          {t("footer.copyrightSuffix")}
        </small>

        <time className="footer-updated" dateTime={new Date().toISOString()}>
          {t("footer.lastUpdated")} {new Date().toLocaleDateString()}
        </time>
      </div>
    </footer>
  );
};

export default Footer;