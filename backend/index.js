import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import axios from "axios";
import nodemailer from "nodemailer";
import cors from "cors";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Resolve the path to the .env file in the root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, "../.env");

dotenv.config({ path: envPath });

const app = express();
const port = 5000;

const allowedOrigins = [
  "http://localhost:3000", // For local development
  "https://www.richardlechko.com", // Production URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    const links = [
      {
        url: "https://www.linkedin.com/in/richard-lechko/",
        text: "LinkedIn",
        download: false,
      },
      {
        url: "https://github.com/RichardLechko",
        text: "GitHub",
        download: false,
      },
      {
        url: "https://depaul.joinhandshake.com/stu/users/43620110",
        text: "Handshake",
        download: false,
      },
      {
        url: "https://stackoverflow.com/users/25048938/richard-lechko",
        text: "Stack Overflow",
        download: false,
      },
      {
        url: "https://www.upwork.com/freelancers/~01ec8271eae309bda7",
        text: "Upwork",
        download: false,
      },
      {
        url: "/resumes/Richard_Lechko_Resume_August_02_2024.docx",
        text: "Download Resume (DocX)",
        download: true,
      },
      {
        url: "/resumes/Richard_Lechko_Resume_August_02_2024.pdf",
        text: "Download Resume (PDF)",
        download: true,
      },
    ];

    // Send success response with links
    res.json({
      message: "Message received successfully!!!",
      links,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    if (error.code === "EAUTH") {
      res.status(500).json({
        success: false,
        error: "Invalid email credentials. Please check your email settings.",
      });
    } else {
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  }
});

app.get("/api/currency-key", async (req, res) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ message: data.message });
      return;
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/weather", async (req, res) => {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  const city = req.query.city;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${WEATHER_API_KEY}`;

  try {
    const response = await axios.get(weatherApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
