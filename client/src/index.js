import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
/* import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono"; */

const root = ReactDOM.createRoot(document.getElementById("root"));

window.addEventListener("error", (event) => {
  console.error("Error in client:", event.message);
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
