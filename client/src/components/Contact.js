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
    <section id="contact" className="bg-black py-12">
      <div className="flex justify-center mb-6">
        <div id="resume-container" className="resume-card p-6">
          <h2
            id="resume-title"
            className="resume-title text-3xl font-bold mb-2"
          >
            <span className="resume-icon text-yellow-400">📄</span> Resume
          </h2>
          <p
            id="resume-description"
            className="resume-description text-md mb-4"
          >
            Quick download or view available:
          </p>
          <div className="flex justify-center gap-6 button-container">
            <a
              id="download-docx"
              href="/resumes/Richard_Lechko_Resume.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button docx-button text-center"
            >
              Download DOCX
            </a>
            <a
              id="download-pdf"
              href="/resumes/Richard_Lechko_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button pdf-button text-center"
            >
              Download PDF
            </a>
            <a
              id="view-pdf"
              href="/resumes/Richard_Lechko_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button view-button text-center"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>

      <section className="text-2xl text-[#e2e8f0] font-semibold text-center pt-24 px-12 mx-auto max-[640px]:p-12 max-[640px]:mb-6 pb-0 mb-12 max-[640px]:text-xl max-[425px]:text-base max-[375px]:pl-6 max-[375px]:pr-6">
        <p className="max-w-4xl mx-auto">
          I am currently looking for any projects — big or small. Don't be
          afraid to reach out. Whether that be a job opportunity, a freelance
          opportunity, or a simple project. If you would like to request an
          unofficial transcript for a career opportunity, please use the contact
          form below. Anything else, still use the contact form!
        </p>
      </section>

      <div className="App">
        <CookieConsent />
      </div>

      <section className="flex flex-col text-center w-[90%] max-w-[900px] m-auto">
        <h1 className="text-3xl mb-6 font-bold text-[#e2e8f0]">
          Get In Touch!
        </h1>

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
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-gray-700 text-[#e2e8f0] rounded-lg border-2 border-gray-600 mb-4 focus:border-blue-400"
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
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-gray-700 text-[#e2e8f0] rounded-lg border-2 border-gray-600 mb-4 focus:border-blue-400"
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
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-gray-700 text-[#e2e8f0] rounded-lg border-2 border-gray-600 mb-4 focus:border-blue-400"
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
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-gray-700 text-[#e2e8f0] rounded-lg border-2 border-gray-600 mb-4 focus:border-blue-400"
            cols="30"
            rows="5"
            placeholder="Your message..."
            required
          ></textarea>
          <input
            type="submit"
            className="max-[640px]:text-sm w-full text-xl p-4 outline-none bg-blue-500 text-white rounded-lg mb-4 border-none font-bold cursor-pointer hover:bg-blue-600 transition duration-300"
            value="Send Message"
          />
        </form>

        <div id="formFeedback" className="text-xl mt-4 text-[#e2e8f0]">
          {feedback}
        </div>

        {links.length > 0 && (
          <div className="mt-12 my-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-[#e2e8f0]">
              Useful Links
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  download={link.download}
                  className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-gray-100 transition duration-300 ease-in-out">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col text-xl mt-12 mb-20 text-left px-4 text-[#e2e8f0] w-full max-[425px]:px-0">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Contact Information
          </h1>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300 max-[375px]:px-2">
            <FaMapMarkerAlt className="text-3xl max-[640px]:text-2xl text-blue-400 max-[425px]:hidden" />
            <article className="flex-1">
              <h2 className="mb-1 font-semibold text-lg">Location</h2>
              <p className="text-lg max-[640px]:text-base">Orland Park, IL</p>
            </article>
          </div>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-[375px]:px-2">
            <FaEnvelope className="text-3xl max-[640px]:text-2xl text-blue-400 max-[425px]:hidden" />
            <article className="flex-1">
              <h2 className="mb-1 font-semibold text-lg">Email</h2>
              <p className="text-lg max-[640px]:text-base">
                <span className="underline text-blue-400 hover:text-blue-600 transition-colors duration-300">
                  richardlechko [at] gmail.com
                </span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
};

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent")) {
      setIsVisible(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p className="text-sm">
        We use cookies to ensure you get the best experience on our website.
      </p>
      <button
        onClick={handleAcceptCookies}
        className="bg-primaryColor text-white px-4 py-2 rounded mr-16"
      >
        Accept
      </button>
    </div>
  );
}

export default Contact;
