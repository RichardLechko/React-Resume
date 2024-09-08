import fetch from "node-fetch";
import { Router } from "express";
import { config } from "dotenv";

config();

const router = Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.CURRENCY_API_KEY; // Ensure this is the correct API key environment variable
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`; // Include the API key in the URL

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      // If response is not OK, get the error message and return it
      const data = await response.json();
      return res.status(response.status).json({ message: data.message });
    }

    // If response is OK, return the fetched data
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return a generic error message if an exception is thrown
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
