# E-yhan | Contemporary Visual Artist & Kinetic Muralist Portfolio

A production-grade, SEO-optimized, statically prerendered (SSG) artist portfolio website built with React 18, Vite 6, `vite-react-ssg`, Tailwind CSS, and Framer Motion. Engineered around Atomic Design principles with high-velocity kinetic animations ("parang nag sasalpakan slide"), full accessibility, self-hosted fonts, and zero-data-duplication architecture.

---

## Architecture & Single Source of Truth

**Every personal detail, business credential, contact number, email, address, and collection item lives ONLY in:**
```
src/data/dummyData.js
```
No component, page, layout, or post-build script hardcodes any personal or contact information. Modifying any value in `dummyData.js` automatically propagates across:
- All pages (Home, Portfolio, Artwork Details, Exhibitions, About, Contact, 404)
- Navigation bar and mobile slide menu
- Global footer and semantic `<address>` elements
- Floating quick contact widget with carrier badges
- Automated JSON-LD structured data (`Person`, `VisualArtist`, `ArtGallery`, `FAQPage`, `VisualArtwork`, `BreadcrumbList`)
- Meta tags and Open Graph / Twitter cards (`<SEO />` powered by `Head`)
- `sitemap.xml` and `robots.txt`

---

## Folder Hierarchy (Atomic Design)

```
eyhan-artist-portfolio/
├── scripts/
│   └── generate-sitemap.js       # Node sitemap & robots generator (imports dummyData.js)
├── public/
│   ├── favicon.svg               # Vector geometric branding icon
│   ├── robots.txt                # Static crawler instructions
│   ├── sitemap.xml               # Statically prerendered URL index
│   └── assets/images/logo.svg    # Vector studio logo
├── src/
│   ├── data/
│   │   └── dummyData.js          # THE SINGLE SOURCE OF TRUTH
│   ├── utils/
│   │   └── index.js              # getTelHref, getMailtoHref, getWhatsAppHref, formatAddress, etc.
│   ├── motion/
│   │   ├── tokens.js             # Kinetic springs & collision easings ("salpakan" physics)
│   │   ├── variants.js           # Staggered reveals, slam panels, clip-path wipes
│   │   ├── hooks.js              # usePrefersReducedMotion, useScrollDirection
│   │   └── index.js              # Barrel export
│   ├── hooks/
│   │   └── index.js              # useMounted, useWindowSize, useClickOutside
│   ├── seo/
│   │   ├── SEO.jsx               # vite-react-ssg Head meta, OG, Twitter, geo tags
│   │   ├── JsonLd.jsx            # Schema.org structured data generator
│   │   └── index.js              # Barrel export
│   ├── components/
│   │   ├── atoms/                # Button, Heading, Text, Image, Icon, Badge, Tag, Link, Spinner, SplitText
│   │   ├── molecules/            # NavLink, Card, ContactItem, PhoneList, EmailList, SocialLinks, FormField, SectionHeader, RatingStars, ArtworkCard, ExhibitionRow
│   │   ├── organisms/            # Loader, Navbar, MobileMenu, Hero, FeatureGrid, KineticShowcase, Testimonials, FAQ, CTASection, ContactSection, FloatingContact, Footer
│   │   └── templates/            # RootLayout (with Outlet), PageTransition
│   ├── pages/
│   │   ├── HomePage.jsx          # Kinetic slam hero, curated works, collision showcase, reviews, FAQ, CTA
│   │   ├── PortfolioPage.jsx     # Filterable fine art catalog (Canvas, Murals, Mixed Media, Installations)
│   │   ├── ArtworkDetailPage.jsx # SSG dynamic route (getStaticPaths) with VisualArtwork schema
│   │   ├── ExhibitionsPage.jsx   # Chronological solo/group exhibitions across Manila, Bicol, Singapore
│   │   ├── AboutPage.jsx         # 350+ word artist statement, Bicol volcanic ash technique, services
│   │   ├── ContactPage.jsx       # Semantic address, carrier phone loop, interactive map, commission form
│   │   └── NotFoundPage.jsx      # 404 page with noindex header
│   ├── styles/
│   │   └── index.css             # Tailwind base & self-hosted @fontsource imports
│   ├── routes.jsx                # Static route definitions & dynamic getStaticPaths
│   └── main.jsx                  # ViteReactSSG entry
├── index.html                    # Root HTML with no-JS fallback styles & anti-FOUC script
├── tailwind.config.js            # Kinetic art theme (Syne, Space Grotesk, Plus Jakarta Sans)
├── vite.config.js                # Vite 6 config with vite-react-ssg plugin
└── package.json                  # Scripts & verified dependencies
```

