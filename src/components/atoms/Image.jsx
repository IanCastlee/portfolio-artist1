import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

export function Image({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  aspectRatio = 'aspect-4/3',
  overlay = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-canvas-surface', aspectRatio, className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-all duration-700 ease-out',
          !isLoaded && 'scale-105 blur-sm opacity-60',
          isLoaded && 'scale-100 blur-0 opacity-100'
        )}
        {...props}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  priority: PropTypes.bool,
  aspectRatio: PropTypes.string,
  overlay: PropTypes.bool,
};
