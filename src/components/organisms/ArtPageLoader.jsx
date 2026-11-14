import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion, easings } from '../../motion';

export function ArtPageLoader({ state = 'idle' }) {
  const prefersReduced = usePrefersReducedMotion();
  const isActive = state === 'covering' || state === 'revealing';

  if (prefersReduced) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Preparing Art Canvas"
          className="fixed inset-0 z-[9999] pointer-events-none select-none flex items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND CANVASES - Multi-layer Palette Knife & Pigment Sweeps */}

          {/* Layer 1: Deep Gallery Canvas (Underlay) */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: state === 'covering' ? '0%' : '-100%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.38, ease: easings.kineticImpact }}
            className="absolute inset-0 bg-[#09090d] border-b-2 border-accent"
          />

          {/* Layer 2: Slanted Impasto Paint Slice (Upper Left) */}
          <motion.div
            initial={{ x: '-100%', y: '-20%' }}
            animate={{ x: state === 'covering' ? '0%' : '-100%', y: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.35, ease: easings.kineticImpact, delay: 0.03 }}
            className="absolute inset-0 bg-[#0f0f15] opacity-95"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 75%)',
            }}
          />

          {/* Layer 3: Dynamic Cadmium Vermilion Palette Knife Streak */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: state === 'covering' ? 1 : 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-accent-electric shadow-[0_0_15px_#ff4d00]"
          />

          {/* Layer 4: Lower Canvas Wedge (Bottom Right) */}
          <motion.div
            initial={{ x: '100%', y: '20%' }}
            animate={{ x: state === 'covering' ? '0%' : '100%', y: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: easings.kineticImpact, delay: 0.04 }}
            className="absolute inset-0 bg-[#050508] border-t border-accent/40"
            style={{
              clipPath: 'polygon(0 75%, 100% 45%, 100% 100%, 0 100%)',
            }}
          />

          {/* CENTER: Minimalist Artist Viewfinder & Studio Palette Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{
              opacity: state === 'covering' ? 1 : 0,
              scale: state === 'covering' ? 1 : 0.95,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="relative z-20 flex flex-col items-center justify-center p-8 bg-[#0a0a0f]/90 border border-white/10 backdrop-blur-xl shadow-2xl max-w-sm mx-4"
          >
            {/* Viewfinder Corner Framing Marks */}
            <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent" />
            <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent" />

            {/* Art Category Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-accent uppercase tracking-[0.25em] text-white/80 font-bold">
                CANVAS TRANSITION
              </span>
            </div>

            {/* Fine Art Headline */}
            <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-wider text-white text-center mb-1">
              CURATING COMPOSITION
            </h3>
            <p className="text-[10px] font-accent uppercase tracking-widest text-accent font-semibold mb-4">
              FINE ART & VISUAL KINETICS
            </p>

            {/* Oil Pigment Color Swatches Strip (Artist Palette) */}
            <div className="flex items-center gap-2 pt-3 border-t border-white/10 w-full justify-center">
              <span className="text-[9px] font-accent uppercase text-white/40 tracking-wider mr-1">
                PIGMENT
              </span>
              <span className="w-3.5 h-3.5 rounded-sm bg-[#FFFFFF] border border-white/20 shadow-sm" title="Titanium White" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#FF4D00] shadow-sm" title="Cadmium Vermilion" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#FFB703] shadow-sm" title="Gold Ochre" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#2B2D42] shadow-sm" title="Raw Umber" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#0D1B2A] border border-white/10 shadow-sm" title="Carbon Obsidian" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

ArtPageLoader.propTypes = {
  state: PropTypes.oneOf(['idle', 'covering', 'revealing']),
};
