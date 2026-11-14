import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { pageTransitionVariants, usePrefersReducedMotion } from '../../motion';

export function PageTransition({ children, className = '' }) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
