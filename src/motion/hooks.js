import { useState, useEffect } from 'react';

/**
 * Safely checks prefers-reduced-motion in browser only (Node SSR safe)
 */
export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handler = (e) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

/**
 * Tracks window scroll position and direction for navbar show/hide
 */
export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.pageYOffset;
    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);

      if (Math.abs(currentScrollY - lastScrollY) < 6) return;
      setScrollDir(currentScrollY > lastScrollY && currentScrollY > 80 ? 'down' : 'up');
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDir, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  return { scrollDir, scrollY };
}
