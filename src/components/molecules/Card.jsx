import React from 'react';
import PropTypes from 'prop-types';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={`group bg-canvas-subtle border border-canvas-border p-6 sm:p-8 transition-all duration-300 relative text-left w-full overflow-hidden ${
        hoverEffect
          ? 'hover:border-accent/70 hover:bg-canvas-surface hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(255,77,0,0.12)]'
          : ''
      } ${className}`}
    >
      {/* Dynamic kinetic top border accent that sweeps across on hover */}
      {hoverEffect && (
        <>
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent-electric to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />
          
          {/* Subtle corner framing indicators */}
          <span className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-accent/60 transition-all duration-300 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-accent/60 transition-all duration-300 pointer-events-none" />
        </>
      )}

      {children}
    </Component>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
  onClick: PropTypes.func,
};
