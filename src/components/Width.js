// src/components/ScreenWidth.js
import React, { useState, useEffect } from 'react';

const ScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 bg-gray-800 text-white p-2 m-2 rounded z-[999]">
      Width: {width}px
    </div>
  );
};

export default ScreenWidth;
