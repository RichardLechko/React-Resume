import express from "express";
import cookieParser from "cookie-parser"; // Optional, add if needed
import cors from "cors";
import http from "http"; // For creating the HTTP server
import "dotenv/config"; // For loading environment variables
import currencyRoutes from "./api/currency.js";
import submitRoutes from "./api/submit.js";
import weatherRoutes from "./api/weather.js";

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Basic CORS setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Optional, remove if not needed

// API routes
app.use("/api/currency", currencyRoutes);
app.use("/api/submit", submitRoutes);
app.use("/api/weather", weatherRoutes);

// Create and run the server
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
