'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  ['O nas', '#about'],
  ['Menu', '#menu'],
  ['Galeria', '#gallery'],
  ['Dostawa', '#delivery'],
  ['Pizza miesiąca', '#month'],
  ['Kontakt', '#contact'],
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
      <a className="brand-logo" href="#top" aria-label="Pizzeria Sikalafą — strona główna">
        <Image src="/images/logo.png" alt="Pizzeria Sikalafą" width={1235} height={297} priority sizes="205px" />
      </a>
      <nav aria-label="Główna nawigacja">
        {navigation.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="tel:+48532997669">Zamów: 532 997 669</a>
      <button className="menu-toggle" aria-label="Otwórz menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
        <Menu aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.dialog id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} open aria-modal="true" aria-label="Menu mobilne">
            <button className="mobile-nav-close" aria-label="Zamknij menu" onClick={() => setOpen(false)}><X aria-hidden="true" /></button>
            <div className="mobile-nav-mark">
              <Image src="/images/logo.png" alt="Pizzeria Sikalafą" width={1235} height={297} sizes="170px" />
            </div>
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
            <a className="mobile-reserve" href="tel:+48532997669" onClick={() => setOpen(false)}>Zamów: 532 997 669</a>
          </motion.dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
