import React from 'react';
import PropTypes from 'prop-types';
import { contactInfo } from '../../data/dummyData.js';
import { getMailtoHref } from '../../utils';
import { Icon } from '../atoms';

export function EmailList({
  emails = contactInfo.emails,
  className = '',
  itemClassName = '',
  showIcon = true,
}) {
  if (!emails || emails.length === 0) return null;

  return (
    <ul className={`space-y-2.5 ${className}`}>
      {emails.map((email, idx) => {
        const mailHref = getMailtoHref(email.address);
        const labelTag = email.label ? `${email.label}: ` : '';

        return (
          <li key={idx} className={`flex items-center gap-2.5 text-sm ${itemClassName}`}>
            {showIcon && <Icon name="Mail" size={16} className="text-accent shrink-0" />}
            <a
              href={mailHref}
              className="text-ink-primary hover:text-accent font-sans transition-colors duration-200 focus-visible:outline-none focus-visible:underline break-all"
            >
              {labelTag && <span className="text-ink-muted text-xs mr-1">{labelTag}</span>}
              <span className="font-medium text-ink-primary hover:text-accent">{email.address}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

EmailList.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      address: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  showIcon: PropTypes.bool,
};
