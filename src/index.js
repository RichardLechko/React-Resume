import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Your existing global styles
import "slick-carousel/slick/slick.css"; // Slick carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme styles
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
