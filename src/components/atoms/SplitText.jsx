import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../motion';
import { cn } from '../../utils';

export function SplitText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.04,
  direction = 'up',
}) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  const initialTransforms = {
    up: { y: '110%', opacity: 0, rotate: 2 },
    down: { y: '-110%', opacity: 0, rotate: -2 },
    slamLeft: { x: '-60px', opacity: 0 },
    slamRight: { x: '60px', opacity: 0 },
  };

  return (
    <span className={cn('inline-block', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            className={cn('inline-block will-change-transform', wordClassName)}
            initial={initialTransforms[direction] || initialTransforms.up}
            whileInView={{
              y: '0%',
              x: '0%',
              opacity: 1,
              rotate: 0,
            }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  wordClassName: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'slamLeft', 'slamRight']),
};
