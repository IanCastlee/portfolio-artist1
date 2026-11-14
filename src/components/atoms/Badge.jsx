import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const variants = {
    default: 'bg-canvas-elevated text-ink-secondary border border-canvas-border',
    accent: 'bg-accent/15 text-accent border border-accent/40',
    electric: 'bg-accent-electric/15 text-accent-electric border border-accent-electric/40',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40',
    muted: 'bg-canvas-surface text-ink-muted border border-canvas-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-accent uppercase tracking-wider font-semibold rounded-none',
        variants[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 animate-pulse-subtle" />
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'accent', 'electric', 'success', 'muted']),
  className: PropTypes.string,
};
