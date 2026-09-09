import Image from 'next/image';
import { Reveal } from '@/components/motion-primitives';

type MenuPhoto = {
  name: string;
  src: string;
};

const pizzaPhotos: MenuPhoto[] = [
  { name: 'Bolognese', src: '/images/menu/Pizze/bolognese.webp' },
  { name: 'Calabresa', src: '/images/menu/Pizze/calabresa.webp' },
  { name: 'Calzone', src: '/images/menu/Pizze/calzone.webp' },
  { name: 'Capricciosa', src: '/images/menu/Pizze/capriciosa.webp' },
  { name: 'Carbonara', src: '/images/menu/Pizze/carbonara.webp' },
  { name: 'Chorizo', src: '/images/menu/Pizze/chorizo.webp' },
  { name: 'Della Campania', src: '/images/menu/Pizze/della campania.webp' },
  { name: 'Duka', src: '/images/menu/Pizze/duka.webp' },
  { name: 'Foggiana', src: '/images/menu/Pizze/foggiana.webp' },
  { name: 'Gallianccio', src: '/images/menu/Pizze/gallianccio.webp' },
  { name: 'Gamberetti', src: '/images/menu/Pizze/gamberetti.webp' },
  { name: 'Havaina', src: '/images/menu/Pizze/havaina.webp' },
  { name: 'Margherita', src: '/images/menu/Pizze/margaritha.webp' },
  { name: 'Mascarpone e Pollo', src: '/images/menu/Pizze/mascarpone e pollo.webp' },
  { name: 'Mascarpone', src: '/images/menu/Pizze/mascarpone.webp' },
  { name: 'Parma', src: '/images/menu/Pizze/parma.webp' },
  { name: 'Pollo e Ananas', src: '/images/menu/Pizze/polo e ananas.webp' },
  { name: 'Quattro Formaggi', src: '/images/menu/Pizze/quattro formaggi.webp' },
  { name: 'Sikalafą', src: '/images/menu/Pizze/sikalafa.webp' },
  { name: 'Tonno', src: '/images/menu/Pizze/Tonno.webp' },
  { name: 'Wegetariana', src: '/images/menu/Pizze/wegetariana.webp' },
];

const pastaPhotos: MenuPhoto[] = [
  {
    name: 'Penne con pollo e spinaci',
    src: '/images/menu/makarony zapiekane/penn con pollo e psanaci.webp',
  },
  {
    name: 'Spaghetti Bolognese',
    src: '/images/menu/makarony zapiekane/spaghetti bolognese.webp',
  },
];

const saladPhotos: MenuPhoto[] = [
  { name: "Sałatka a'la grecka", src: "/images/menu/salatki/salatka a'la grecka.webp" },
  {
    name: 'Sałatka z grillowanym kurczakiem',
    src: '/images/menu/salatki/salatka z kurczakiem grillowanym.webp',
  },
  { name: 'Sałatka z tuńczykiem', src: '/images/menu/salatki/salatka z tunczykiem.webp' },
  { name: 'Sałatka Sikalafą', src: '/images/menu/salatki/sikalafa.webp' },
];

function PhotoGrid({ photos, variant = '' }: { photos: MenuPhoto[]; variant?: string }) {
  return (
    <div className={`menu-photo-grid ${variant}`}>
      {photos.map((photo, index) => (
        <Reveal className="menu-photo-card" key={photo.src} delay={(index % 3) * 0.05}>
          <div className="menu-photo-frame">
            <Image
              src={photo.src}
              alt={`${photo.name} z menu Pizzerii Sikalafą`}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, (max-width: 1300px) 33vw, 25vw"
            />
          </div>
          <h4>{photo.name}</h4>
        </Reveal>
      ))}
    </div>
  );
}

export function MenuGallery() {
  return (
    <div className="menu-galleries">
      <article className="menu-photo-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">01</p>
          <div>
            <h3>Pizza</h3>
            <p>Cienkie ciasto, sos pomidorowy, ser i starannie dobrane dodatki.</p>
          </div>
        </Reveal>
        <PhotoGrid photos={pizzaPhotos} />
      </article>

      <article className="menu-photo-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">02</p>
          <div>
            <h3>Makarony</h3>
            <p>Kremowe i pomidorowe sosy — od włoskich klasyków po nasze autorskie propozycje.</p>
          </div>
        </Reveal>
        <PhotoGrid photos={pastaPhotos} variant="menu-photo-grid--wide" />
      </article>

      <article className="menu-photo-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">03</p>
          <div>
            <h3>Sałatki</h3>
            <p>Świeże, lekkie i pełne różnorodnych dodatków.</p>
          </div>
        </Reveal>
        <PhotoGrid photos={saladPhotos} />
      </article>

      <article className="menu-photo-category wine-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">04</p>
          <div>
            <h3>Karta win</h3>
            <p>Wina musujące, białe, różowe i czerwone — na kieliszek lub butelkę.</p>
          </div>
        </Reveal>
        <div className="wine-card-grid">
          {[1, 2].map((page) => (
            <Reveal className="wine-card-page" key={page} delay={(page - 1) * 0.08}>
              <Image
                src={`/images/menu/karta-win${page === 1 ? '' : '2'}.webp`}
                alt={`Karta win Pizzerii Sikalafą — strona ${page}`}
                width={544}
                height={804}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </article>
    </div>
  );
}
