import fetch from "node-fetch";
import { Router } from "express";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const router = Router();

router.get("/", async (req, res) => {
  console.log("Received request for /api/currency");

  const apiKey = process.env.CURRENCY_API_KEY;
  console.log("API Key:", apiKey);

  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
  console.log("API URL:", apiUrl);

  try {
    const response = await fetch(apiUrl);
    console.log("Response Status:", response.status);

    const data = await response.json();
    console.log("Response Data:", data);

    if (!response.ok) {
      return res.status(response.status).json({ message: data.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
