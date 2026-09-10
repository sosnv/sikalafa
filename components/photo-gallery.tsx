import Image from 'next/image';
import { Reveal } from '@/components/motion-primitives';

const photos = [
  { src: '/images/gallery/1.webp', alt: 'Pizze i makaron podane przy wspólnym stole' },
  { src: '/images/gallery/2.webp', alt: 'Słodkie calzone z owocami i kawa' },
  { src: '/images/gallery/3.webp', alt: 'Świeża sałatka z tuńczykiem i kaparami' },
  { src: '/images/gallery/4.webp', alt: 'Pizza w kształcie serca wśród czerwonych róż' },
  { src: '/images/gallery/5.webp', alt: 'Oryginalna dekoracja we wnętrzu pizzerii' },
  { src: '/images/gallery/6.webp', alt: 'Klimatyczny kącik z książkami i filmowymi dekoracjami' },
];

export function PhotoGallery() {
  return (
    <section className="photo-gallery section-shell" id="gallery" aria-labelledby="gallery-title">
      <Reveal className="gallery-heading">
        <div>
          <p className="section-kicker">Galeria · Sikalafą od środka</p>
          <h2 id="gallery-title">Smak i klimat.<br /><em>W jednym miejscu.</em></h2>
        </div>
        <p>Jedzenie przygotowane z sercem i wnętrze z własnym charakterem. Zobacz, jak wygląda Sikalafą z bliska.</p>
      </Reveal>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <Reveal className={`gallery-tile gallery-tile-${index + 1}`} key={photo.src}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 820px) 100vw, 50vw" />
            <span aria-hidden="true">0{index + 1}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
