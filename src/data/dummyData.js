/**
 * SINGLE SOURCE OF TRUTH: src/data/dummyData.js
 * Plain ES module JavaScript (no JSX, no path aliases, no browser APIs).
 * Any change here updates all pages, navbar, footer, contact widgets, SEO, JSON-LD, robots.txt, and sitemap.
 */

export const siteInfo = {
  name: "E-yhan Studio",
  shortName: "E-yhan",
  tagline: "Kinetic Visual Art & Contemporary Murals",
  description:
    "Official portfolio of E-yhan, an acclaimed contemporary visual artist and kinetic muralist based in Sorsogon, Philippines. Specializing in large-scale murals, textured canvas works, and dynamic spatial art.",
  siteUrl: "https://eyhanart.ph",
  logo: "/assets/images/logo.svg",
  defaultOgImage: "/assets/artworks/bulusan-resonance.svg",
  language: "en-PH",
  foundedYear: 2018,
};

export const ownerInfo = {
  name: "E-yhan",
  role: "Contemporary Visual Artist & Muralist",
  shortBio:
    "Born and based in Sorsogon, Philippines, E-yhan crafts visceral, kinetic visual experiences that fuse Bicolano volcanic landscapes with avant-garde kinetic textures and brutalist fluid dynamics.",
  bio: "E-yhan is a Filipino contemporary visual artist renowned for high-velocity compositions, massive public murals, and tactile mixed-media canvases. Grounded in the vivid topography of Sorsogon—from Mount Bulusan's geothermal ridges to Pacific wave breaks—E-yhan's art explores kinetic collisions between raw natural forces and modern urban forms. E-yhan's works are held in private collections across Metro Manila, Singapore, Tokyo, and Sydney.",
  photo: "/assets/artworks/eyhan-portrait.svg",
  portrait: "/assets/artworks/eyhan-portrait.svg",
  signatureText: "E-yhan Studios",
};

const rawEmails = [
  { label: "General & Inquiries", address: "eyhan@gmail.com" },
  { label: "Commissions & Curatorial", address: "eyhan.commissions@gmail.com" },
];

const rawPhones = [
  {
    carrier: "Globe",
    label: "Mobile / Studio Direct",
    number: "09837478343",
    intl: "+639837478343",
  },
  {
    carrier: "Smart",
    label: "Studio Hotline",
    number: "09198765432",
    intl: "+639198765432",
  },
];

export const contactInfo = {
  emails: rawEmails,
  phones: rawPhones,
  // Derived strictly from the first entries (never duplicated)
  primaryEmail: rawEmails[0].address,
  primaryPhone: rawPhones[0].intl,
  primaryPhoneFormatted: rawPhones[0].number,
  whatsapp: "+639837478343",
  viber: "+639837478343",
  messengerUrl: "https://m.me/eyhanartstudio",
  contactPerson: "E-yhan",
  officeHours:
    "Monday to Saturday: 9:00 AM – 6:00 PM PHT (Studio visits by appointment)",
  responseRate: "Usually responds within 24 hours",
};

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
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4110300262174!2d124.0036111!3d12.9741667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0e1c2b5bc7583%3A0x8684d0b1a03e1cb0!2sSorsogon%20City%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph",
  mapLinkUrl: "https://maps.google.com/?q=Sorsogon+City,+Sorsogon,+Philippines",
  googleBusinessProfileUrl: "https://maps.google.com/?cid=1234567890123456789",
  serviceArea:
    "Sorsogon, Metro Manila, Cebu, Bicol Region, and International Art Shipping",
};

