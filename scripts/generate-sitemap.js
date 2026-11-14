import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { siteInfo, navLinks, artworks } from '../src/data/dummyData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

const currentDate = new Date().toISOString().split('T')[0];
const baseUrl = siteInfo.siteUrl.replace(/\/$/, '');

// Collect all indexable routes
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { url: '/exhibitions', priority: '0.8', changefreq: 'monthly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
];

const artworkRoutes = artworks.map((item) => ({
  url: `/portfolio/${item.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

const allRoutes = [...staticRoutes, ...artworkRoutes];

// Generate sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// Generate robots.txt
const robotsTxt = `# robots.txt generated for ${siteInfo.name}
User-agent: *
Allow: /
Disallow: /404

Sitemap: ${baseUrl}/sitemap.xml
`;

// Write to both dist/ and public/ directories so preview & production have it
[distDir, publicDir].forEach((targetDir) => {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'sitemap.xml'), sitemapXml.trim(), 'utf-8');
  fs.writeFileSync(path.join(targetDir, 'robots.txt'), robotsTxt.trim(), 'utf-8');
});

console.log(`[generate-sitemap] Successfully generated sitemap.xml (${allRoutes.length} URLs) and robots.txt`);
