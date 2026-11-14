import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms';

export function ContactItem({
  icon,
  label,
  value,
  href,
  className = '',
}) {
  const content = (
    <div className="flex flex-col">
      <span className="text-xs font-accent uppercase tracking-wider text-ink-muted mb-0.5">{label}</span>
      <span className="text-sm font-medium text-ink-primary group-hover:text-accent transition-colors duration-200">
        {value}
      </span>
    </div>
  );

  return (
    <div className={`flex items-start gap-3.5 group ${className}`}>
      <div className="p-2.5 bg-canvas-surface border border-canvas-border text-accent shrink-0 mt-0.5 group-hover:border-accent transition-colors">
        <Icon name={icon} size={18} />
      </div>
      {href ? (
        <a
          href={href}
          className="focus-visible:outline-none focus-visible:underline"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};
