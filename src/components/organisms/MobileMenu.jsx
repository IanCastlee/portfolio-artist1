import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navLinks, siteInfo, contactInfo, locationInfo } from '../../data/dummyData.js';
import { PhoneList, SocialLinks } from '../molecules';
import { Button, Icon } from '../atoms';
import { easings } from '../../motion';

export function MobileMenu({ isOpen, onClose }) {
  // Prevent body scrolling when open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          transition={{ duration: 0.45, ease: easings.kineticImpact }}
          className="fixed inset-0 z-[200] bg-canvas/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-8 text-ink-primary overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-canvas-border pb-5">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-accent" />
              <span className="font-display font-black text-xl tracking-tight uppercase">
                {siteInfo.shortName}
              </span>
              <span className="text-xs font-accent text-ink-muted uppercase tracking-widest pl-2 border-l border-canvas-border">
                Menu
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 border border-canvas-border hover:border-accent text-ink-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Close menu"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Navigation Links - Responsive typography so long words like PORTFOLIO & EXHIBITIONS never clip */}
          <nav className="my-6 flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * (idx + 1), duration: 0.35 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-ink-primary hover:text-accent transition-colors flex items-center justify-between py-3 border-b border-canvas-border/40 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-accent text-accent font-bold">0{idx + 1}</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.label}
                    </span>
                  </div>
                  <Icon
                    name="ArrowRight"
                    size={18}
                    className="text-ink-muted group-hover:text-accent group-hover:translate-x-1 transition-all opacity-40 group-hover:opacity-100"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Details & Direct Call list */}
          <div className="pt-5 border-t border-canvas-border flex flex-col gap-5">
            <div>
              <p className="text-xs font-accent uppercase tracking-widest text-ink-muted mb-2">
                Studio Hotline & Numbers ({locationInfo.province})
              </p>
              <PhoneList phones={contactInfo.phones} />
            </div>

            <div className="flex flex-col gap-4">
              <SocialLinks links={contactInfo.socialLinks} showLabel />
              <Button to="/contact" onClick={onClose} variant="primary" size="md" className="w-full">
                Inquire Commission
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
