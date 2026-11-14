import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Heading({
  as: Component = 'h2',
  size = 'display',
  children,
  className = '',
  ...props
}) {
  const sizes = {
    giant: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.95] max-w-full',
    display: 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight',
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug',
    h3: 'text-lg sm:text-xl md:text-2xl font-display font-semibold tracking-tight',
    h4: 'text-base sm:text-lg font-accent font-semibold uppercase tracking-wider',
    subheading: 'text-xs sm:text-sm font-accent uppercase tracking-widest text-accent font-bold',
  };

  return (
    <Component className={cn(sizes[size], 'text-ink-primary', className)} {...props}>
      {children}
    </Component>
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  size: PropTypes.oneOf(['giant', 'display', 'h1', 'h2', 'h3', 'h4', 'subheading']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
