import fetch from "node-fetch";
import { Router } from "express";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const router = Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

  try {
    // Including the API key in the URL if required by your API
    const response = await fetch(`${apiUrl}?apikey=${apiKey}`);

    if (!response.ok) {
      const data = await response.json();
      console.error("Currency API Error:", data.message);
      res.status(response.status).json({ message: data.message });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching currency data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
