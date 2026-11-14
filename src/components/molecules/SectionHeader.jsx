import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, SplitText } from '../atoms';

export function SectionHeader({
  subheading,
  title,
  description,
  align = 'left',
  animate = true,
  className = '',
  action,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {subheading && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-accent inline-block" />
          <span className="text-xs font-accent uppercase tracking-widest text-accent font-bold">
            {subheading}
          </span>
        </div>
      )}
      <Heading as="h2" size="display" className="mb-4">
        {animate ? <SplitText text={title} /> : title}
      </Heading>
      {description && (
        <Text variant="lead" className="text-ink-secondary max-w-2xl">
          {description}
        </Text>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

SectionHeader.propTypes = {
  subheading: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  animate: PropTypes.bool,
  className: PropTypes.string,
  action: PropTypes.node,
};
