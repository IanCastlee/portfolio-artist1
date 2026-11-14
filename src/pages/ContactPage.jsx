import React from 'react';
import { SEO, JsonLd } from '../seo';
import { PageTransition } from '../components/templates';
import { ContactSection, FAQ } from '../components/organisms';
import { seoDefaults, faqs, locationInfo, ownerInfo } from '../data/dummyData.js';

export function ContactPage() {
  const seo = seoDefaults.routes['/contact'];

  return (
    <PageTransition className="pt-16 sm:pt-20">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/contact"
      />
      <JsonLd
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        faqList={faqs}
      />

      <ContactSection
        title="Direct Studio Dialogue"
        subheading="COMMISSIONS & VISITS"
        description={`Inquire about private canvas commissions, architectural murals, or schedule an in-person viewing at ${ownerInfo.name}'s studio in Piot, ${locationInfo.city}, ${locationInfo.province}.`}
      />

      <FAQ />
    </PageTransition>
  );
}
