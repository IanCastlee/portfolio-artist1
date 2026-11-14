import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, navLinks } from '../../data/dummyData.js';
import { NavLink } from '../molecules';
import { Button, Icon } from '../atoms';
import { MobileMenu } from './MobileMenu';
import { useScrollDirection } from '../../motion';

export function Navbar() {
  const { scrollY } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Always keep navbar visible when scrolling (persistent sticky header)
  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 translate-y-0 ${
          isScrolled
            ? 'bg-canvas/95 backdrop-blur-md border-b border-canvas-border py-3.5 sm:py-4 shadow-xl'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[70px] flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${siteInfo.name} Homepage`}
          >
            <span className="w-3.5 h-3.5 bg-accent group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-display font-black text-xl tracking-tight uppercase text-ink-primary group-hover:text-accent transition-colors">
              {siteInfo.shortName}
            </span>
            <span className="hidden sm:inline-block text-xs font-accent text-ink-muted uppercase tracking-widest pl-2 border-l border-canvas-border">
              Studio
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              to="/contact"
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex border-accent/60 text-accent hover:bg-accent hover:text-white"
            >
              Commission Art
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-ink-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Open Navigation Menu"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
