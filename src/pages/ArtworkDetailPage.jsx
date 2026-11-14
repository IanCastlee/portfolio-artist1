import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO, JsonLd } from '../seo';
import { PageTransition } from '../components/templates';
import { artworks, ownerInfo, locationInfo, contactInfo } from '../data/dummyData.js';
import { getMailtoHref, getTelHref, getWhatsAppHref } from '../utils';
import { Heading, Text, Badge, Button, Icon } from '../components/atoms';
import { ArtworkCard } from '../components/molecules';

export function ArtworkDetailPage() {
  const { slug } = useParams();
  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    return <Navigate to="/portfolio" replace />;
  }

  const isAvailable = artwork.status.toLowerCase().includes('available');
  const relatedArtworks = artworks.filter((item) => item.slug !== slug).slice(0, 3);

  const inquiryMailto = getMailtoHref(
    contactInfo.primaryEmail,
    `[Acquisition Inquiry] ${artwork.title}`,
    `Hello E-yhan Studio,\n\nI am interested in acquiring or learning more about '${artwork.title}' (${artwork.year}, ${artwork.dimensions}).\n\nPlease send provenance details and shipping estimate.`
  );

  return (
    <PageTransition className="pt-28 sm:pt-36 pb-20">
      <SEO
        title={`${artwork.title} (${artwork.year})`}
        description={`${artwork.title} by E-yhan. ${artwork.medium}. Dimensions: ${artwork.dimensions}. Sorsogon, Philippines.`}
        image={artwork.image}
        canonicalPath={`/portfolio/${artwork.slug}`}
      />
      <JsonLd
        artwork={artwork}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: artwork.title, path: `/portfolio/${artwork.slug}` },
        ]}
      />

      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px]">
        
        {/* Breadcrumb row */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-accent uppercase tracking-wider text-ink-muted mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-ink-primary font-bold">{artwork.title}</span>
        </nav>

        {/* Main Artwork Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-canvas-border">
          
          {/* Left: High-Res Image Presentation */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative bg-canvas-subtle border-2 border-canvas-border overflow-hidden shadow-2xl">
              <img
                src={artwork.image}
                alt={`${artwork.title} by E-yhan`}
                width={1200}
                height={900}
                loading="eager"
                fetchpriority="high"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/artworks/bulusan-resonance.svg';
                }}
                className="w-full h-auto object-cover max-h-[75vh]"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant={isAvailable ? 'electric' : 'default'}>
                  {artwork.status}
                </Badge>
                <span className="px-3 py-1 text-xs font-accent font-bold bg-canvas/80 text-white border border-canvas-border">
                  {artwork.year}
                </span>
              </div>
            </div>

            <p className="text-xs font-accent text-ink-muted text-center italic">
              Photography captured in natural studio light at Piot, Sorsogon City atelier.
            </p>
          </div>

          {/* Right: Curatorial Specifications & Inquiries */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-accent inline-block" />
                <span className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
                  {artwork.category}
                </span>
              </div>
              <Heading as="h1" size="display" className="mb-4">
                {artwork.title}
              </Heading>
              <p className="text-base text-ink-secondary leading-relaxed font-serif italic">
                "{artwork.summary || artwork.description}"
              </p>
            </div>

            {/* Artwork Specifications Table */}
            <div className="bg-canvas-subtle border border-canvas-border p-6 space-y-4">
              <h2 className="text-xs font-accent uppercase tracking-widest text-ink-muted font-bold border-b border-canvas-border pb-2">
                Work Specifications
              </h2>
              
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-ink-muted font-accent text-xs uppercase">Artist</span>
                <span className="col-span-2 text-ink-primary font-semibold">{ownerInfo.name}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm border-t border-canvas-border/50 pt-2">
                <span className="text-ink-muted font-accent text-xs uppercase">Medium</span>
                <span className="col-span-2 text-ink-primary">{artwork.medium}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm border-t border-canvas-border/50 pt-2">
                <span className="text-ink-muted font-accent text-xs uppercase">Dimensions</span>
                <span className="col-span-2 text-ink-primary font-accent font-semibold">{artwork.dimensions}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm border-t border-canvas-border/50 pt-2">
                <span className="text-ink-muted font-accent text-xs uppercase">Location</span>
                <span className="col-span-2 text-ink-primary">{locationInfo.city}, {locationInfo.province}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm border-t border-canvas-border/50 pt-2">
                <span className="text-ink-muted font-accent text-xs uppercase">Provenance</span>
                <span className="col-span-2 text-ink-primary">{artwork.collector || 'E-yhan Studio Archives'}</span>
              </div>
            </div>

            {/* Curator Analysis */}
            {artwork.curatorNote && (
              <div className="border-l-2 border-accent pl-4 py-1">
                <span className="text-xs font-accent uppercase tracking-wider text-accent font-bold block mb-1">
                  Curator Note
                </span>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {artwork.curatorNote}
                </p>
              </div>
            )}

            {/* Acquisition CTA */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={inquiryMailto}
                className="w-full inline-flex items-center justify-center font-accent font-semibold tracking-wider uppercase text-sm px-6 py-4 bg-accent text-white hover:bg-accent-hover shadow-glow-accent transition-all group"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                <span>Inquire About Acquisition</span>
              </a>

              {contactInfo.whatsapp && (
                <a
                  href={getWhatsAppHref(contactInfo.whatsapp, `Hello E-yhan, I am inquiring about '${artwork.title}'.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center font-accent font-semibold tracking-wider uppercase text-sm px-6 py-3 border border-canvas-border bg-canvas-surface hover:border-emerald-500 text-ink-primary hover:text-emerald-400 transition-colors"
                >
                  <Icon name="MessageSquare" size={16} className="mr-2 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
            </div>

            <p className="text-xs text-ink-muted text-center">
              Includes signed Certificate of Authenticity and museum-grade shipping crate.
            </p>
          </div>

        </div>

        {/* Related Works Row */}
        <div className="pt-16">
          <Heading as="h2" size="h2" className="mb-8">
            Complementary Studies & Works
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArtworks.map((item) => (
              <ArtworkCard key={item.slug} artwork={item} />
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

// SSG Path Generator for Prerendering real HTML for each artwork
ArtworkDetailPage.getStaticPaths = () => {
  return artworks.map((artwork) => ({
    params: { slug: artwork.slug },
  }));
};
