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

  return (
    <section id="contact">
      <section>
        <h1 className="text-3xl mb-6 font-bold">Get In Touch!</h1>

        <form className="w-full mt-6" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl border-2 border-gray-600 dark:border-gray-400 mb-4 focus:border-teal-500 placeholder-styled"
            placeholder="Your name"
            required
          />

          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl border-2 dark:border-gray-400 mb-4 focus:border-teal-500 placeholder-styled"
            placeholder="Your email"
            required
          />

          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl border-2 border-gray-600 dark:border-gray-400 mb-4 focus:border-teal-500 placeholder-styled"
            placeholder="Subject"
            required
          />

          <label htmlFor="textarea" className="sr-only">
            Textarea
          </label>
          <textarea
            name="message"
            id="textarea"
            value={formData.message}
            onChange={handleChange}
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-[#f2f1ef] dark:bg-[#2a2a2a] rounded-xl border-2 border-gray-600 dark:border-gray-400 mb-4 focus:border-teal-500 placeholder-styled"
            cols="30"
            rows="5"
            placeholder="Your message..."
            required
          ></textarea>

          <input
            type="submit"
            className="max-[640px]:text-sm bg-[#d1d0ce] hover:bg-[#b0aeac] dark:bg-[#4a4a4a] dark:hover:bg-[#3a3a3a] w-full text-xl p-4 outline-none rounded-xl mb-4 border-none font-bold cursor-pointer transition duration-300"
            value="Send Message"
          />
        </form>

        <div id="formFeedback" className="text-xl mt-4">
          {feedback}
        </div>

        {links.length > 0 && (
          <div className="mt-12 my-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
              Useful Links
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  download={link.download}
                  className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold transition duration-300 ease-in-out">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col text-xl mt-12 mb-20 text-left px-4 w-full max-[425px]:px-0">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Contact Information
          </h1>

          <div className="flex items-center gap-4 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-4 rounded-xl shadow-md mb-4 hover:shadow-lg transition-shadow duration-300 max-[375px]:px-2">
            <FaMapMarkerAlt className="text-3xl max-[640px]:text-2xl text-blue-300 max-[425px]:hidden" />
            <article className="flex-1">
              <h2 className="mb-1 font-semibold text-lg">Location</h2>
              <p className="text-lg max-[640px]:text-base">Orland Park, IL</p>
            </article>
          </div>

          <div className="flex items-center gap-4 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 max-[375px]:px-2">
            <FaEnvelope className="text-3xl max-[640px]:text-2xl text-blue-300 max-[425px]:hidden" />
            <article className="flex-1">
              <h2 className="mb-1 font-semibold text-lg">Email</h2>
              <p className="text-lg max-[640px]:text-base">
                <span id="custom-font">richardlechko [at] gmail.com</span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
