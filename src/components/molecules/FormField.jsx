import React from 'react';
import PropTypes from 'prop-types';

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  rows = 4,
  className = '',
}) {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={name} className="text-xs font-accent uppercase tracking-wider text-ink-secondary flex items-center justify-between">
        <span>
          {label} {required && <span className="text-accent">*</span>}
        </span>
        {error && <span className="text-red-400 text-xs font-normal normal-case">{error}</span>}
      </label>
      <Component
        id={name}
        name={name}
        type={!isTextarea ? type : undefined}
        rows={isTextarea ? rows : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-canvas-surface border ${
          error ? 'border-red-500' : 'border-canvas-border hover:border-ink-secondary'
        } focus:border-accent text-ink-primary px-4 py-3 text-sm font-sans transition-colors duration-200 outline-none rounded-none placeholder:text-ink-faint focus:ring-1 focus:ring-accent`}
      />
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};
