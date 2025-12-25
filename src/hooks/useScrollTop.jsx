import { useState, useEffect } from 'react';

export function useScrollTop(threshold = 300) {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 清除監聽器，避免記憶體洩漏
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { showGoTop, scrollToTop };
}