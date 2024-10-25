import React from "react";

const ShareSheet = ({ isVisible, onClose }) => {
  const shareLinks = [
    {
      href: "mailto:?subject=Check this out&body=I found this interesting site: https://www.richardlechko.com/",
      label: "Share via Email",
      bgColor: "bg-blue-500",
    },
    {
      href: "https://twitter.com/intent/tweet?text=Check this out! https://www.richardlechko.com/",
      label: "Share on Twitter",
      bgColor: "bg-blue-400",
    },
    {
      href: "https://www.facebook.com/sharer/sharer.php?u=https://www.richardlechko.com/",
      label: "Share on Facebook",
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <div
      className={`fixed bottom-0 right-0 bg-white shadow-lg p-4 rounded-lg w-64 ${
        isVisible ? "block" : "hidden"
      }`}
      aria-live="polite"
    >
      <h3 className="text-lg font-semibold mb-2">Share this page</h3>
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
          className="block w-full bg-gray-300 text-gray-800 p-2 rounded-lg text-center mt-2"
          aria-label="Close Share Sheet"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareSheet;
