import { useEffect, useState, useCallback } from "react";

function useScroll({ scrollRange = 20 } = {}) {
  const [isScroll, setScroll] = useState(false);
  const handleScrollEvent = useCallback(() => {
    if (window.scrollY > scrollRange) return setScroll(true);

    return setScroll(false);
  }, [scrollRange]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)

    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [handleScrollEvent]);

  return isScroll;
}

export default useScroll;
