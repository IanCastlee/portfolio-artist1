import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Badge, Heading, Text, Icon } from '../atoms';
import { usePrefersReducedMotion } from '../../motion';

export function ArtworkCard({
  artwork,
  priority = false,
  className = '',
  index = 0,
}) {
  const prefersReduced = usePrefersReducedMotion();
  const cardRef = useRef(null);
  const isAvailable = artwork.status?.toLowerCase().includes('available');

  // Interactive 3D Physics Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReduced
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      className={`group relative flex flex-col bg-canvas-subtle border border-canvas-border overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_16px_45px_rgba(255,77,0,0.18)] hover:-translate-y-1.5 ${className}`}
    >
      {/* Fine-Art Gallery Framing Brackets (Expand and glow on hover) */}
      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-transparent group-hover:border-accent transition-all duration-300 z-30 pointer-events-none group-hover:scale-110" />
      <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-transparent group-hover:border-accent transition-all duration-300 z-30 pointer-events-none group-hover:scale-110" />
      <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-transparent group-hover:border-accent transition-all duration-300 z-30 pointer-events-none group-hover:scale-110" />
      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-transparent group-hover:border-accent transition-all duration-300 z-30 pointer-events-none group-hover:scale-110" />

      {/* Image container with hover zoom, shimmer sweep, and 3D depth */}
      <Link
        to={`/portfolio/${artwork.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-canvas-surface focus:outline-none"
        aria-label={`View artwork details for ${artwork.title}`}
      >
        <img
          src={artwork.thumbnail || artwork.image}
          alt={`Artwork by E-yhan: ${artwork.title}`}
          width={800}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/artworks/bulusan-resonance.svg';
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
        />

        {/* Kinetic luminous sheen sweep overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />

        {/* Floating status badges with hover lift */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20 pointer-events-none transition-transform duration-300 group-hover:-translate-y-0.5">
          <Badge variant={isAvailable ? 'electric' : 'default'}>
            {artwork.status}
          </Badge>
          <span className="px-2.5 py-1 text-xs font-accent font-semibold bg-canvas/80 backdrop-blur-sm text-ink-primary border border-canvas-border shadow-sm">
            {artwork.year}
          </span>
        </div>

        {/* Hover overlay hint with kinetic arrow nudge */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
          <span className="inline-flex items-center gap-2 text-xs font-accent uppercase tracking-widest text-accent font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Explore Study{' '}
            <Icon
              name="ArrowRight"
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>

      {/* Content metadata */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4 relative z-20 bg-canvas-subtle">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-accent uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
              {artwork.category}
            </span>
            <span className="text-xs font-accent text-ink-muted">
              {artwork.dimensions}
            </span>
          </div>

          <Heading
            as="h3"
            size="h3"
            className="mb-2 group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1 transform"
          >
            <Link to={`/portfolio/${artwork.slug}`}>
              {artwork.title}
            </Link>
          </Heading>

          <Text variant="small" className="line-clamp-2 text-ink-secondary">
            {artwork.summary || artwork.description}
          </Text>
        </div>

        {/* Footer row with animated corner arrow */}
        <div className="pt-4 border-t border-canvas-border flex items-center justify-between">
          <span className="text-xs text-ink-muted italic font-serif">
            {artwork.medium}
          </span>
          <Link
            to={`/portfolio/${artwork.slug}`}
            className="p-2 text-ink-muted group-hover:text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-45"
            aria-label={`Open ${artwork.title}`}
          >
            <Icon name="ArrowUpRight" size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    medium: PropTypes.string.isRequired,
    dimensions: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  priority: PropTypes.bool,
  className: PropTypes.string,
  index: PropTypes.number,
};
