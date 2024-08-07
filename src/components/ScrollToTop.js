import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('ScrollToTop: Pathname changed to', pathname);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Ensure window.scrollTo gets called after navigation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
