import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteInfo, ownerInfo } from '../../data/dummyData.js';
import { usePrefersReducedMotion, easings } from '../../motion';

export function Loader({ onComplete }) {
  const prefersReduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If reduced motion is requested or already seen in this session, skip loader
    if (prefersReduced) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    try {
      const seen = sessionStorage.getItem('eyhan_loader_seen');
      if (seen) {
        setIsVisible(false);
        onComplete?.();
        return;
      }
    } catch {
      // In case sessionStorage is blocked
    }

    // Smooth counter from 0 to 100 over ~1.6 seconds
    const startTime = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          try {
            sessionStorage.setItem('eyhan_loader_seen', 'true');
          } catch {
            // Ignored
          }
          onComplete?.();
        }, 300);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [prefersReduced, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-hidden={!isVisible}
          className="loader-overlay fixed inset-0 z-[9999] bg-[#070709] text-ink-primary flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.8,
              ease: easings.kineticImpact,
            },
          }}
        >
          {/* Top meta */}
          <div className="flex items-center justify-between text-xs font-accent uppercase tracking-widest text-ink-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block animate-ping" />
              {siteInfo.shortName} Studio Archive
            </span>
            <span>Sorsogon, PH</span>
          </div>

          {/* Center typography reveal */}
          <div className="my-auto max-w-4xl">
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, ease: easings.kineticImpact }}
                className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter uppercase leading-none"
              >
                {ownerInfo.name}
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs sm:text-sm font-accent uppercase tracking-widest text-accent font-semibold"
            >
              {ownerInfo.role}
            </motion.p>
          </div>

          {/* Bottom progress bar & counter */}
          <div className="flex flex-col gap-3">
            <div className="flex items-end justify-between font-accent text-xs sm:text-sm tracking-wider">
              <span className="text-ink-muted">INITIALIZING KINETIC CANVAS</span>
              <span className="text-accent font-bold tabular-nums text-lg sm:text-xl">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-canvas-border overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
