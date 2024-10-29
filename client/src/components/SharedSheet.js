import React from "react";

const ShareSheet = ({ isVisible, onClose }) => {
  const shareLinks = [
    {
      href: "mailto:?subject=Check this out&body=I found this interesting site: https://www.richardlechko.com/",
      label: "Share via Email",
      bgColor: "bg-blue-600", // Darker blue for better contrast
    },
    {
      href: "https://twitter.com/intent/tweet?text=Check this out! https://www.richardlechko.com/",
      label: "Share on Twitter",
      bgColor: "bg-blue-500", // Darker blue for better contrast
    },
    {
      href: "https://www.facebook.com/sharer/sharer.php?u=https://www.richardlechko.com/",
      label: "Share on Facebook",
      bgColor: "bg-blue-700", // Darker blue for better contrast
    },
  ];

  return (
    <div
      className={`fixed bottom-0 right-0 bg-gray-800 shadow-lg p-4 rounded-lg w-64 ${
        isVisible ? "block" : "hidden"
      }`}
      aria-live="polite"
    >
      <div className="space-y-2">
        {shareLinks.map(({ href, label, bgColor }, index) => (
          <a
            key={index}
            href={href}
            className={`block ${bgColor} text-white p-2 rounded-lg text-center`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {label}
          </a>
        ))}
        <button
          onClick={onClose}
          className="block w-full bg-gray-600 text-white p-2 rounded-lg text-center mt-2" // Darker gray for better contrast
          aria-label="Close Share Sheet"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareSheet;
