import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Copy } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/yourusername",
      color: "#333",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "#0077B5",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/yourusername",
      color: "#1DA1F2",
    },
  ];

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("richard.lechko@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Richard Lechko</h1>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <p className="footer-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
