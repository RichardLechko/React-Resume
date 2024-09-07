import axios from "axios";
import { config } from "dotenv";

config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === "GET") {
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const city = req.query.city;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${WEATHER_API_KEY}`;

    try {
      const response = await axios.get(weatherApiUrl);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      res.status(500).json({ error: "Failed to fetch weather data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
