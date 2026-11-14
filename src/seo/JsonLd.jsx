import React from 'react';
import PropTypes from 'prop-types';
import { Head } from 'vite-react-ssg';
import {
  siteInfo,
  ownerInfo,
  contactInfo,
  locationInfo,
  socialLinks,
} from '../data/dummyData.js';
import { getFullUrl } from '../utils/index.js';

export function JsonLd({
  breadcrumbs,
  faqList,
  artwork,
}) {
  // Base Artist / VisualArtist entity
  const artistSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'VisualArtist'],
    '@id': `${siteInfo.siteUrl}/#artist`,
    name: ownerInfo.name,
    alternateName: siteInfo.name,
    jobTitle: ownerInfo.role,
    description: ownerInfo.bio,
    image: ownerInfo.photo,
    url: siteInfo.siteUrl,
    sameAs: socialLinks.map((s) => s.url),
    birthPlace: {
      '@type': 'Place',
      name: 'Sorsogon, Philippines',
    },
    homeLocation: {
      '@type': 'Place',
      name: `${locationInfo.city}, ${locationInfo.province}, ${locationInfo.country}`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationInfo.streetAddress,
      addressLocality: locationInfo.city,
      addressRegion: locationInfo.province,
      postalCode: locationInfo.postalCode,
      addressCountry: locationInfo.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationInfo.latitude,
      longitude: locationInfo.longitude,
    },
    telephone: contactInfo.primaryPhone,
    email: contactInfo.primaryEmail,
    contactPoint: contactInfo.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone.intl,
      contactType: phone.label || 'studio inquiry',
      availableLanguage: ['English', 'Filipino', 'Bikol'],
    })),
  };

  // Studio Business Schema
  const studioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    '@id': `${siteInfo.siteUrl}/#studio`,
    name: siteInfo.name,
    url: siteInfo.siteUrl,
    logo: getFullUrl(siteInfo.logo),
    image: siteInfo.defaultOgImage,
    description: siteInfo.description,
    telephone: contactInfo.primaryPhone,
    email: contactInfo.primaryEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationInfo.streetAddress,
      addressLocality: locationInfo.city,
      addressRegion: locationInfo.province,
      postalCode: locationInfo.postalCode,
      addressCountry: locationInfo.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationInfo.latitude,
      longitude: locationInfo.longitude,
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    sameAs: socialLinks.map((s) => s.url),
  };

  // Optional BreadcrumbList Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: getFullUrl(crumb.path),
      })),
    };
  }

  // Optional FAQPage Schema
  let faqSchema = null;
  if (faqList && faqList.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  // Optional VisualArtwork Schema (for artwork detail pages)
  let artworkSchema = null;
  if (artwork) {
    artworkSchema = {
      '@context': 'https://schema.org',
      '@type': 'VisualArtwork',
      name: artwork.title,
      image: artwork.image,
      description: artwork.description,
      artMedium: artwork.medium,
      artform: artwork.category,
      width: artwork.dimensions,
      creator: {
        '@type': 'Person',
        name: ownerInfo.name,
        url: siteInfo.siteUrl,
      },
      dateCreated: artwork.year.toString(),
      inLanguage: 'en-PH',
    };
  }

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(artistSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(studioSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {artworkSchema && (
        <script type="application/ld+json">
          {JSON.stringify(artworkSchema)}
        </script>
      )}
    </Head>
  );
}

JsonLd.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  faqList: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  artwork: PropTypes.object,
};
