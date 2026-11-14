import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Heading, Text } from '../atoms';
import { usePrefersReducedMotion, easings } from '../../motion';

export function PageHero({
  subheading,
  title,
  description,
  backgroundImage = '/assets/artworks/pacific-drift.svg',
  children,
  className = '',
}) {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden bg-canvas border-b border-canvas-border pt-36 sm:pt-44 pb-16 sm:pb-24 ${className}`}>
      {/* Background artwork image with deep cinematic contrast gradient */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={backgroundImage}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter contrast-125 saturate-110"
        />
        {/* Layered dark gradients for maximum text legibility & seamless fade to canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] relative z-10">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easings.kineticImpact }}
          className="max-w-4xl"
        >
          {subheading && (
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-2.5 h-2.5 bg-accent" />
              <span className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
                {subheading}
              </span>
            </div>
          )}

          <Heading
            as="h1"
            size="giant"
            className="uppercase mb-4 text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          >
            {title}
          </Heading>

          {description && (
            <Text
              variant="lead"
              className="text-ink-secondary text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed"
            >
              {description}
            </Text>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </div>
  );
}

PageHero.propTypes = {
  subheading: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
