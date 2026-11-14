import React from 'react';
import { SEO, JsonLd } from '../seo';
import { Hero, FeatureGrid, KineticShowcase, Testimonials, FAQ, CTASection } from '../components/organisms';
import { PageTransition } from '../components/templates';
import { seoDefaults, faqs } from '../data/dummyData.js';

export function HomePage() {
  const seo = seoDefaults.routes['/'];

  return (
    <PageTransition>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/"
      />
      <JsonLd faqList={faqs} />

      <Hero />
      <FeatureGrid limit={6} />
      <KineticShowcase />
      <Testimonials />
      <FAQ />
      <CTASection />
    </PageTransition>
  );
}
