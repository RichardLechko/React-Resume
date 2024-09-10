import React, { createContext, useContext, useRef, useEffect } from "react";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const scrollableContainerRef = useRef(null);

  const scrollToTop = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {}, []);

  return (
    <ScrollContext.Provider value={{ scrollToTop, scrollableContainerRef }}>
      <div ref={scrollableContainerRef} className="overflow-y-auto h-[100vh]">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
