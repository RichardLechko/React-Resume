import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Your existing global styles
import App from "./App.js";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports.js";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
