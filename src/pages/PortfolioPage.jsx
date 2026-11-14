import React from 'react';
import { SEO, JsonLd } from '../seo';
import { PageHero, FeatureGrid, CTASection } from '../components/organisms';
import { PageTransition } from '../components/templates';
import { seoDefaults } from '../data/dummyData.js';

export function PortfolioPage() {
  const seo = seoDefaults.routes['/portfolio'];

  return (
    <PageTransition>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/portfolio"
      />
      <JsonLd
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ]}
      />

      {/* Atmospheric Page Hero with Art Background */}
      <PageHero
        subheading="FINE ART CATALOG"
        title="Complete Archive"
        description="Explore the complete collection of canvas masterworks, architectural murals, and mixed-media sculptures created by E-yhan in Sorsogon."
        backgroundImage="/assets/artworks/pacific-drift.svg"
      />

      <FeatureGrid showHeader={false} showFilters={true} />

      <CTASection />
    </PageTransition>
  );
}
