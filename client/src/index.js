import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

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
