import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import "../styles/contact.css";

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

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full px-8 max-[640px]:px-4 max-w-[1400px] mx-auto [&_textarea]:placeholder:text-gray-500 [&_input]:placeholder:text-gray-500 [&_input]:text-xl [&_textarea]:text-xl max-[640px]:[&_input]:text-lg max-[640px]:[&_textarea]:text-lg"
    >
      <h1 className="text-4xl mb-8 font-bold text-center">Get In Touch!</h1>

      <form
        className="w-full max-w-4xl max-[425px]:max-w-full mt-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-500 dark:border-gray-400 mb-3 w-full h-14 px-4 py-8 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-500 dark:border-gray-400 mb-3 w-full h-14 px-4 py-8 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl"
            placeholder="Your email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-2 border-gray-500 dark:border-gray-400 mb-3 w-full h-14 px-4 py-8 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="textarea"
            value={formData.message}
            onChange={handleChange}
            className="border-2 border-gray-500 dark:border-gray-400 mb-3 w-full h-40 p-4 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl"
            placeholder="Your message..."
            required
          ></textarea>
          <div className="flex justify-center w-2/3 mb-3 max-[425px]:w-full max-[425px]:mb-3">
            <input
              type="submit"
              className="w-full h-14 bg-[#c1c9d1] hover:bg-[#a4adb8] dark:bg-[#1f1f1f] dark:hover:bg-[#333333] text-xl text-center rounded-xl font-bold cursor-pointer transition duration-300 max-[425px]:h-12"
              value="Send Message"
            />
          </div>
        </div>
      </form>

      <div id="formFeedback" className="text-xl text-center">
        {feedback}
      </div>

      {links.length > 0 && (
        <div className="mt-16 mb-12 w-full">
          <h2 className="text-3xl font-extrabold mb-10 text-center">
            Useful Links
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-[425px]:gap-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                download={link.download}
                className="flex items-center justify-center w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center max-[425px]:p-3 max-[425px]:rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg font-bold text-white">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-xl mt-16 mb-20 w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Contact Information
        </h1>
        <div className="flex items-center gap-6 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl max-[425px]:p-4 max-[425px]:gap-4 max-[425px]:rounded-lg">
          <FaMapMarkerAlt className="text-4xl text-blue-300 flex-shrink-0 max-[425px]:text-2xl" />
          <div>
            <h2 className="mb-1 font-semibold text-xl max-[640px]:text-lg">
              Location
            </h2>
            <p className="text-lg">Orland Park, IL</p>
          </div>
        </div>
        <div className="flex items-center gap-6 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl max-[425px]:p-4 max-[425px]:gap-4 max-[425px]:rounded-lg">
          <FaEnvelope className="text-4xl text-blue-300 flex-shrink-0 max-[425px]:text-2xl" />
          <div>
            <h2 className="mb-1 font-semibold text-xl max-[640px]:text-lg">
              Email
            </h2>
            <p className="text-lg">
              <a
                href="mailto:richardlechko@gmail.com"
                className="underline text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 transition duration-200"
              >
                richardlechko@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
