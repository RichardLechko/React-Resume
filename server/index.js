import express from "express";
import cors from "cors";
import { config } from "dotenv";
import currencyRoutes from "./api/currency.js";
import submitRoutes from "./api/submit.js";
import weatherRoutes from "./api/weather.js";

config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define routes
app.use("/api/currency", currencyRoutes);
app.use("/api/submit", submitRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
