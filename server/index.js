import express from "express";
import cors from "cors";
import { config } from "dotenv";
import currencyRoutes from "./api/currency.js";
import submitRoutes from "./api/submit.js";
import weatherRoutes from "./api/weather.js";

config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://richardlechko.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/currency", currencyRoutes);
app.use("/api/submit", submitRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
