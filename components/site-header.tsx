'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  ['Story', '#story'],
  ['Pizza', '#pizza'],
  ['The place', '#place'],
  ['Menu', '#menu'],
  ['Experience', '#experience'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sikalafa home">
        Sikalafa <span>Pizzeria</span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#reservations">Reservations</a>
      <button className="menu-toggle" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
        <Menu aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.dialog id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} open aria-modal="true" aria-label="Mobile navigation">
            <button className="mobile-nav-close" aria-label="Close navigation" onClick={() => setOpen(false)}><X aria-hidden="true" /></button>
            <div className="mobile-nav-mark">Sikalafa <span>Pizzeria</span></div>
            <nav aria-label="Mobile navigation">
              {navigation.map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >{label}</motion.a>
              ))}
            </nav>
            <a className="mobile-reserve" href="#reservations" onClick={() => setOpen(false)}>Reserve a table</a>
          </motion.dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
