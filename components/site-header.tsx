'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  ['Historia', '#story'],
  ['Pizza', '#pizza'],
  ['Lokal', '#place'],
  ['Menu', '#menu'],
  ['Atmosfera', '#experience'],
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
      <a className="wordmark" href="#top" aria-label="Sikalafa — strona główna">
        Sikalafa <span>Pizzeria</span>
      </a>
      <nav aria-label="Główna nawigacja">
        {navigation.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#reservations">Rezerwacje</a>
      <button className="menu-toggle" aria-label="Otwórz menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
        <Menu aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.dialog id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} open aria-modal="true" aria-label="Menu mobilne">
            <button className="mobile-nav-close" aria-label="Zamknij menu" onClick={() => setOpen(false)}><X aria-hidden="true" /></button>
            <div className="mobile-nav-mark">Sikalafa <span>Pizzeria</span></div>
            <nav aria-label="Nawigacja mobilna">
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
            <a className="mobile-reserve" href="#reservations" onClick={() => setOpen(false)}>Zarezerwuj stolik</a>
          </motion.dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
