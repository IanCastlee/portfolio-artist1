import React from 'react';
import { SEO, JsonLd } from '../seo';
import { PageTransition } from '../components/templates';
import { ExhibitionRow } from '../components/molecules';
import { PageHero, CTASection } from '../components/organisms';
import { seoDefaults, exhibitions, ownerInfo } from '../data/dummyData.js';

export function ExhibitionsPage() {
  const seo = seoDefaults.routes['/exhibitions'];

  return (
    <PageTransition>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/exhibitions"
      />
      <JsonLd
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Exhibitions', path: '/exhibitions' },
        ]}
      />

      {/* Atmospheric Page Hero with Art Background */}
      <PageHero
        subheading="CHRONOLOGY & INSTITUTIONS"
        title="Exhibition History"
        description={`Solo presentations, biennial participations, and museum showcases featuring the kinetic visual works of ${ownerInfo.name} across the Philippines and Southeast Asia.`}
        backgroundImage="/assets/artworks/kasanggayahan.svg"
      />

      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] py-16 sm:py-24">
        <div className="space-y-2">
          {exhibitions.map((exhibit, idx) => (
            <ExhibitionRow key={idx} exhibition={exhibit} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-canvas-subtle border border-canvas-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-ink-primary">
              Curatorial & Museum Inquiries
            </h3>
            <p className="text-sm text-ink-secondary mt-1 max-w-xl">
              E-yhan is currently scheduling biennial commissions and museum retrospectives for 2025–2026. For loan requests or artist talks, reach out directly.
            </p>
          </div>
          <a
            href="/contact"
            className="px-6 py-3.5 bg-accent text-white font-accent uppercase text-xs tracking-wider font-semibold hover:bg-accent-hover shrink-0 transition-colors"
          >
            Inquire for Exhibition Loan
          </a>
        </div>
      </div>

      <CTASection />
    </PageTransition>
  );
}
