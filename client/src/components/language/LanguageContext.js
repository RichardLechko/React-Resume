import React, { createContext, useState, useContext, useCallback } from "react";
import translations from "./translations.json";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
