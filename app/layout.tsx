import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sikalafa-pizzeria.light-fir-8078.chatgpt.site'),
  title: 'Sikalafa Pizzeria | Pizza, People & Good Times',
  description: 'A warm, soulful pizzeria in Wrocław. Handmade pizza, intimate evenings and good company.',
  openGraph: {
    title: 'Sikalafa Pizzeria',
    description: 'Pizza, people & good times.',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'Sikalafa Pizzeria — Pizza, people & good times.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sikalafa Pizzeria',
    description: 'Pizza, people & good times.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
