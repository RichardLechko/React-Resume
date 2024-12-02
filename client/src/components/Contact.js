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
  const [feedback, setFeedback] = useState("");
  const [links, setLinks] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      setFeedback("Error sending message.");
    }
  };

  const inputClasses =
    "border-2 border-gray-500 dark:border-gray-400 w-full outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl text-base min-[375px]:text-lg min-[425px]:text-xl px-3 py-2 min-[375px]:px-4 min-[375px]:py-3";

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full px-2 sm:px-4 lg:px-8 max-w-[1920px] mx-auto"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3">
        Let's start our collaboration!
      </h1>

      <form className="w-full max-w-4xl mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center w-full space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} text-sm sm:text-base`}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} text-sm sm:text-base`}
            placeholder="Your email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClasses} text-sm sm:text-base`}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} h-24 sm:h-28 lg:h-36 text-sm sm:text-base`}
            placeholder="Your message..."
            required
          />
          <div className="w-full sm:w-3/4">
            <input
              type="submit"
              className="w-full py-2 sm:py-3 bg-[#c1c9d1] hover:bg-[#a4adb8] dark:bg-[#1f1f1f] dark:hover:bg-[#333333] text-sm sm:text-base lg:text-lg rounded-xl font-bold cursor-pointer transition duration-300"
              value="Send Message"
            />
          </div>
        </div>
      </form>

      {feedback && (
        <div
          id="formFeedback"
          className="text-sm sm:text-base lg:text-lg text-center mt-4"
        >
          {feedback}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 sm:mt-8 lg:mt-12 w-full">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                download={link.download}
                className="flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs sm:text-sm lg:text-base font-bold text-white">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-sm sm:text-base mt-8 sm:mt-12 lg:mt-16 w-full">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
          Contact Information
        </h1>
        <div className="space-y-4 sm:space-y-6 w-full max-w-lg">
          <div className="flex items-center gap-3 sm:gap-4 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaMapMarkerAlt className="text-xl sm:text-2xl text-blue-300 flex-shrink-0" />
            <div>
              <h2 className="text-sm sm:text-base font-semibold mb-1">
                Location
              </h2>
              <p>Orland Park, IL</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaEnvelope className="text-xl sm:text-2xl text-blue-300 flex-shrink-0" />
            <div>
              <h2 className="text-sm sm:text-base font-semibold mb-1">Email</h2>
              <p>
                <a
                  href="mailto:richardlechko@gmail.com"
                  className="underline text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400"
                >
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
