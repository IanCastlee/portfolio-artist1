import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/dummyData.js';
import { SectionHeader, Card, RatingStars } from '../molecules';
import { Icon } from '../atoms';
import { easings } from '../../motion';

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-5 lg:px-[70px] w-full max-w-[1600px] mx-auto border-b border-canvas-border">
      <SectionHeader
        subheading="PATRONS & CURATORS"
        title="Collector Reflections"
        description="Voices of private collectors, architectural directors, and art curators who live with E-yhan's masterworks across the Philippines and Southeast Asia."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => {
          const col = idx % 3;
          const initialOffset =
            col === 0
              ? { opacity: 0, x: -45 }
              : col === 2
              ? { opacity: 0, x: 45 }
              : { opacity: 0, y: 45 };

          return (
            <motion.div
              key={idx}
              initial={initialOffset}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: easings.kineticImpact,
              }}
              className="h-full flex"
            >
              <Card className="flex flex-col justify-between h-full bg-canvas-subtle border-canvas-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <RatingStars rating={item.rating} />
                    <Icon name="Quote" size={20} className="text-accent/40 group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <p className="text-sm sm:text-base text-ink-primary font-serif italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-canvas-border flex flex-col gap-1">
                  <span className="text-xs font-accent text-accent uppercase tracking-wider font-bold">
                    {item.artworkPurchased}
                  </span>
                  <h4 className="font-display font-bold text-ink-primary text-base group-hover:text-accent transition-colors duration-300">
                    {item.author}
                  </h4>
                  <p className="text-xs text-ink-muted">
                    {item.title}
                  </p>
                  <p className="text-xs font-accent text-ink-faint">
                    {item.company} • {item.location}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
