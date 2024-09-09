import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";

const Contact = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const [links, setLinks] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setFeedback(data.message);
        // Optionally, handle the links response if needed
        console.log(data.links);
      } else {
        setFeedback(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <section className="text-2xl text-black font-semibold text-center p-24 pb-0 mb-12">
        <p>
          I am currently looking for any projects — big or small. Don't be
          afraid to reach out. Whether that be a job opportunity, a freelance
          opportunity, or a simple project. If you want, you can also check out
          my resume:&nbsp;
          <a
            href="/resumes/Richard_Lechko_Resume.docx"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-500 underline font-bold">DocX</span>
            &nbsp;
          </a>
          or&nbsp;
          <a
            href="/resumes/Richard_Lechko_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-red-500 underline font-bold">PDF</span>
          </a>
          . If you would like to request an unofficial transcript for a career
          opportunity, please use the contact form below. Anything else, still
          use the contact form!
        </p>
      </section>

      <div className="App">
        <CookieConsent />
      </div>

      <section className="flex flex-col text-center w-[90%] max-w-[900px] m-auto">
        <h1 className="text-3xl mb-2 font-bold">Get In Touch!</h1>

        <form className="w-full mt-12" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-xl p-4 outline-none bg-formBg text-white rounded-xl border-4 border-customInput mb-4 focus:border-4 focus:border-solid focus:border-primaryColor"
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
            className="w-full text-xl p-4 outline-none bg-formBg text-white rounded-xl border-4 border-customInput mb-4 focus:border-4 focus:border-solid focus:border-primaryColor"
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
            className="w-full text-xl p-4 outline-none bg-formBg text-white rounded-xl border-4 border-customInput mb-4 focus:border-4 focus:border-solid focus:border-primaryColor"
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
            className="w-full text-xl p-4 outline-none bg-formBg text-white rounded-xl border-4 border-customInput mb-4 focus:border-4 focus:border-solid focus:border-primaryColor"
            cols="30"
            rows="5"
            placeholder="Your message..."
            required
          ></textarea>
          <input
            type="submit"
            className="w-full text-xl p-4 outline-none bg-primaryColor text-white rounded-xl mb-4 border-none font-bold cursor-pointer"
            value="Send Message"
          />
        </form>

        <div id="formFeedback" className="text-2xl mt-4">
          {feedback}
        </div>

        <div id="links" className="mt-4">
          {links.length > 0 && (
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    download={link.download ? "true" : undefined}
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noopener noreferrer"}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47735.32503472363!2d-87.892340364795!3d41.60261077830801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3f45afe938e9%3A0xca1b71adb8e82d4b!2sOrland%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1715926063297!5m2!1sen!2sus"
            style={{ border: "0" }}
            loading="lazy"
            aria-hidden="false"
            className="w-full h-[500px]"
            title="google-maps"
          ></iframe>
        </div>

        <div className="flex flex-col text-xl mt-12 mb-20 text-left">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt />
            <article className="mb-4">
              <h1 className="mb-2 font-bold">Location</h1>
              <p>Orland Park, IL</p>
            </article>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope />
            <article className="mb-4">
              <h1 className="mb-2 font-bold">Email</h1>
              <p>
                <a href="mailto:richardlechko@gmail.com" className=" underline">
                  richardlechko [at] gmail.com
                </a>
              </p>
            </article>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt />
            <article className="mb-4">
              <h1 className="mb-2 font-bold">Phone</h1>
              <p>(708)-262-7174</p>
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

  return (
    isVisible && (
      <div
        id="cookieConsent"
        className="fixed bottom-0 left-0 right-0 bg-[#333] text-[#fff] text-center py-[10px] px-0 z-[100]"
      >
        <div
          id="cookieConsentContainer"
          className="flex justify-between items-center w-[90%] max-w-[960px] my-0 mx-auto"
        >
          <p className="m-0">
            We use cookies to improve your experience on our site. By using our
            site, you agree to our use of cookies.{" "}
            <a className="text-yellow-400" href="../privacy-policy.html">
              Learn more
            </a>
          </p>
          <button
            className="font-bold bg-[#00c853] text-[#000] border-none py-[10px] px-[20px] cursor-pointer"
            id="acceptCookies"
            onClick={handleAcceptCookies}
          >
            I Agree
          </button>
        </div>
      </div>
    )
  );
}

export default Contact;
