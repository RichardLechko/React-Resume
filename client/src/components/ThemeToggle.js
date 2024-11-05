import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (e) => {
    e.stopPropagation();
    const root = document.documentElement;

    root.classList.add("no-transition");

    root.setAttribute(
      "data-theme",
      root.getAttribute("data-theme") === "light" ? "dark" : "light"
    );

    setTimeout(() => {
      root.classList.remove("no-transition");
    }, 0);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        aria-pressed={theme === "light"}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg max-[768px]:w-10 max-[768px]:h-10 max-[375px]:w-8 max-[375px]:h-8 ${
          theme === "light"
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-gray-800 text-gray-200 hover:bg-gray-700"
        }`}
      >
        {theme === "light" ? "🌙" : "🌞"}{" "}
      </button>
    </div>
  );
};

export default ThemeToggle;
