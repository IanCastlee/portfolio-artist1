import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Tag({
  children,
  active = false,
  onClick,
  className = '',
}) {
  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      className={cn(
        'inline-flex items-center px-3 py-1.5 text-xs font-accent uppercase tracking-wider transition-all duration-200 select-none border',
        active
          ? 'bg-accent text-white border-accent shadow-glow-accent'
          : 'bg-canvas-surface/80 text-ink-muted border-canvas-border hover:border-ink-secondary hover:text-ink-primary',
        onClick && 'cursor-pointer active:scale-95',
        className
      )}
    >
      {children}
    </Component>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
