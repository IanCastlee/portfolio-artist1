import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  contactInfo,
  locationInfo,
  socialLinks,
  ownerInfo,
} from '../../data/dummyData.js';
import {
  formatAddress,
  getTelHref,
  getMailtoHref,
  getWhatsAppHref,
} from '../../utils';
import { SectionHeader, PhoneList, EmailList, SocialLinks, FormField, ContactItem } from '../molecules';
import { Heading, Text, Button, Badge, Icon } from '../atoms';

export function ContactSection({
  title = "Studio Inquiries & Commissions",
  subheading = "GET IN TOUCH",
  description = "Connect directly with E-yhan for artwork purchases, private commissions, gallery inquiries, or public mural collaborations.",
  backgroundImage = '/assets/artworks/tectonic-diptych.svg',
  className = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Canvas Commission',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static site fallback: opens user's mail client or fallback
    const subject = `[Art Commission Inquiry] ${formData.inquiryType} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nType: ${formData.inquiryType}\n\nMessage:\n${formData.message}`;
    const mailto = getMailtoHref(contactInfo.primaryEmail, subject, body);

    setSubmitted(true);
    if (typeof window !== 'undefined') {
      window.location.href = mailto;
    }
  };

  return (
    <section className={`relative py-24 sm:py-32 overflow-hidden bg-canvas ${className}`}>
      {/* Atmospheric Artwork Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={backgroundImage}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-35 filter contrast-125 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/85 to-canvas/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px] relative z-10">
        <SectionHeader
          subheading={subheading}
          title={title}
          description={description}
        />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Contact Details & Sorsogon Studio Information */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          
          {/* Studio Address semantic <address> */}
          <address className="not-italic bg-canvas-subtle border border-canvas-border p-6 sm:p-8 space-y-6">
            <h3 className="font-display font-bold text-lg text-ink-primary border-b border-canvas-border pb-3">
              Studio & Atelier Location
            </h3>

            <ContactItem
              icon="MapPin"
              label="Location"
              value={formatAddress(locationInfo, true)}
              href={locationInfo.mapLinkUrl}
            />

            <div>
              <p className="text-xs font-accent uppercase tracking-wider text-ink-muted mb-2">
                Direct Telephones (With Carrier)
              </p>
              <PhoneList phones={contactInfo.phones} />
            </div>

            <div>
              <p className="text-xs font-accent uppercase tracking-wider text-ink-muted mb-2">
                Electronic Mail
              </p>
              <EmailList emails={contactInfo.emails} />
            </div>

            <ContactItem
              icon="Clock"
              label="Operating Hours"
              value={contactInfo.officeHours}
            />

            <ContactItem
              icon="CheckCircle"
              label="Response Time"
              value={contactInfo.responseRate}
            />
          </address>

          {/* Social Network Presence */}
          <div className="bg-canvas-subtle border border-canvas-border p-6 sm:p-8">
            <h4 className="font-display font-bold text-base text-ink-primary mb-4">
              Studio Social Channels
            </h4>
            <SocialLinks links={socialLinks} showLabel />
          </div>

          {/* Click-to-load Map Facade */}
          <div className="bg-canvas-subtle border border-canvas-border overflow-hidden">
            <div className="p-4 border-b border-canvas-border flex items-center justify-between">
              <span className="text-xs font-accent uppercase tracking-wider text-ink-muted">
                Interactive Sorsogon Map
              </span>
              <a
                href={locationInfo.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-accent hover:underline flex items-center gap-1"
              >
                Open in Google Maps <Icon name="ExternalLink" size={12} />
              </a>
            </div>

            <div className="relative aspect-[16/9] bg-canvas-surface flex items-center justify-center">
              {mapLoaded ? (
                <iframe
                  title="E-yhan Studio Sorsogon Map"
                  src={locationInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="text-center p-6 flex flex-col items-center gap-3">
                  <Icon name="Map" size={32} className="text-accent/60" />
                  <p className="text-xs text-ink-secondary">
                    Click below to load dynamic Google Map
                  </p>
                  <Button
                    onClick={() => setMapLoaded(true)}
                    variant="surface"
                    size="sm"
                  >
                    Load Interactive Map
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Studio Inquiries Form */}
        <div className="lg:col-span-7 bg-canvas-subtle border border-canvas-border p-8 sm:p-12 shadow-xl">
          <div className="border-b border-canvas-border pb-6 mb-8">
            <Badge variant="accent" className="mb-2">DIRECT INQUIRY</Badge>
            <Heading as="h3" size="h2">
              Send a Commission Request
            </Heading>
            <Text variant="small" className="text-ink-secondary mt-1">
              Please share your preferred dimensions, wall space, and collection timeline.
            </Text>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Icon name="CheckCircle" size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-ink-primary">
                Inquiry Dispatch Initiated
              </h4>
              <p className="text-sm text-ink-secondary max-w-md mx-auto">
                Thank you! Your default email client has been prepared with your inquiry details addressed to {contactInfo.primaryEmail}.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Your Name / Organization"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maria Roxas"
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. maria@domain.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Contact Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 09XXXXXXXXX"
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiryType" className="text-xs font-accent uppercase tracking-wider text-ink-secondary">
                    Nature of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-canvas-surface border border-canvas-border hover:border-ink-secondary focus:border-accent text-ink-primary px-4 py-3 text-sm font-sans outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="Canvas Commission">Private Canvas Commission</option>
                    <option value="Kinetic Public Mural">Architectural / Public Mural</option>
                    <option value="Acquire Existing Artwork">Acquire Existing Artwork</option>
                    <option value="Gallery Exhibition / Curatorial">Gallery Exhibition / Curatorial</option>
                    <option value="Studio Visit Appointment">Studio Visit Appointment</option>
                  </select>
                </div>
              </div>

              <FormField
                label="Artwork Details & Brief"
                name="message"
                type="textarea"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your wall space, location, timeline, and any particular series (e.g. Bulusan Resonance, Pacific Drift) that resonates with you."
                required
              />

              <div className="flex items-center justify-between pt-4 border-t border-canvas-border">
                <span className="text-xs text-ink-muted">
                  Studio responses typically sent within 24 hours.
                </span>
                <Button type="submit" variant="primary" size="lg" iconName="Send">
                  Transmit Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
      </div>
    </section>
  );
}

ContactSection.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};
