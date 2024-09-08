import fetch from "node-fetch";
import { Router } from "express";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const router = Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ message: data.message });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
