import React, { useEffect, useState } from "react";

const TypingEffect = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const name = "Richard Lechko -";

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const textToType = texts[index];
    const typingSpeed = isDeleting ? 50 : 70;

    const updateText = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(textToType.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      } else {
        if (charIndex < textToType.length) {
          setCurrentText(textToType.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }
    };

    const typingInterval = setInterval(updateText, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [texts, index, charIndex, isDeleting]);

  return (
    <div className="flex items-center text-xl max-[1440px]:text-lg max-[1200px]:text-[0.8rem] max-[1024px]:text-3xl max-[768px]:text-2xl max-[640px]:text-[1.1rem] max-[425px]:text-sm max-[375px]:text-xs">
      <span className="font-mono text-gray-200">{name}&nbsp;</span>
      <div className="relative">
        <span
          className={`bg-gray-500 text-lime-300 font-mono p-2 border-r-4 border-lime-300 ${
            currentText ? "" : "hidden"
          }`}
        >
          {currentText}
        </span>
      </div>
    </div>
  );
};

export default TypingEffect;
