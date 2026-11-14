import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '../../utils';

export function Link({
  href,
  to,
  children,
  className = '',
  underline = true,
  external = false,
  ...props
}) {
  const baseClasses = cn(
    'relative inline-flex items-center transition-colors duration-200 text-ink-primary hover:text-accent font-medium',
    underline && 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left',
    className
  );

  if (to) {
    return (
      <RouterLink to={to} className={baseClasses} {...props}>
        {children}
      </RouterLink>
    );
  }

  const isExternal = external || href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:');

  return (
    <a
      href={href}
      className={baseClasses}
      target={isExternal && href?.startsWith('http') ? '_blank' : undefined}
      rel={isExternal && href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  underline: PropTypes.bool,
  external: PropTypes.bool,
};
