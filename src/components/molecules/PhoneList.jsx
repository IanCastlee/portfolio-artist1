import React from 'react';
import PropTypes from 'prop-types';
import { contactInfo } from '../../data/dummyData.js';
import { getTelHref } from '../../utils';
import { Icon } from '../atoms';

export function PhoneList({
  phones = contactInfo.phones,
  className = '',
  itemClassName = '',
  showIcon = true,
}) {
  if (!phones || phones.length === 0) return null;

  return (
    <ul className={`space-y-2.5 ${className}`}>
      {phones.map((phone, idx) => {
        const telHref = getTelHref(phone.intl || phone.number);
        const carrierTag = phone.carrier ? `${phone.carrier}: ` : '';
        const labelTag = phone.label ? `(${phone.label})` : '';

        return (
          <li key={idx} className={`flex items-center gap-2.5 text-sm ${itemClassName}`}>
            {showIcon && <Icon name="Phone" size={16} className="text-accent shrink-0" />}
            <a
              href={telHref}
              className="text-ink-primary hover:text-accent font-accent transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            >
              <span className="text-accent font-semibold">{carrierTag}</span>
              <span>{phone.number || phone.intl}</span>
              {labelTag && <span className="text-ink-muted text-xs ml-1.5">{labelTag}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

PhoneList.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      carrier: PropTypes.string,
      label: PropTypes.string,
      number: PropTypes.string,
      intl: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  showIcon: PropTypes.bool,
};
