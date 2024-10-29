import React, { useEffect, useState } from "react";

const TypingEffect = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const name = window.innerWidth <= 375 ? "Richard - " : "Richard Lechko - ";
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseAfterTyping = 1000;

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const textToType = texts[index];

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < textToType.length) {
          setCurrentText((prev) => prev + textToType.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [texts, index, charIndex, isDeleting]);

  return (
    <div className="flex items-center text-xl max-[1440px]:text-lg max-[1200px]:text-[0.8rem] max-[1024px]:text-3xl max-[768px]:text-2xl max-[640px]:text-xl max-[425px]:text-base max-[375px]:text-[0.8rem]">
      <span className="font-mono text-gray-200">{name}&nbsp;</span>
      <div className="relative min-w-[150px] max-w-[300px]">
        <span
          className={`bg-gray-700 text-lime-100 font-mono p-2 border-r-4 border-lime-300 ${
            currentText ? "" : "invisible"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          {currentText || "Placeholder text"}
        </span>
      </div>
    </div>
  );
};

export default TypingEffect;
