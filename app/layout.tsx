import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sikalafa-pizzeria.sosnvdawg.chatgpt.site'),
  title: 'Sikalafa Pizzeria | Pizza, ludzie i dobre chwile',
  description: 'Kameralna pizzeria z duszą we Wrocławiu. Ręcznie robiona pizza, ciepłe wieczory i dobre towarzystwo.',
  openGraph: {
    title: 'Sikalafa Pizzeria',
    description: 'Pizza, ludzie i dobre chwile.',
    locale: 'pl_PL',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'Sikalafa Pizzeria — pizza, ludzie i dobre chwile.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sikalafa Pizzeria',
    description: 'Pizza, ludzie i dobre chwile.',
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
