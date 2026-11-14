import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { artworks } from '../../data/dummyData.js';
import { SectionHeader, ArtworkCard } from '../molecules';
import { Button, Tag, Icon } from '../atoms';
import { easings } from '../../motion';

export function FeatureGrid({
  limit,
  showFilters = true,
  showHeader = true,
  title = "Selected Artworks & Murals",
  subheading = "CURATED ARCHIVE",
  description = "A collection of textured canvas studies, seismic impasto works, and public murals created by E-yhan in Sorsogon.",
}) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Canvas Paintings', 'Kinetic Murals', 'Mixed Media', 'Spatial Installations'];

  const filteredArtworks = artworks.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const displayItems = limit ? filteredArtworks.slice(0, limit) : filteredArtworks;

  return (
    <section className="py-16 sm:py-24 px-5 lg:px-[70px] w-full max-w-[1600px] mx-auto">
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            subheading={subheading}
            title={title}
            description={description}
            className="mb-0 max-w-2xl"
          />

          {limit && (
            <Button to="/portfolio" variant="outline" size="md" iconName="ArrowRight">
              View All Works ({artworks.length})
            </Button>
          )}
        </div>
      )}

      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-canvas-border pb-6">
          {categories.map((cat) => (
            <Tag
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Tag>
          ))}
        </div>
      )}

      {/* Artworks Grid with Kinetic Collision Reveals ("nag sasalpakan" slide) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {displayItems.map((artwork, idx) => {
            const col = idx % 3;
            // Directional kinetic collision offsets:
            // Col 0: Slams from Left with slight counter-clockwise tilt
            // Col 1: Slams from Bottom with slight scale-in
            // Col 2: Slams from Right with slight clockwise tilt
            const initialOffset =
              col === 0
                ? { opacity: 0, x: -55, rotate: -1.5 }
                : col === 2
                ? { opacity: 0, x: 55, rotate: 1.5 }
                : { opacity: 0, y: 55, scale: 0.95 };

            return (
              <motion.div
                layout
                key={artwork.slug}
                initial={initialOffset}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.65,
                  delay: (idx % 3) * 0.12,
                  ease: easings.kineticImpact,
                }}
              >
                <ArtworkCard artwork={artwork} priority={idx < 2} index={idx} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {displayItems.length === 0 && (
        <div className="text-center py-20 border border-dashed border-canvas-border">
          <p className="text-ink-muted text-sm font-accent">
            No works in this category currently available.
          </p>
        </div>
      )}
    </section>
  );
}

FeatureGrid.propTypes = {
  limit: PropTypes.number,
  showFilters: PropTypes.bool,
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
};
