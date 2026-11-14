import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/dummyData.js';
import { SectionHeader } from '../molecules';
import { Heading, Text, Icon } from '../atoms';

export function FAQ({ items = faqs, className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className={`py-20 sm:py-28 px-5 lg:px-[70px] max-w-4xl mx-auto ${className}`}>
      <SectionHeader
        subheading="FREQUENT INQUIRIES"
        title="Studio & Acquisition FAQ"
        description="Clear answers regarding bespoke commissions, museum crate shipping from Sorsogon, provenance records, and gallery representation."
        align="center"
      />

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`border transition-colors duration-200 ${
                isOpen ? 'border-accent bg-canvas-surface' : 'border-canvas-border bg-canvas-subtle hover:border-ink-secondary'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-display font-bold text-base sm:text-lg text-ink-primary">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-none border border-canvas-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-accent text-white border-accent' : 'text-ink-secondary'
                  }`}
                >
                  <Icon name="ChevronDown" size={16} />
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-ink-secondary text-sm sm:text-base leading-relaxed border-t border-canvas-border/50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
