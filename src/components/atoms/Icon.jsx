import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils';

export function Icon({
  name,
  size = 20,
  className = '',
  ...props
}) {
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles;

  return (
    <IconComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      {...props}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
