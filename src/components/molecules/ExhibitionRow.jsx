import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Badge, Icon } from '../atoms';

export function ExhibitionRow({
  exhibition,
  className = '',
}) {
  return (
    <div className={`group border-b border-canvas-border py-6 sm:py-8 transition-colors duration-200 hover:border-accent/80 flex flex-col md:flex-row md:items-center justify-between gap-4 ${className}`}>
      <div className="flex items-start md:items-center gap-6 sm:gap-10">
        <span className="font-accent text-xl sm:text-2xl font-bold text-accent group-hover:scale-105 transition-transform shrink-0">
          {exhibition.year}
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="accent">{exhibition.role}</Badge>
            <span className="text-xs font-accent text-ink-muted">
              {exhibition.date}
            </span>
          </div>
          <Heading as="h3" size="h3" className="group-hover:text-accent transition-colors">
            {exhibition.title}
          </Heading>
          <Text variant="small" className="text-ink-secondary mt-1 max-w-xl">
            {exhibition.description}
          </Text>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t border-canvas-border md:border-none">
        <div className="text-left md:text-right">
          <p className="text-sm font-semibold text-ink-primary">{exhibition.venue}</p>
          <p className="text-xs font-accent text-ink-muted">{exhibition.location}</p>
        </div>
        <div className="w-10 h-10 border border-canvas-border group-hover:border-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all shrink-0">
          <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

ExhibitionRow.propTypes = {
  exhibition: PropTypes.shape({
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
