import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sikalafa-pizzeria.sosnvdawg.chatgpt.site'),
  title: 'Pizzeria Sikalafą | Białe Błota',
  description: 'Pizza na cienkim cieście, makarony i świeże sałatki z dostawą w Białych Błotach i okolicy. Zamów: 532 997 669.',
  openGraph: {
    title: 'Pizzeria Sikalafą | Białe Błota',
    description: 'Pizza, makarony i sałatki przygotowane z sercem. Twój smak. Twoja historia.',
    locale: 'pl_PL',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'Pizzeria Sikalafą — Twój smak. Twoja historia.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizzeria Sikalafą | Białe Błota',
    description: 'Pizza, makarony i sałatki przygotowane z sercem.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
