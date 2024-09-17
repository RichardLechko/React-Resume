import React, { createContext, useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const scrollableContainerRef = useRef(null);
  const location = useLocation();

  const scrollToTop = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    scrollToTop(); // Scroll to top on location change
  }, [location]);

  return (
    <ScrollContext.Provider value={{ scrollToTop, scrollableContainerRef }}>
      <div ref={scrollableContainerRef} className="overflow-y-auto h-[100vh]">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
