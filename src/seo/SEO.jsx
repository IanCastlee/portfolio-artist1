import React from 'react';
import PropTypes from 'prop-types';
import { Head } from 'vite-react-ssg';
import { siteInfo, seoDefaults } from '../data/dummyData.js';
import { getFullUrl } from '../utils/index.js';

export function SEO({
  title,
  description,
  keywords,
  image,
  canonicalPath = '',
  noindex = false,
  type = 'website',
}) {
  const metaTitle = title
    ? `${title} | ${siteInfo.shortName}`
    : seoDefaults.defaultTitle;
  const metaDescription = description || seoDefaults.defaultDescription;
  const metaKeywords = keywords || seoDefaults.defaultKeywords;
  const metaImage = image || siteInfo.defaultOgImage;
  const ogImageUrl = metaImage.startsWith('http') ? metaImage : getFullUrl(metaImage);
  const canonicalUrl = getFullUrl(canonicalPath);

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={siteInfo.language} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Geo / Local SEO Meta */}
      <meta name="geo.region" content="PH-SOR" />
      <meta name="geo.placename" content="Sorsogon City" />
      <meta name="geo.position" content="12.9742;124.0058" />
      <meta name="ICBM" content="12.9742, 124.0058" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  canonicalPath: PropTypes.string,
  noindex: PropTypes.bool,
  type: PropTypes.string,
};
