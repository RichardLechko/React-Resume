import fetch from "node-fetch";
import { Router } from "express";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const router = Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.CURRENCY_API_KEY; // Ensure this is set correctly
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`; // Updated URL

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      return res
        .status(response.status)
        .json({ message: errorData.message || "Error fetching data" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
