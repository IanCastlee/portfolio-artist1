import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms';

export function RatingStars({
  rating = 5,
  max = 5,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-1 text-accent ${className}`} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          size={14}
          className={i < rating ? 'fill-accent text-accent' : 'text-canvas-border'}
        />
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
};
