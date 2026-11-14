import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Loader, ArtPageLoader, FloatingContact } from '../organisms';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function RootLayout() {
  const location = useLocation();
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [transitionState, setTransitionState] = useState('idle'); // 'idle' | 'covering' | 'revealing'
  const isFirstMount = useRef(true);

  // Add js-ready class on client mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('js-ready');
    }
  }, []);

  // Synchronous route change handler to guarantee loader covers BEFORE new page is shown
  useIsomorphicLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Immediately trigger covering state
    setTransitionState('covering');

    // Scroll to top while screen is covered
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // At 380ms: Curtains are fully closed, switch to revealing the new page
    const revealTimer = setTimeout(() => {
      setTransitionState('revealing');
    }, 380);

    // At 750ms: Curtains have completely opened, transition complete
    const finishTimer = setTimeout(() => {
      setTransitionState('idle');
    }, 750);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(finishTimer);
    };
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink-primary selection:bg-accent selection:text-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[10000] px-4 py-2 bg-accent text-white font-accent uppercase text-xs tracking-wider"
      >
        Skip to main content
      </a>

      {/* Cinematic initial session loader */}
      <Loader onComplete={() => setLoaderComplete(true)} />

      {/* Badass Fine Art Canvas transition loader on route change */}
      <ArtPageLoader state={transitionState} />

      {/* Global persistent header */}
      <Navbar />

      {/* Main page content - Hidden while loader covers, reveals once covered */}
      <main
        id="main-content"
        className={`flex-1 transition-opacity duration-150 ${
          transitionState === 'covering' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Outlet />
      </main>

      {/* Floating contact widget */}
      <FloatingContact />

      {/* Global footer */}
      <Footer />
    </div>
  );
}
