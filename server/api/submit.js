import nodemailer from "nodemailer";
import { Router } from "express";
import { config } from "dotenv";
import validator from "validator";

config();

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message, honeypot } = req.body;

  if (honeypot) {
    return res.status(400).json({ error: "Bot detected." });
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (name.length > 100 || subject.length > 150 || message.length > 1000) {
    return res
      .status(400)
      .json({ error: "Name, subject, or message exceeds length limit." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    const mailOptions = {
      from: `"${name} - ${subject}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message:
        \nName: ${name}
        \nEmail: ${email}
        \nSubject: ${subject}
        \nMessage: ${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default router;