export const socialLinks = [
  {
    platform: "Instagram",
    label: "Instagram",
    url: "https://instagram.com/eyhan_art",
    handle: "@eyhan_art",
    icon: "Instagram",
  },
  {
    platform: "Behance",
    label: "Behance",
    url: "https://behance.net/eyhan",
    handle: "eyhan",
    icon: "Palette",
  },
  {
    platform: "Facebook",
    label: "Facebook",
    url: "https://facebook.com/eyhanartstudio",
    handle: "eyhanartstudio",
    icon: "Facebook",
  },
  {
    platform: "YouTube",
    label: "YouTube",
    url: "https://youtube.com/@eyhanstudio",
    handle: "@eyhanstudio",
    icon: "Youtube",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Exhibitions", path: "/exhibitions" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const footerData = {
  colophon:
    "Designed & Built for E-yhan Studio with High-Velocity Motion & Modern Web Standards.",
  copyrightYear: new Date().getFullYear(),
  quickLinks: [
    { label: "Selected Works", path: "/portfolio" },
    { label: "Solo Exhibitions", path: "/exhibitions" },
    { label: "Artist Statement", path: "/about" },
    { label: "Studio Inquiries", path: "/contact" },
  ],
  secondaryNotice:
    "All rights reserved. Unauthorized reproduction of original paintings and mural artworks is prohibited under Philippine Intellectual Property Law (RA 8293).",
};

export const seoDefaults = {
  titleTemplate: "%s | E-yhan — Contemporary Artist & Muralist",
  defaultTitle:
    "E-yhan | Contemporary Visual Artist & Kinetic Muralist (Sorsogon, Philippines)",
  defaultDescription:
    "Portfolio of E-yhan, acclaimed contemporary visual artist based in Sorsogon, Philippines. Discover kinetic murals, dynamic canvas collections, solo exhibitions, and private commissions.",
  defaultKeywords:
    "E-yhan, Filipino artist, Sorsogon visual artist, kinetic art, Philippine murals, contemporary art Philippines, Bicol artist, modern canvas painter, large scale public art",
  defaultImage: siteInfo.defaultOgImage,
  routes: {
    "/": {
      title: "E-yhan | Contemporary Visual Artist & Kinetic Muralist",
      description:
        "Explore the explosive kinetic art of E-yhan from Sorsogon, Philippines. Large-scale public murals, visceral textured canvases, and dynamic spatial installations.",
      keywords:
        "E-yhan, Filipino contemporary artist, Sorsogon muralist, kinetic canvas, Philippine art, Bicol creative",
    },
    "/portfolio": {
      title: "Portfolio & Selected Works | E-yhan",
      description:
        "Browse the curated collection of paintings, kinetic murals, and sculptural canvas works created by E-yhan in Sorsogon and showcased internationally.",
      keywords:
        "E-yhan art gallery, Philippine contemporary paintings, kinetic murals, original canvas art Sorsogon",
    },
    "/exhibitions": {
      title: "Exhibitions & Showcases | E-yhan",
      description:
        "Chronology of solo and group exhibitions featuring E-yhan's works in Manila, Sorsogon, BGC, and international art biennials.",
      keywords:
        "E-yhan exhibitions, art gallery shows Manila, Philippine art exhibits, Sorsogon cultural exhibits",
    },
    "/about": {
      title: "About the Artist & Statement | E-yhan",
      description:
        "Learn about E-yhan's artistic evolution, creative philosophy, studio in Piot, Sorsogon City, and kinetic mixed-media technique.",
      keywords:
        "About E-yhan, artist biography, Sorsogon artist profile, kinetic painting philosophy",
    },
    "/contact": {
      title: "Contact & Studio Commissions | E-yhan",
      description:
        "Inquire about original artwork acquisitions, gallery representation, or architectural mural commissions with E-yhan in Sorsogon, Philippines.",
      keywords:
        "Hire Philippine muralist, commission painting E-yhan, Sorsogon artist contact, art studio booking",
    },
    "/404": {
      title: "Page Not Found | E-yhan",
      description:
        "The requested art page could not be located in E-yhan's digital studio archive.",
      keywords: "404, not found, E-yhan studio",
    },
  },
};

export const artworks = [
  {
    slug: "bulusan-kinetic-resonance",
    title: "Bulusan Kinetic Resonance",
    category: "Canvas Paintings",
    year: 2024,
    medium:
      "Acrylic, volcanic ash from Mt. Bulusan, & metallic leaf on Belgian linen",
    dimensions: "180 cm × 240 cm (71 in × 94.5 in)",
    status: "Available",
    featured: true,
    thumbnail: "/assets/artworks/bulusan-resonance.svg",
    image: "/assets/artworks/bulusan-resonance.svg",
    accentColor: "#ff4d2e",
    summary:
      "A turbulent, tactile convergence of geothermal energy and kinetic color fields inspired by Mt. Bulusan's active crater.",
    description:
      "In 'Bulusan Kinetic Resonance', E-yhan integrates actual volcanic particulates harvested from the lower slopes of Mount Bulusan with hyper-pigmented synthetic polymers. The physical impasto creates sweeping angular ridges that shatter light across the canvas surface as the viewer moves around it.",
    curatorNote:
      "An exemplary masterwork showcasing E-yhan's signature collision style—where high-velocity chromatic strokes slam into brutal earth textures.",
    exhibition:
      "Solo Showcase: Seismic Vectors, Metropolitan Museum Manila (2024)",
    collector: "Available via Studio Direct Inquiries",
    tags: ["Volcanic", "Tactile", "Kinetic", "Masterpiece"],
  },
  {
    slug: "sorsogon-bioluminescence",
    title: "Sorsogon Bioluminescence No. 7",
    category: "Canvas Paintings",
    year: 2024,
    medium: "Oil, luminescent pigment, and resin on marine-grade birch panel",
    dimensions: "150 cm × 200 cm (59 in × 78.7 in)",
    status: "Private Collection (Manila)",
    featured: true,
    thumbnail: "/assets/artworks/bioluminescence.svg",
    image: "/assets/artworks/bioluminescence.svg",
    accentColor: "#d4ff3f",
    summary:
      "Visualizing the midnight neon plankton blooms along the coastlines of Donsol and Matnog, Sorsogon.",
    description:
      "This work synthesizes the nocturnal ocean glow of Sorsogon's waters. Layers of deep indigo and ultraviolet resin collide with electric lime sweeps, giving the illusion of phosphorescent organisms colliding beneath crashing surf.",
    curatorNote:
      "E-yhan's handling of translucency and neon pigment creates an almost electronic glow that defies static viewing.",
    exhibition: "Bicol Contemporary Arts Biennial, Legazpi (2024)",
    collector: "Acquired by the Ayala Private Collection, 2024",
    tags: ["Bioluminescent", "Oceanic", "Resin", "Abstract"],
  },
  {
    slug: "pacific-drift-monolith",
    title: "Pacific Drift: Monolith IV",
    category: "Kinetic Murals",
    year: 2023,
    medium:
      "Exterior weather-shield acrylic and industrial spray on reinforced concrete",
    dimensions: "12 meters × 8 meters (96 sq. meters)",
    status: "Permanent Public Installation",
    featured: true,
    thumbnail: "/assets/artworks/pacific-drift.svg",
    image: "/assets/artworks/pacific-drift.svg",
    accentColor: "#9353d3",
    summary:
      "A monumental public mural commissioned for the Sorsogon Cultural & Civic Center facade.",
    description:
      "Stretching across a 96-square-meter civic wall, 'Pacific Drift' captures the monumental friction between typhoon gale forces and the enduring resilience of coastal Bicolano communities. Razor-sharp geometric splinters slice across tidal gradients.",
    curatorNote:
      "The scale demands physical movement from spectators, creating an optical tempo where the wall appears to slide and lock in real time.",
    exhibition: "Permanent Public Landmark, Sorsogon City Arts District",
    collector: "Sorsogon Provincial Government Cultural Trust",
    tags: ["Mural", "Civic Art", "Public Monument", "Large-Scale"],
  },
  {
    slug: "kasanggayahan-hyperchrome",
    title: "Kasanggayahan Hyperchrome",
    category: "Canvas Paintings",
    year: 2024,
    medium: "Acrylic, copper dust, and industrial enamel on heavy linen",
    dimensions: "160 cm × 160 cm (63 in × 63 in)",
    status: "Available",
    featured: true,
    thumbnail: "/assets/artworks/kasanggayahan.svg",
    image: "/assets/artworks/kasanggayahan.svg",
    accentColor: "#ff4d2e",
    summary:
      "Celebratory kinetic geometry honouring Sorsogon's Kasanggayahan Festival of prosperity and agriculture.",
    description:
      "An explosive celebration of agricultural abundance rendered in brutalist, hyper-saturated geometric bands. Copper elements catch the sun, evolving from golden radiance to deep oxidation.",
    curatorNote:
      "A balance between ancestral festival warmth and sleek modernist kinetic dynamism.",
    exhibition: "Kasanggayahan Arts Invitational, Sorsogon Museum (2024)",
    collector: "Studio Direct",
    tags: ["Kasanggayahan", "Copper", "Geometric", "Vibrant"],
  },
  {
    slug: "tectonic-friction-diptych",
    title: "Tectonic Friction Diptych",
    category: "Mixed Media",
    year: 2023,
    medium:
      "Raw pigments, pulverized pumice, oil stick, and charred bamboo charcoal",
    dimensions: "200 cm × 320 cm across two panels (78.7 in × 126 in)",
    status: "Private Collection (Singapore)",
    featured: false,
    thumbnail: "/assets/artworks/tectonic-diptych.svg",
    image: "/assets/artworks/tectonic-diptych.svg",
    accentColor: "#d4ff3f",
    summary:
      "Two colliding canvases representing the Philippine Fault Zone running along the Bicol Peninsula.",
    description:
      "The two panels hang merely 5 centimeters apart. Their compositional trajectories slam toward each other, creating an intense magnetic tension in the negative space between them.",
    curatorNote:
      "The diptych format accentuates the 'salpakan' motif, physically embodying seismic shear.",
    exhibition: "Art Stage Southeast Asia, Marina Bay Sands, Singapore (2023)",
    collector: "Private Collection, Singapore",
    tags: ["Diptych", "Seismic", "Charcoal", "Pumice"],
  },
  {
    slug: "subic-bay-whispers-installation",
    title: "Abaca Kinetic Threads: Spatial Study",
    category: "Spatial Installations",
    year: 2024,
    medium:
      "Tensile Sorsogon abaca fibers, neon acrylic wash, and suspended anodized aluminum bars",
    dimensions: "Site-specific (4m × 6m × 3.5m height)",
    status: "Gallery Exhibit",
    featured: false,
    thumbnail: "/assets/artworks/abaca-threads.svg",
    image: "/assets/artworks/abaca-threads.svg",
    accentColor: "#9353d3",
    summary:
      "Reimagining Sorsogon's world-renowned indigenous abaca fiber into high-tension kinetic space dividers.",
    description:
      "Over 8,000 meters of dyed abaca rope strung under high tension across an architectural chamber. As ambient airflow shifts, the installation creates subtle acoustic vibrations and moiré visual interference patterns.",
    curatorNote:
      "Honors traditional Bicol agricultural heritage while aggressively claiming a position in contemporary avant-garde installation art.",
    exhibition:
      "BGC Arts Center Pavilion, Bonifacio Global City, Taguig (2024)",
    collector: "Site-Specific Exhibition Commission",
    tags: ["Abaca", "Installation", "Architectural", "Heritage"],
  },
];

export const exhibitions = [
  {
    year: "2024",
    title: "Seismic Vectors: Solo Retrospective",
    venue: "Metropolitan Contemporary Space",
    location: "Makati City, Metro Manila",
    role: "Solo Exhibition",
    date: "October 12 – November 28, 2024",
    description:
      "A showcase of 18 monumental canvas works and 3 kinetic installations charting E-yhan's artistic evolution in Sorsogon over the last 6 years.",
  },
  {
    year: "2024",
    title: "Bicol Regional Arts Biennial",
    venue: "Ibalong Center for the Arts",
    location: "Legazpi City, Albay",
    role: "Featured Artist",
    date: "June 1 – July 15, 2024",
    description:
      "Curated display of prominent visual artists from Albay, Camarines Sur, and Sorsogon exploring eco-fragility and vulcanism.",
  },
  {
    year: "2023",
    title: "Art Stage Southeast Asia",
    venue: "Marina Bay Sands Expo Center",
    location: "Singapore",
    role: "Gallery Group Showcase",
    date: "January 18 – January 22, 2023",
    description:
      "International presentation of E-yhan's 'Tectonic Friction Diptych' alongside pioneering Southeast Asian neo-expressionists.",
  },
  {
    year: "2023",
    title: "Kasanggayahan Century: Sorsogon Heritage Reimagined",
    venue: "Museo Sorsogon Cultural Wing",
    location: "Sorsogon City, Sorsogon",
    role: "Invited Master Artist",
    date: "October 15 – November 10, 2023",
    description:
      "Celebration of Sorsogon's provincial historical narratives transformed into radical contemporary visual abstracts.",
  },
  {
    year: "2022",
    title: "Kinetic Drift & The Coastal Edge",
    venue: "Altro Mondo Arte Contemporanea",
    location: "Chino Roces, Makati City",
    role: "Two-Artist Showcase",
    date: "August 6 – September 4, 2022",
    description:
      "Exploration of marine wind patterns and maritime currents through experimental impasto and resin pours.",
  },
];

export const services = [
  {
    id: "custom-commissions",
    title: "Private Canvas Commissions",
    tagline:
      "Bespoke fine art tailored to prestigious private residences and corporate boardrooms.",
    description:
      "E-yhan works closely with private collectors, architects, and interior designers to create museum-grade canvas paintings tailored to specific spatial dimensions, light qualities, and conceptual briefs.",
    features: [
      "Custom sizing from 1.5m up to 5m single and multi-panel suites",
      "Authentic Bicol volcanic and mineral pigment sourcing",
      "Comprehensive digital rendering and spatial preview before execution",
      "Certificate of Authenticity with registered studio provenance",
    ],
    idealFor: "Collectors, Luxury Condos, Executive Suites, Art Investors",
  },
  {
    id: "kinetic-murals",
    title: "Kinetic & Architectural Murals",
    tagline:
      "Monumental site-specific public and corporate facade artworks that transform spaces.",
    description:
      "From corporate headquarters in Bonifacio Global City to public plazas across the Bicol Region, E-yhan executes weather-resistant, architecturally-integrated murals engineered to endure tropical typhoons and high sun exposure.",
    features: [
      "Ultra-durable weather-shield industrial sealants rated for 15+ years exterior life",
      "High-impact visual choreography that moves with pedestrian sightlines",
      "Full scaffold, safety certification, and project management included",
      "Community and corporate engagement workshop options available",
    ],
    idealFor: "Real Estate Developers, Hotels, Civic Centers, Commercial Hubs",
  },
  {
    id: "spatial-installations",
    title: "Art Direction & Spatial Installations",
    tagline:
      "Immersive multi-sensory environments for galleries, biennials, and luxury hospitality.",
    description:
      "Merging sculpture, tensioned fibers (abaca, wire, metal), and light interplay, E-yhan designs temporary and permanent kinetic installations that captivate audiences.",
    features: [
      "Indigenous natural fiber engineering (high-grade Sorsogon abaca)",
      "Dynamic lighting calibration for day/night ambient metamorphosis",
      "Modular components for international shipping and re-assembly",
      "Integrated exhibition catalog and documentation package",
    ],
    idealFor: "Museums, Luxury Resorts, Cultural Biennials, Brand Flagships",
  },
];

export const testimonials = [
  {
    quote:
      "E-yhan's masterwork in our penthouse living pavilion commands the room. The way the light from Manila Bay catches the volcanic texture changes every hour of the day. It is pure visceral electricity.",
    author: "Rafael M. Roxas",
    title: "Private Collector & Managing Director",
    company: "Capital Horizon Holdings, Bonifacio Global City",
    location: "Metro Manila, Philippines",
    rating: 5,
    artworkPurchased: "Bulusan Kinetic Resonance",
  },
  {
    quote:
      "Commissioning E-yhan for our corporate lobby mural was the best artistic decision we made this decade. The sheer kinetic momentum—it literally looks like the geometric bands are colliding with unstoppable force.",
    author: "Ar. Clarissa Villaluz",
    title: "Principal Architectural Director",
    company: "Archisphere Design Collaborative",
    location: "Makati City & Sorsogon",
    rating: 5,
    artworkPurchased: "Pacific Drift Monolith IV",
  },
  {
    quote:
      "In the contemporary Philippine art landscape, E-yhan is one of the few who captures the rugged raw violence and sublime beauty of the Bicol volcanic belt without falling into cliché. An extraordinary visionary.",
    author: "Dr. Leandro Santillan",
    title: "Senior Curator & Art Historian",
    company: "Bicol Foundation for the Arts",
    location: "Legazpi City & Manila",
    rating: 5,
    artworkPurchased: "Curatorial Review",
  },
];

export const faqs = [
  {
    question: "How do I commission an original painting or mural from E-yhan?",
    answer:
      "Commissioning begins with a direct conversation via our contact form, email (eyhan@gmail.com), or phone (09837478343). We discuss your wall dimensions, architectural aesthetics, preferred color spectrum, and timeline. Once agreed, a 50% deposit secures your production slot. You will receive digital layout studies before canvas execution starts.",
  },
  {
    question:
      "Can original artworks be shipped outside Sorsogon or internationally?",
    answer:
      "Yes, absolutely. All canvas paintings are professionally crated in museum-grade, climate-controlled timber crates with shock sensors. We provide door-to-door insured air freight to Metro Manila, Cebu, Davao, Singapore, Japan, the US, and Europe through specialized fine art shippers.",
  },
  {
    question: "What materials and pigments does E-yhan use in his artworks?",
    answer:
      "E-yhan utilizes archival-grade Belgian linen, heavy-duty stretcher bars cured against tropical humidity, premium lightfast artist acrylics/oils, and indigenous mineral elements such as pulverized volcanic ash from Mount Bulusan and processed local Sorsogon abaca.",
  },
  {
    question: "Can I visit the artist's studio in Sorsogon City?",
    answer:
      "Studio visits at our Piot, Sorsogon City studio are welcomed by appointment for collectors, curators, and clients. Please message or call us at least 48 hours in advance to ensure the artist is present and available.",
  },
  {
    question: "Do original artworks come with a Certificate of Authenticity?",
    answer:
      "Every original piece created by E-yhan includes an embossed, tamper-evident Certificate of Authenticity signed by the artist, detailing the exact medium, dimensions, completion date, and registration number in the studio's digital provenance ledger.",
  },
  {
    question: "What is the typical turnaround time for a commissioned artwork?",
    answer:
      "Canvas commissions typically take 4 to 8 weeks depending on dimensions and drying times for mixed-media impasto. Large-scale public murals usually require 2 to 4 weeks on site, preceded by 3 weeks of conceptual and engineering preparation.",
  },
];

export const artistStats = [
  { value: "70+", label: "Original Works Created" },
  { value: "14", label: "Public & Corporate Murals" },
  { value: "6", label: "Major Solo & Group Shows" },
  { value: "8+", label: "Years of Studio Practice" },
];
