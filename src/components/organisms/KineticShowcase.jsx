import React from 'react';
import { motion } from 'framer-motion';
import { ownerInfo, locationInfo } from '../../data/dummyData.js';
import { Heading, Text, Badge, Button, Icon } from '../atoms';
import { usePrefersReducedMotion, easings } from '../../motion';

export function KineticShowcase() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-canvas-subtle border-y border-canvas-border">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[70px]">
        
        {/* Kinetic Collision Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* SLAM FROM LEFT: Raw Earth & Volcanic Roots */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.75, ease: easings.kineticImpact }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent" />
              <span className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
                PHILOSOPHY & PROCESS
              </span>
            </div>

            <Heading as="h2" size="display" className="uppercase">
              COLLIDING <span className="text-accent">VOLCANIC</span> MATTER & VELOCITY
            </Heading>

            <Text variant="lead" className="text-ink-primary font-medium">
              "My studio in Sorsogon is anchored between geothermal faultlines and the open Pacific. The work is not decorative—it is a physical collision of raw materials and kinetic momentum."
            </Text>

            <Text variant="body" className="text-ink-secondary">
              E-yhan's technique rejects static, passive canvas traditions. By infusing pulverized basaltic ash from Mount Bulusan with rapid, high-tensile industrial acrylic sweeps, each painting freezes a micro-second of violent kinetic force. When observed up close, the textures reveal jagged ridges and deep tectonic canyons that shift under natural sunlight.
            </Text>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-canvas-border">
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-ink-muted">Studio Origin</p>
                <p className="font-display text-lg font-bold text-ink-primary">Brgy. Piot, Sorsogon City</p>
              </div>
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-ink-muted">Primary Medium</p>
                <p className="font-display text-lg font-bold text-accent">Bulusan Ash & Enamel</p>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="md" iconName="ArrowRight">
                Read Full Artist Statement
              </Button>
            </div>
          </motion.div>

          {/* SLAM FROM RIGHT: Visual Impact Canvas Panel */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.75, ease: easings.kineticImpact }}
            className="relative"
          >
            {/* Split overlapping art layers simulating collision */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Layer 1: Background canvas */}
              <div className="aspect-[4/5] bg-canvas-surface border-2 border-canvas-border overflow-hidden shadow-2xl relative">
                <img
                  src="/assets/artworks/bioluminescence.svg"
                  alt="E-yhan Studio Process in Sorsogon"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-canvas/30 mix-blend-multiply" />
              </div>

              {/* Layer 2: Slanted Slammed Card Overlap */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/4 aspect-[4/3] bg-canvas border-2 border-accent overflow-hidden shadow-slam-hard p-2">
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src="/assets/artworks/kasanggayahan.svg"
                    alt="Kinetic Impasto Close-up"
                    width={600}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-canvas/90 px-3 py-1 font-accent text-xs uppercase tracking-wider text-accent font-bold">
                    Macro Texture Study
                  </div>
                </div>
              </div>

              {/* Tectonic badge */}
              <div className="absolute -top-6 -left-6 bg-accent text-white px-4 py-2 font-accent text-xs font-black uppercase tracking-widest shadow-lg">
                100% Sorsogon Provenance
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
