import React from "react";

const StarryBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none bg-[#e2e8f0] dark:bg-[#0a0a0a] transition-colors duration-500 ease-in-out"
      aria-hidden="true"
    >
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 2.5 + 1.5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#0a0a0a]/[0.4] dark:bg-[#e2e8f0]/[0.4] transition-colors duration-500 ease-in-out"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${
                  2 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarryBackground;
