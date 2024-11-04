import nodemailer from "nodemailer";
import { Router } from "express";
import { config } from "dotenv";

config();

const router = Router();

router.post("/", async (req, res) => {
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
      from: `"${name} - ${subject}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // No quotes
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your contact form:
             \nName: ${name}
             \nEmail: ${email}
             \nSubject: ${subject}
             \nMessage: ${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Message received successfully!!!",
    });
  } catch (error) {
    console.error("Error sending email:", error.message || error);

    res.status(500).json({
      success: false,
      error: error.message || "Failed to send email",
    });
  }
});

export default router;
