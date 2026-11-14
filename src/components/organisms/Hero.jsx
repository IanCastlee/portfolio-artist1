import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ownerInfo, artistStats, artworks } from '../../data/dummyData.js';
import { Button, Heading, Text, Badge } from '../atoms';
import { usePrefersReducedMotion, easings } from '../../motion';

// Smooth kinetic number counter component
function StatCounter({ value, duration = 2.0 }) {
  const numericPart = parseInt(value, 10);
  const suffix = value.replace(/^[0-9]+/, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setCount(numericPart);
      return;
    }

    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Smooth ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * numericPart));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(numericPart);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [numericPart, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  const prefersReduced = usePrefersReducedMotion();
  const featuredArt = artworks[0];

  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen lg:min-h-[700px] pt-24 lg:pt-24 pb-4 lg:pb-6 flex flex-col justify-between overflow-hidden bg-canvas border-b border-canvas-border">
      {/* 1. ATMOSPHERIC BACKGROUND ARTWORK CANVAS (Matching /portfolio aesthetic) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/artworks/pacific-drift.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-30 lg:opacity-40 scale-105 filter contrast-125 saturate-110"
        />
        {/* Deep obsidian vignette gradients for high contrast & text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/75 to-canvas/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-35 mix-blend-overlay" />
      </div>

      {/* Decorative ambient color blooms */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. TOP ARCHITECTURAL METADATA STRAND */}
      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] relative z-20 flex items-center justify-between text-[11px] font-accent tracking-widest uppercase text-ink-muted select-none">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-ink-secondary font-medium">Sorsogon Atelier</span>
          <span className="text-ink-faint hidden sm:inline">•</span>
          <span className="hidden sm:inline text-ink-muted">12.9738° N, 124.0057° E</span>
        </motion.div>

        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-3"
        >
          <span className="text-ink-faint">MEDIUM</span>
          <span className="text-ink-secondary">Volcanic Ash • Industrial Enamel • Mixed Media</span>
          <span className="px-1.5 py-0.5 border border-white/10 text-[9px] text-accent-electric">
            ARCHIVAL
          </span>
        </motion.div>
      </div>

      {/* 3. MAIN HERO SPATIAL COMPOSITION */}
      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] relative z-10 my-auto flex-1 flex items-center">
        {/* Same-Row CSS Grid: Left typography and Right artwork overlap seamlessly */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center relative">

          {/* LEFT PANEL: Monumental Abstract Art Typography (z-20) */}
          <div className="lg:col-start-1 lg:col-end-8 xl:col-end-9 lg:row-start-1 relative z-20 flex flex-col items-start pointer-events-auto">

            {/* ABSTRACT ART MONUMENTAL HEADLINE */}
            <div className="mb-3 lg:mb-4 select-none w-full">
              <Heading
                as="h1"
                size="giant"
                className="flex flex-col uppercase tracking-tighter leading-[0.84] font-display font-black drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
              >
                {/* Line 1: E-YHAN - Kinetic entrance from left with titanium gradient */}
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { x: -80, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, ease: easings.kineticImpact }}
                  className="relative inline-flex items-baseline"
                >
                  <span className="block text-5xl sm:text-7xl lg:text-[4.6rem] xl:text-[5.8rem] 2xl:text-[6.8rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0f0f8] to-white/70 tracking-tight">
                    {ownerInfo.name}
                  </span>
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="hidden sm:inline-flex items-center ml-4 px-2 py-0.5 border border-accent/40 text-[9px] font-accent text-accent tracking-widest uppercase align-middle bg-canvas/80 backdrop-blur-md"
                  >
                    RAW // 01
                  </motion.span>
                </motion.div>

                {/* Line 2: VISUAL - Saturated kinetic vermilion with dynamic skew */}
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { x: 80, skewX: -16, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ x: 0, skewX: -5, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: 0.12, ease: easings.kineticImpact }}
                  className="relative -mt-1 sm:-mt-2 lg:-mt-3 flex items-center"
                >
                  <span className="inline-block text-5xl sm:text-7xl lg:text-[4.6rem] xl:text-[5.8rem] 2xl:text-[6.8rem] text-accent tracking-tighter drop-shadow-[0_0_40px_rgba(255,77,46,0.45)]">
                    VISUAL
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180, 270, 360] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-accent-electric ml-3 mb-1"
                  />
                </motion.div>

                {/* Line 3: KINETICS - Brutalist wireframe outline overlapping the artwork */}
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { y: 50, opacity: 0, letterSpacing: '0.08em' }}
                  animate={{ y: 0, opacity: 1, letterSpacing: '0.02em' }}
                  transition={{ duration: 0.8, delay: 0.25, ease: easings.kineticImpact }}
                  className="relative -mt-1 sm:-mt-2 lg:-mt-3 flex items-center"
                >
                  <span className="block text-5xl sm:text-7xl lg:text-[4.6rem] xl:text-[5.8rem] 2xl:text-[6.8rem] slam-text-stroke hover:text-white/20 transition-colors duration-300">
                    KINETICS
                  </span>
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: easings.kineticImpact }}
                    className="hidden lg:flex items-center flex-1 ml-4 gap-2"
                  >
                    <span className="h-[2px] w-14 bg-gradient-to-r from-accent to-transparent" />
                    <span className="text-[9px] font-accent text-ink-muted uppercase tracking-widest bg-canvas/70 px-1.5 py-0.5 border border-white/5">
                      MONOLITH
                    </span>
                  </motion.div>
                </motion.div>
              </Heading>
            </div>

            {/* Curatorial Bio Statement */}
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <Text variant="lead" className="max-w-xl text-xs sm:text-sm text-ink-secondary mb-3 lg:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-none bg-canvas/40 backdrop-blur-[2px] p-1.5 rounded-sm">
                {ownerInfo.shortBio}
              </Text>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button to="/portfolio" variant="primary" size="md" iconName="ArrowRight">
                Explore Selected Works
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Studio Commissions
              </Button>
            </motion.div>
          </div>

          {/* RIGHT PANEL: Maximized Masterwork Canvas (Locked to lg:row-start-1, fills the right area with z-10) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, ease: easings.kineticImpact, delay: 0.15 }}
            className="lg:col-start-5 xl:col-start-5 lg:col-end-13 lg:row-start-1 relative z-10 flex justify-end w-full mt-6 lg:mt-0"
          >
            {/* Museum-Grade Maximized Floating Canvas Showcase */}
            <div className="relative group w-full lg:max-w-full">
              
              {/* Soft Ambient Backlight */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-accent/30 via-accent-purple/20 to-transparent rounded-lg blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Gallery Corner Framing Brackets */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent-electric z-30 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-accent-electric z-30 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-accent-electric z-30 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent-electric z-30 pointer-events-none" />

              {/* Maximized Image Canvas Container (Fills the right section within 100vh) */}
              <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[58vh] xl:h-[64vh] 2xl:h-[68vh] max-h-[68vh] overflow-hidden bg-canvas-surface shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
                <img
                  src={featuredArt.image}
                  alt={`Hero Masterwork: ${featuredArt.title} by ${ownerInfo.name}`}
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchpriority="high"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/artworks/bulusan-resonance.svg';
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-canvas/30 to-transparent opacity-90 hidden lg:block" />

                {/* Minimalist Curatorial Plaque */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col gap-1 z-20 bg-canvas/85 backdrop-blur-md p-3 sm:p-4 border border-white/10 max-w-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-accent text-accent-electric font-semibold tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
                      Latest Masterwork
                    </span>
                    <span className="text-xs sm:text-sm font-accent text-ink-primary font-bold">
                      {featuredArt.year}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-display font-bold text-ink-primary truncate tracking-tight">
                    {featuredArt.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-accent text-ink-muted truncate">
                    {featuredArt.dimensions} • {featuredArt.medium}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4. INTEGRATED STUDIO STATS TICKER (Clean bottom row within 100vh) */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] relative z-20 select-none"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-3 border-t border-canvas-border/80">
          {artistStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/10 pl-3">
              <div className="flex items-baseline gap-2">
                <span className="text-[9px] font-accent text-accent/80 font-mono">
                  {`0${idx + 1} //`}
                </span>
                <span className="font-accent text-lg sm:text-xl lg:text-2xl font-black text-ink-primary leading-tight">
                  <StatCounter value={stat.value} duration={2.0} />
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-accent uppercase tracking-wider text-ink-muted truncate mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}