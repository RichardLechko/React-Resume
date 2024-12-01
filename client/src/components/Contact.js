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
      className="flex flex-col items-center justify-center w-full min-[320px]:px-2 min-[375px]:px-3 sm:px-6 lg:px-8 max-w-[1920px] mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-4 sm:text-5xl backdrop-blur-sm max-[375px]:text-3xl">
        Let's start our collaboration!
      </h1>

      <form
        className="w-full max-w-4xl mt-2 sm:mt-4 lg:mt-6 px-2 min-[375px]:px-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center w-full space-y-2 min-[375px]:space-y-3">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="textarea"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} h-28 min-[375px]:h-32 sm:h-36 lg:h-40`}
            placeholder="Your message..."
            required
          />
          <div className="w-full min-[425px]:w-2/3">
            <input
              type="submit"
              className="w-full py-2 min-[375px]:py-3 lg:py-4 bg-[#c1c9d1] hover:bg-[#a4adb8] dark:bg-[#1f1f1f] dark:hover:bg-[#333333] text-base min-[375px]:text-lg lg:text-xl text-center rounded-xl font-bold cursor-pointer transition duration-300"
              value="Send Message"
            />
          </div>
        </div>
      </form>

      <div
        id="formFeedback"
        className="text-base min-[375px]:text-lg sm:text-xl text-center mt-4"
      >
        {feedback}
      </div>

      {links.length > 0 && (
        <div className="mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-12 w-full px-2 min-[375px]:px-3">
          <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 lg:mb-10 text-center">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-4 gap-2 min-[375px]:gap-3 sm:gap-4 lg:gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                download={link.download}
                className="flex items-center justify-center p-2 min-[375px]:p-3 lg:p-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-xl shadow-lg transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm min-[375px]:text-base lg:text-lg font-bold text-white">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-base min-[375px]:text-lg sm:text-xl mt-8 sm:mt-12 lg:mt-16 mb-12 sm:mb-16 lg:mb-20 w-full px-2 min-[375px]:px-3">
        <h1 className="text-xl min-[375px]:text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
          Contact Information
        </h1>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full max-w-2xl">
          <div className="flex items-center gap-2 min-[375px]:gap-4 lg:gap-6 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-3 min-[375px]:p-4 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMapMarkerAlt className="text-xl min-[375px]:text-2xl lg:text-4xl text-blue-300 flex-shrink-0" />
            <div>
              <h2 className="text-base min-[375px]:text-lg lg:text-xl font-semibold mb-1">
                Location
              </h2>
              <p className="text-sm min-[375px]:text-base lg:text-lg">
                Orland Park, IL
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 min-[375px]:gap-4 lg:gap-6 bg-[#f2f1ef] dark:bg-[#2a2a2a] p-3 min-[375px]:p-4 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaEnvelope className="text-xl min-[375px]:text-2xl lg:text-4xl text-blue-300 flex-shrink-0" />
            <div>
              <h2 className="text-base min-[375px]:text-lg lg:text-xl font-semibold mb-1">
                Email
              </h2>
              <p className="text-sm min-[375px]:text-base lg:text-lg">
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
      </div>
    </section>
  );
};

export default Contact;
