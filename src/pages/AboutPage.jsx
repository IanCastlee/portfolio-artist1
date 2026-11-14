import React from 'react';
import { SEO, JsonLd } from '../seo';
import { PageTransition } from '../components/templates';
import { SectionHeader } from '../components/molecules';
import { PageHero, CTASection } from '../components/organisms';
import { Heading, Text, Badge, Button, Icon } from '../components/atoms';
import { seoDefaults, ownerInfo, siteInfo, locationInfo, services } from '../data/dummyData.js';

export function AboutPage() {
  const seo = seoDefaults.routes['/about'];

  return (
    <PageTransition>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/about"
      />
      <JsonLd
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      {/* Atmospheric Page Hero with Art Background */}
      <PageHero
        subheading="ORIGIN & PHILOSOPHY"
        title="The Atelier & Vision"
        description="A sanctuary for visceral kinetics, geological pigments, and contemporary architectural fine art forged in Sorsogon, Philippines."
        backgroundImage="/assets/artworks/bioluminescence.svg"
      />

      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] py-16 sm:py-24">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-canvas-border">
          
          {/* Left Column: Portrait & Studio Location Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[3/4] bg-canvas-subtle border-2 border-canvas-border overflow-hidden shadow-2xl">
              <img
                src={ownerInfo.photo}
                alt={`${ownerInfo.name} working at his studio in Sorsogon City`}
                width={800}
                height={1067}
                loading="eager"
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-canvas/80 backdrop-blur-sm px-3 py-1 text-xs font-accent uppercase tracking-widest text-accent font-bold border border-canvas-border">
                Studio Atelier • Piot, Sorsogon
              </div>
            </div>

            <div className="p-6 bg-canvas-subtle border border-canvas-border">
              <h2 className="text-xs font-accent uppercase tracking-widest text-ink-muted mb-2 font-bold">
                Geographic Provenance
              </h2>
              <p className="text-sm font-semibold text-ink-primary">
                {locationInfo.city}, {locationInfo.province}, {locationInfo.country}
              </p>
              <p className="text-xs text-ink-secondary mt-1">
                Situated in the volcanic heart of the Bicol Peninsula, between Mt. Bulusan and the Pacific seaboard.
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Studio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-accent" />
                <span className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
                  ARTIST PROFILE
                </span>
              </div>
              <Heading as="h2" size="display" className="uppercase mb-6">
                About <span className="text-accent">{ownerInfo.name}</span>
              </Heading>
              
              <div className="prose prose-invert max-w-none space-y-4 text-ink-secondary leading-relaxed">
                <p className="text-lg text-ink-primary font-medium">
                  {ownerInfo.shortBio}
                </p>
                <p>
                  Rooted in Sorsogon City, E-yhan’s practice explores the physical friction between organic earth textures and brutalist velocity. Each piece is constructed through heavy layering—infusing pulverized volcanic ash from Mount Bulusan, raw natural pigments from the Bicol Pacific coastline, and high-gloss industrial enamel.
                </p>
                <p>
                  Rather than painting tranquil representations, E-yhan approaches canvas as a site of kinetic collision. The results are monumental, highly tactile works that transform commercial lobbies, luxury private residences, and regional galleries into dynamic spatial encounters.
                </p>
              </div>
            </div>

            {/* Studio Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-canvas-border">
              <div className="p-5 bg-canvas-subtle border border-canvas-border">
                <h3 className="font-display font-bold text-base text-ink-primary mb-1">
                  Volcanic Mediums
                </h3>
                <p className="text-xs text-ink-muted">
                  Authentic Mount Bulusan pyroclastic ash harvested and bonded with archival mediums for permanent tectonic texture.
                </p>
              </div>
              <div className="p-5 bg-canvas-subtle border border-canvas-border">
                <h3 className="font-display font-bold text-base text-ink-primary mb-1">
                  Kinetic Trajectory
                </h3>
                <p className="text-xs text-ink-muted">
                  Gestural strokes executed with rapid industrial trowels, capturing the micro-second velocity of geological rupture.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button to="/contact" variant="primary" size="lg" iconName="ArrowRight">
                Commission a Custom Piece
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View Studio Archive
              </Button>
            </div>
          </div>

        </div>

        {/* Services & Capabilities Section */}
        <div className="pt-20">
          <SectionHeader
            subheading="COMMISSIONS & CAPABILITIES"
            title="Studio Disciplines"
            description="From private collectors to corporate architectural firms, E-yhan offers tailored creative services."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-canvas-subtle border border-canvas-border p-6 flex flex-col justify-between hover:border-accent transition-colors">
                <div>
                  <span className="text-xs font-accent text-accent font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink-primary mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-canvas-border flex items-center justify-between text-xs font-accent text-ink-muted">
                  <span>Scope: {service.scope}</span>
                  <span className="text-accent">{service.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
    </PageTransition>
  );
}
