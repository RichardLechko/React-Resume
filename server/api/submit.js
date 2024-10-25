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

    res.status(200).json({
      message: "Message received successfully!!!",
      links,
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
