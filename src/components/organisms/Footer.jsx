import React from 'react';
import { Link } from 'react-router-dom';
import {
  siteInfo,
  ownerInfo,
  contactInfo,
  locationInfo,
  socialLinks,
  footerData,
  navLinks,
} from '../../data/dummyData.js';
import { formatAddress } from '../../utils';
import { PhoneList, EmailList, SocialLinks } from '../molecules';
import { Icon } from '../atoms';

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-canvas-border text-ink-primary pt-20 pb-12">
      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-[70px]">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-canvas-border">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-accent" />
              <span className="font-display font-black text-2xl uppercase tracking-tight">
                {siteInfo.shortName}
              </span>
            </Link>
            <p className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
              {siteInfo.tagline}
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-sm">
              {ownerInfo.shortBio}
            </p>
            <div className="pt-2">
              <SocialLinks links={socialLinks} />
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ink-primary mb-2">
              Studio Archive
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ink-secondary hover:text-accent font-accent uppercase tracking-wider text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sorsogon Studio Address */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ink-primary mb-2">
              Studio Location
            </h4>
            <address className="not-italic text-sm text-ink-secondary leading-relaxed space-y-3">
              <p>{formatAddress(locationInfo, true)}</p>
              <a
                href={locationInfo.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-accent text-accent hover:underline uppercase tracking-wider"
              >
                <span>Locate Atelier</span>
                <Icon name="ExternalLink" size={12} />
              </a>
              <p className="text-xs text-ink-muted pt-1">
                {contactInfo.officeHours}
              </p>
            </address>
          </div>

          {/* Column 4: Phones with carriers & Emails */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ink-primary mb-2">
              Telephones & Inquiries
            </h4>
            <PhoneList phones={contactInfo.phones} className="space-y-2" />
            <div className="pt-3 border-t border-canvas-border">
              <p className="text-xs font-accent uppercase tracking-wider text-ink-muted mb-2">
                Electronic Mail
              </p>
              <EmailList emails={contactInfo.emails} className="space-y-1.5" />
            </div>
          </div>

        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-accent text-ink-muted">
          <p>
            © {footerData.copyrightYear} {ownerInfo.name} Studio. {locationInfo.province}, {locationInfo.country}.
          </p>
          <p className="text-center sm:text-right">
            {footerData.colophon}
          </p>
        </div>

      </div>
    </footer>
  );
}
