// src/components/ShareSheet.js

import React from "react";

const ShareSheet = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed bottom-0 right-0 bg-white shadow-lg p-4 rounded-lg w-64 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">Share this page</h3>
      <div className="space-y-2">
        <a
          href="mailto:?subject=Check this out&body=I found this interesting site: https://www.richardlechko.com/"
          className="block bg-blue-500 text-white p-2 rounded-lg text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share via Email
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Check this out! https://www.richardlechko.com/"
          className="block bg-blue-400 text-white p-2 rounded-lg text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.richardlechko.com/"
          className="block bg-blue-600 text-white p-2 rounded-lg text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Facebook
        </a>
        <button
          onClick={onClose}
          className="block w-full bg-gray-300 text-gray-800 p-2 rounded-lg text-center mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareSheet;
