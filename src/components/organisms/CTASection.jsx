import React from 'react';
import { locationInfo } from '../../data/dummyData.js';
import { Heading, Text, Button, Badge } from '../atoms';

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-[70px] overflow-hidden bg-canvas border-t border-canvas-border">
      {/* Background artwork image with deep cinematic contrast gradient */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/artworks/bulusan-resonance.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/90 to-canvas/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-transparent to-canvas" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      {/* Decorative neon gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        <Badge variant="accent" className="mb-6">
          COMMISSIONS OPEN FOR 2024 / 2025
        </Badge>

        <Heading as="h2" size="display" className="uppercase mb-6 max-w-3xl tracking-tight leading-tight">
          Commission a <span className="text-accent">Monumental</span> Masterwork
        </Heading>

        <Text variant="lead" className="max-w-2xl text-ink-secondary mb-10">
          Transform your architectural facade, luxury residence, or corporate lobby with site-specific kinetic canvases and murals directly from E-yhan's studio in Sorsogon.
        </Text>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Button to="/contact" variant="primary" size="lg" iconName="ArrowRight">
            Initiate Studio Dialogue
          </Button>
          <Button to="/portfolio" variant="outline" size="lg">
            Browse Archive
          </Button>
        </div>

        <p className="mt-8 text-xs font-accent uppercase tracking-widest text-ink-muted">
          Based in {locationInfo.city}, {locationInfo.province} • Door-to-door worldwide insured freight
        </p>
      </div>
    </section>
  );
}
