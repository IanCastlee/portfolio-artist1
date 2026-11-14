import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils';
import { Icon } from './Icon';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: IconComponent,
  iconName,
  iconPosition = 'right',
  ariaLabel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-accent font-semibold tracking-wider uppercase transition-colors duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-none',
    md: 'text-sm px-6 py-3 gap-2.5 rounded-none',
    lg: 'text-base px-8 py-4 gap-3 rounded-none',
  };

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-glow-accent',
    electric: 'bg-accent-electric text-canvas font-bold hover:bg-white shadow-glow-lime',
    outline: 'border-2 border-ink-primary/30 text-ink-primary hover:border-accent hover:text-accent bg-transparent',
    ghost: 'text-ink-primary hover:text-accent hover:bg-canvas-surface/60',
    surface: 'bg-canvas-surface border border-canvas-border text-ink-primary hover:border-accent/60 hover:text-accent',
  };

  const combinedClasses = cn(baseStyles, sizes[size], variants[variant], className);

  const renderIcon = () => {
    if (iconName) {
      return <Icon name={iconName} size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5" />;
    }
    if (IconComponent) {
      return <IconComponent className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />;
    }
    return null;
  };

  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(combinedClasses, 'group')} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('viber:') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={cn(combinedClasses, 'group')}
        target={isExternal && href.startsWith('http') ? '_blank' : undefined}
        rel={isExternal && href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(combinedClasses, 'group')}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'electric', 'outline', 'ghost', 'surface']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  ariaLabel: PropTypes.string,
};
