import { springs, easings } from './tokens';

/**
 * Standard container variants for staggered reveals
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Kinetic Slam Variants: Elements slide violently from left/right to center
 * and lock into place ("salpakan slide")
 */
export const slamFromLeft = {
  hidden: { opacity: 0, x: -80, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
      mass: 0.9,
    },
  },
};

export const slamFromRight = {
  hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
      mass: 0.9,
    },
  },
};

export const slamFromBottom = {
  hidden: { opacity: 0, y: 70, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
};

/**
 * Dual collision container: left panel slams right, right panel slams left
 */
export const collisionLeftPanel = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easings.kineticImpact,
    },
  },
};

export const collisionRightPanel = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easings.kineticImpact,
    },
  },
};

/**
 * Split text character or word reveal
 */
export const kineticTextReveal = {
  hidden: { y: '110%', opacity: 0, rotate: 3 },
  visible: {
    y: '0%',
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.65,
      ease: easings.kineticImpact,
    },
  },
};

/**
 * Image clip-path diagonal wipe
 */
export const clipPathWipe = {
  hidden: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    scale: 1.15,
  },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    scale: 1,
    transition: {
      duration: 0.85,
      ease: easings.kineticImpact,
    },
  },
};

/**
 * Page route transition: kinetic slide & curtain wipe
 */
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: 20,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: easings.kineticImpact,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * Reduced-motion fallback variants (fades only, no transforms)
 */
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};
