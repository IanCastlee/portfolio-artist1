import React from 'react';
import { SEO } from '../seo';
import { PageTransition } from '../components/templates';
import { Button, Heading, Text, Icon } from '../components/atoms';
import { seoDefaults, siteInfo } from '../data/dummyData.js';

export function NotFoundPage() {
  const seo = seoDefaults.routes['/404'];

  return (
    <PageTransition className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-6">
      <SEO
        title={seo.title}
        description={seo.description}
        noindex={true}
        canonicalPath="/404"
      />

      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <span className="font-accent text-8xl sm:text-9xl font-black text-accent tracking-tighter block mb-4 select-none">
          404
        </span>
        <Heading as="h1" size="display" className="uppercase mb-4">
          Fragment Not Located
        </Heading>
        <Text variant="lead" className="text-ink-secondary mb-8">
          The requested canvas or document could not be retrieved from {siteInfo.shortName}'s digital archive. It may have been relocated or archived.
        </Text>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" iconName="Home">
            Return to Studio Home
          </Button>
          <Button to="/portfolio" variant="outline" size="md">
            Browse All Artworks
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
