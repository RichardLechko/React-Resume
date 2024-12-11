import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";

const Contact = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");
  const [links, setLinks] = useState([]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.includes(".");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
      return;
    }

    const apiUrl = "https://react-resume-api.vercel.app/api/submit";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFeedback(data.message);
      setLinks(data.links);
      setErrors({});
    } catch (error) {
      setFeedback("Error sending message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-heading">
        <span className="content-backdrop">Let's start our collaboration!</span>
      </h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-input-group">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your name"
              required
            />
            <div className="left-border"></div>
            <div className="right-border"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`contact-input ${errors.email ? "error" : ""}`}
              placeholder="Your email"
              required
            />
            {errors.email && (
              <div className="error-message text-red-500 text-sm mt-1">
                {errors.email}
              </div>
            )}
            <div className="left-border"></div>
            <div className="right-border"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact-input"
              placeholder="Subject"
              required
            />
            <div className="left-border"></div>
            <div className="right-border"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <input type="text" name="honeypot" id="honeypot" />
          </div>
          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              placeholder="Your message..."
              required
            />
            <div className="left-border"></div>
            <div className="right-border"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
          </div>
          <div className="contact-submit-container">
            <div>
              <input
                type="submit"
                className="contact-submit"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>

      {feedback && (
        <div id="formFeedback" className="form-feedback">
          {feedback}
        </div>
      )}

      <div className="contact-info">
        <h1 className="contact-info-heading">
          <span className="content-backdrop">Contact Information</span>
        </h1>
        <div className="contact-info-group">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h2 className="info-title">Location</h2>
              <p>Chicago, IL</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h2 className="info-title">Email</h2>
              <p>
                <a href="mailto:richardlechko@gmail.com" className="info-link">
                  richardlechko@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
