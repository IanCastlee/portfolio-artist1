/**
 * Motion design tokens & timing curves.
 * High-velocity kinetic animation system engineered for impactful collision ("salpakan") transitions.
 */

// Kinetic spring configurations
export const springs = {
  // Heavy kinetic slam: high velocity impact with controlled settling
  slam: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 1.2,
  },
  // Snappy magnetic snap for buttons and micro-interactions
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 28,
  },
  // Smooth gliding momentum for scroll-linked reveals
  glide: {
    type: "spring",
    stiffness: 140,
    damping: 20,
    mass: 0.8,
  },
  // Soft, organic settling
  gentle: {
    type: "spring",
    stiffness: 100,
    damping: 18,
  },
};

// Cubic bezier easings
export const easings = {
  // High-impact power curve
  kineticImpact: [0.16, 1, 0.3, 1], // expo out
  // Split slam collision curve
  slamCollision: [0.22, 1, 0.36, 1],
  // Smooth curtain reveal
  curtainWipe: [0.85, 0, 0.15, 1],
  // Standard ease out
  easeOutQuart: [0.25, 1, 0.5, 1],
};

export const durations = {
  instant: 0.15,
  fast: 0.35,
  medium: 0.6,
  impact: 0.75,
  cinematic: 1.2,
};
