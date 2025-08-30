// client/src/components/ThemeToggle.js
import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply theme to both html and body elements
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={`${styles.themeToggle} ${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggle;