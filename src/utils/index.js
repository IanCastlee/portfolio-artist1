/**
 * Utility helpers for formatting, link generation, and data transformations.
 * All functions accept values directly from dummyData.
 */
import { siteInfo } from '../data/dummyData.js';

/**
 * Builds a telephone link href.
 * @param {string} intl - International phone format e.g. "+639837478343"
 */
export function getTelHref(intl) {
  if (!intl) return '#';
  const sanitized = intl.replace(/[^+\d]/g, '');
  return `tel:${sanitized}`;
}

/**
 * Builds a mailto link href.
 * @param {string} address - Email address
 * @param {string} [subject] - Optional subject
 * @param {string} [body] - Optional prefilled body
 */
export function getMailtoHref(address, subject = '', body = '') {
  if (!address) return '#';
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const query = params.toString();
  return `mailto:${address}${query ? `?${query}` : ''}`;
}

/**
 * Builds a WhatsApp chat link.
 * @param {string} intl - International phone number
 * @param {string} [message] - Prefilled message
 */
export function getWhatsAppHref(intl, message = 'Hello E-yhan, I am interested in inquiring about an artwork/commission.') {
  if (!intl) return '#';
  const cleanNumber = intl.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}

/**
 * Builds a Viber chat link.
 * @param {string} intl - International phone number
 */
export function getViberHref(intl) {
  if (!intl) return '#';
  const cleanNumber = intl.replace(/\D/g, '');
  return `viber://chat?number=%2B${cleanNumber}`;
}

/**
 * Builds a canonical or full URL from a relative path.
 * @param {string} path - URL path e.g. "/portfolio"
 */
export function getFullUrl(path = '/') {
  const base = siteInfo.siteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Formats a location object into a clean single or multi-line address string.
 * @param {object} locationInfo - Location object from dummyData
 * @param {boolean} [multiline=false]
 */
export function formatAddress(locationInfo, multiline = false) {
  if (!locationInfo) return '';
  const parts = [
    locationInfo.streetAddress,
    locationInfo.barangay ? `Brgy. ${locationInfo.barangay}` : null,
    locationInfo.city,
    locationInfo.province,
    locationInfo.country,
  ].filter(Boolean);

  return multiline ? parts.join('\n') : parts.join(', ');
}

/**
 * Formats a phone number for human display with optional carrier label.
 * @param {object|string} phone - Phone object { carrier, label, number, intl } or string
 */
export function formatPhone(phone) {
  if (!phone) return '';
  if (typeof phone === 'string') return phone;
  const carrierTag = phone.carrier ? `(${phone.carrier}) ` : '';
  return `${carrierTag}${phone.number || phone.intl}`;
}

/**
 * Formats a currency or price status.
 * @param {number|string} value
 */
export function formatArtPrice(value) {
  if (!value) return 'Inquire for Price';
  if (typeof value === 'number') {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(value);
  }
  return value;
}

/**
 * Combines CSS class names safely.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
