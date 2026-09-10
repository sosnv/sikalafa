'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: '/images/gallery/1.webp',
    alt: 'Pizze i makaron podane przy wspólnym stole w Pizzerii Sikalafą',
    position: 'center 58%',
  },
  {
    src: '/images/gallery/4.webp',
    alt: 'Pizza w kształcie serca udekorowana czerwonymi różami',
    position: 'center 52%',
  },
  {
    src: '/images/gallery/5.webp',
    alt: 'Charakterystyczna dekoracja we wnętrzu Pizzerii Sikalafą',
    position: 'center 45%',
  },
  {
    src: '/images/gallery/6.webp',
    alt: 'Klimatyczny kącik z książkami i filmowymi dekoracjami',
    position: 'center 52%',
  },
];

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div
      className="hero-slider"
      aria-roledescription="karuzela"
      aria-label="Galeria Pizzerii Sikalafą"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-slider-images" aria-live="off">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            className="hero-slide"
            key={slides[activeSlide].src}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.09 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.1 }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: reduceMotion ? 0 : 7.2, ease: 'linear' },
            }}
          >
            <Image
              src={slides[activeSlide].src}
              alt={slides[activeSlide].alt}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              style={{ objectPosition: slides[activeSlide].position }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-slider-controls">
        <span className="hero-slider-count"><strong>0{activeSlide + 1}</strong> / 0{slides.length}</span>
        <div className="hero-slider-dots" aria-label="Wybierz zdjęcie">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              className={index === activeSlide ? 'is-active' : ''}
              type="button"
              aria-label={`Pokaż zdjęcie ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <div className="hero-slider-arrows">
          <button type="button" aria-label="Poprzednie zdjęcie" onClick={() => changeSlide(-1)}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Następne zdjęcie" onClick={() => changeSlide(1)}><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
