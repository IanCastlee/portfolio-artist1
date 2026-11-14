import React from 'react';
import PropTypes from 'prop-types';
import { socialLinks as defaultSocials } from '../../data/dummyData.js';
import { Icon } from '../atoms';

export function SocialLinks({
  links = defaultSocials,
  className = '',
  itemClassName = '',
  showLabel = false,
}) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 p-2.5 bg-canvas-surface hover:bg-canvas-elevated border border-canvas-border hover:border-accent text-ink-secondary hover:text-accent transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${itemClassName}`}
          aria-label={`${social.label} (${social.handle})`}
        >
          <Icon name={social.icon} size={18} className="transition-transform group-hover:scale-110" />
          {showLabel && (
            <span className="text-xs font-accent tracking-wider uppercase">{social.label}</span>
          )}
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string.isRequired,
      handle: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  showLabel: PropTypes.bool,
};
