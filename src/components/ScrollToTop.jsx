import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to the top without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // This disables the smooth scrolling animation
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