---

## Quick Start & Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build & Prerender all static HTML pages (SSG) + generate sitemap & robots.txt
npm run build

# 4. Preview the statically generated production build locally
npm run preview
```

---

## How to Customize `dummyData.js`

### 1. Changing Contact Information
Open `src/data/dummyData.js`:
```javascript
const rawPhones = [
  { carrier: "Globe", label: "Mobile / Studio Direct", number: "09837478343", intl: "+639837478343" },
  { carrier: "Smart", label: "Studio Hotline", number: "09198765432", intl: "+639198765432" },
];

const rawEmails = [
  { label: "General & Inquiries", address: "eyhan@gmail.com" },
  { label: "Commissions & Curatorial", address: "eyhan.commissions@gmail.com" },
];
```
- Adding a third phone (e.g. DITO) automatically displays it in the Navbar mobile menu, footer, contact section, and floating widget with the carrier label!
- Editing the email automatically updates all mailto links, `<JsonLd />`, and footer notices.

### 2. Changing Location or Studio Address
```javascript
export const locationInfo = {
  streetAddress: "Magsaysay Street, Studio 4A",
  barangay: "Piot",
  city: "Sorsogon City",
  province: "Sorsogon",
  region: "Bicol Region",
  postalCode: "4700",
  country: "Philippines",
  latitude: 12.9742,
  longitude: 124.0058,
  mapEmbedUrl: "...",
  mapLinkUrl: "...",
};
```

### 3. Adding a New Artwork to the Portfolio
In `artworks` inside `src/data/dummyData.js`, add an object:
```javascript
{
  slug: "new-masterpiece-slug",
  title: "New Masterpiece Title",
  category: "Canvas Paintings", // or "Kinetic Murals", "Mixed Media", "Spatial Installations"
  year: 2025,
  medium: "Bulusan volcanic ash and acrylic on canvas",
  dimensions: "180 cm × 200 cm",
  status: "Available", // or "Private Collection"
  featured: true,
  thumbnail: "https://images.unsplash.com/...",
  image: "https://images.unsplash.com/...",
  summary: "Brief synopsis for card previews.",
  description: "Comprehensive artist story and curatorial notes.",
  curatorNote: "Critical perspective.",
  tags: ["Volcanic", "Kinetic"],
}
```
During `npm run build`, `vite-react-ssg` executes `ArtworkDetailPage.getStaticPaths` and automatically renders a static `/dist/portfolio/new-masterpiece-slug.html` with real HTML and dedicated metadata!

### 4. Adding a New Social Link or Messaging Channel
Add an item to `socialLinks`:
```javascript
{ platform: "TikTok", label: "TikTok", url: "https://tiktok.com/@eyhanart", handle: "@eyhanart", icon: "Video" }
```
It immediately surfaces across the footer, mobile navigation, and contact sections.

---

## Assumptions & Placeholder Values

As requested, all details not specified in the original prompt have been populated with realistic, culturally accurate placeholders in `src/data/dummyData.js`:

1. **Studio Address**: Piot, Sorsogon City, Sorsogon, Bicol Region, 4700, Philippines. (Can be updated to any exact street/building in `dummyData.js`).
2. **Artist Focus**: Contemporary Visual Artist & Kinetic Muralist utilizing raw volcanic ash from Mount Bulusan and industrial polymers.
3. **Studio Operating Hours**: Monday to Saturday: 9:00 AM – 6:00 PM PHT (Studio visits by appointment).
4. **Social Links**: Instagram (`@eyhan_art`), Behance (`eyhan`), Facebook (`@eyhanartstudio`), YouTube (`@eyhanstudio`).
5. **Production Domain**: `https://eyhanart.ph` (Set as `siteInfo.siteUrl`).
6. **Messaging URLs**: WhatsApp (`+639837478343`), Viber (`+639837478343`), Facebook Messenger (`https://m.me/eyhanartstudio`).
