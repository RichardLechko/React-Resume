import fetch from "node-fetch";
import { config } from "dotenv";

config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === "GET") {
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
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
