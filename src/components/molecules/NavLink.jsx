import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';

export function NavLink({
  to,
  children,
  onClick,
  className = '',
}) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative py-2 font-accent text-sm tracking-wider uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:text-accent group ${
          isActive ? 'text-accent font-semibold' : 'text-ink-secondary hover:text-ink-primary'
        } ${className}`
      }
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>
          <span
            className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </>
      )}
    </RouterNavLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
