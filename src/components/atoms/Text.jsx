import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Text({
  as: Component = 'p',
  variant = 'body',
  children,
  className = '',
  ...props
}) {
  const variants = {
    lead: 'text-lg sm:text-xl text-ink-secondary leading-relaxed font-normal',
    body: 'text-base text-ink-secondary leading-relaxed',
    small: 'text-sm text-ink-muted leading-normal',
    caption: 'text-xs text-ink-muted font-accent uppercase tracking-wider',
    mono: 'text-xs sm:text-sm font-accent text-ink-secondary',
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['lead', 'body', 'small', 'caption', 'mono']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
