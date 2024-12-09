import React, { createContext, useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <ScrollContext.Provider value={{ scrollToTop, containerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
