import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo, ownerInfo, locationInfo } from '../../data/dummyData.js';
import {
  getTelHref,
  getMailtoHref,
  getWhatsAppHref,
  getViberHref,
} from '../../utils';
import { PhoneList, FormField } from '../molecules';
import { Button, Icon } from '../atoms';
import { useClickOutside } from '../../hooks';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('quick'); // 'quick' | 'message'
  const [isInteractive, setIsInteractive] = useState(false);
  const panelRef = useRef(null);

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  // Lazy load after interactive to safeguard performance & hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInteractive(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Close on outside click
  useClickOutside(panelRef, () => {
    if (isOpen) setIsOpen(false);
  });

  // Close on escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailto = getMailtoHref(
      contactInfo.primaryEmail,
      `[Quick Inquiry] from ${form.name}`,
      `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
    );
    setSent(true);
    if (typeof window !== 'undefined') {
      window.location.href = mailto;
    }
  };

  if (!isInteractive) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Quick Studio Contact"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[92vw] sm:w-96 bg-canvas border border-canvas-border shadow-2xl overflow-hidden text-ink-primary"
          >
            {/* Header */}
            <div className="bg-canvas-subtle p-5 border-b border-canvas-border flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-ink-primary">
                  Connect with {ownerInfo.name}
                </h4>
                <p className="text-xs font-accent text-accent uppercase tracking-wider">
                  Sorsogon Studio Direct
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-ink-muted hover:text-ink-primary border border-canvas-border"
                aria-label="Close contact widget"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex border-b border-canvas-border bg-canvas-surface">
              <button
                type="button"
                onClick={() => setActiveTab('quick')}
                className={`flex-1 py-2.5 text-xs font-accent uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                  activeTab === 'quick'
                    ? 'border-accent text-accent bg-canvas'
                    : 'border-transparent text-ink-muted hover:text-ink-primary'
                }`}
              >
                Direct Call & Chat
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-2.5 text-xs font-accent uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                  activeTab === 'message'
                    ? 'border-accent text-accent bg-canvas'
                    : 'border-transparent text-ink-muted hover:text-ink-primary'
                }`}
              >
                Quick Note
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 max-h-[70vh] overflow-y-auto">
              {activeTab === 'quick' ? (
                <div className="space-y-5">
                  {/* Phone List with carrier labels */}
                  <div>
                    <span className="text-xs font-accent uppercase tracking-wider text-ink-muted block mb-2">
                      Studio Phone Numbers
                    </span>
                    <PhoneList phones={contactInfo.phones} />
                  </div>

                  {/* Messaging Apps */}
                  <div className="pt-4 border-t border-canvas-border flex flex-col gap-2.5">
                    <span className="text-xs font-accent uppercase tracking-wider text-ink-muted block mb-1">
                      Direct Messaging
                    </span>
                    {contactInfo.whatsapp && (
                      <a
                        href={getWhatsAppHref(contactInfo.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-canvas-surface border border-canvas-border hover:border-emerald-500/50 hover:bg-emerald-950/20 text-ink-primary transition-all text-sm group"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Icon name="MessageSquare" size={18} className="text-emerald-400" />
                          WhatsApp Studio
                        </span>
                        <Icon name="ArrowRight" size={14} className="text-ink-muted group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}

                    {contactInfo.viber && (
                      <a
                        href={getViberHref(contactInfo.viber)}
                        className="flex items-center justify-between p-3 bg-canvas-surface border border-canvas-border hover:border-purple-500/50 hover:bg-purple-950/20 text-ink-primary transition-all text-sm group"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Icon name="PhoneCall" size={18} className="text-purple-400" />
                          Viber Connect
                        </span>
                        <Icon name="ArrowRight" size={14} className="text-ink-muted group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}

                    {contactInfo.messengerUrl && (
                      <a
                        href={contactInfo.messengerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-canvas-surface border border-canvas-border hover:border-blue-500/50 hover:bg-blue-950/20 text-ink-primary transition-all text-sm group"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Icon name="Send" size={18} className="text-blue-400" />
                          Facebook Messenger
                        </span>
                        <Icon name="ArrowRight" size={14} className="text-ink-muted group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-ink-faint text-center pt-2">
                    {contactInfo.officeHours}
                  </p>
                </div>
              ) : (
                <div>
                  {sent ? (
                    <div className="text-center py-6 space-y-3">
                      <div className="w-10 h-10 mx-auto bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Icon name="Check" size={20} />
                      </div>
                      <p className="text-sm font-bold text-ink-primary">Opening Email Client...</p>
                      <p className="text-xs text-ink-secondary">
                        Inquiry prepared for {contactInfo.primaryEmail}.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="text-xs text-accent underline mt-2"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <FormField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        required
                      />
                      <FormField
                        label="Message"
                        name="message"
                        type="textarea"
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Artwork or commission details..."
                        required
                      />
                      <Button type="submit" variant="primary" size="md" className="w-full">
                        Transmit Note
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Studio Contact Options"
        className={`w-14 h-14 rounded-none flex items-center justify-center shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
          isOpen ? 'bg-accent text-white rotate-90' : 'bg-accent text-white hover:bg-accent-hover'
        }`}
      >
        <Icon name={isOpen ? 'X' : 'MessageSquare'} size={24} />
      </motion.button>
    </div>
  );
}
