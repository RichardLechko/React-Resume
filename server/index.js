import express from "express";
import cors from "cors";
import currencyRoutes from "./api/currency.js";
import submitRoutes from "./api/submit.js";
import weatherRoutes from "./api/weather.js";

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "https://www.richardlechko.com", // Your frontend domain
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true, // if you're using cookies/auth
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/currency", currencyRoutes);
app.use("/api/submit", submitRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
