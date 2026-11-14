import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Spinner({
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-3',
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block animate-spin rounded-full border-ink-faint border-t-accent',
        sizes[size],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
