import { useEffect, useState } from 'react';

export const useHasScrolledPast = () => {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  // const threshold = inputThreshold || 100;

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY;

      // checks to see if user is scrolling up or down
      if (scrollPos >= window.innerHeight) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hasScrolledPast;
};
