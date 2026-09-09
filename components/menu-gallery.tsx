import Image from 'next/image';
import { Reveal } from '@/components/motion-primitives';

type MenuPhoto = {
  name: string;
  src: string;
  description: string;
};

const pizzaPhotos: MenuPhoto[] = [
  { name: 'Bolognese', src: '/images/menu/Pizze/bolognese.webp', description: 'Wyrazista kompozycja inspirowana klasycznym sosem bolońskim.' },
  { name: 'Calabresa', src: '/images/menu/Pizze/calabresa.webp', description: 'Mięsna i lekko pikantna — dla miłośników zdecydowanych smaków.' },
  { name: 'Calzone', src: '/images/menu/Pizze/calzone.webp', description: 'Zamknięta pizza skrywająca aromatyczne, soczyste nadzienie.' },
  { name: 'Capricciosa', src: '/images/menu/Pizze/capriciosa.webp', description: 'Ponadczasowa włoska klasyka z dobrze znanymi dodatkami.' },
  { name: 'Carbonara', src: '/images/menu/Pizze/carbonara.webp', description: 'Kremowa i sycąca, inspirowana smakiem włoskiej carbonary.' },
  { name: 'Chorizo', src: '/images/menu/Pizze/chorizo.webp', description: 'Aromatyczna propozycja z pikantnym, hiszpańskim charakterem.' },
  { name: 'Della Campania', src: '/images/menu/Pizze/della campania.webp', description: 'Kompozycja pełna słonecznych smaków południowych Włoch.' },
  { name: 'Duka', src: '/images/menu/Pizze/duka.webp', description: 'Autorskie połączenie składników o wyrazistym charakterze.' },
  { name: 'Foggiana', src: '/images/menu/Pizze/foggiana.webp', description: 'Włoska inspiracja z harmonijnie dobranymi dodatkami.' },
  { name: 'Gallianccio', src: '/images/menu/Pizze/gallianccio.webp', description: 'Bogata, aromatyczna pizza dla poszukujących nowych smaków.' },
  { name: 'Gamberetti', src: '/images/menu/Pizze/gamberetti.webp', description: 'Delikatna kompozycja z krewetkami i śródziemnomorskim akcentem.' },
  { name: 'Havaina', src: '/images/menu/Pizze/havaina.webp', description: 'Słodko-słone połączenie dla fanów pizzy z ananasem.' },
  { name: 'Margherita', src: '/images/menu/Pizze/margaritha.webp', description: 'Sos pomidorowy i ser — prostota, od której wszystko się zaczyna.' },
  { name: 'Mascarpone e Pollo', src: '/images/menu/Pizze/mascarpone e pollo.webp', description: 'Delikatne mascarpone i kurczak w kremowym, łagodnym wydaniu.' },
  { name: 'Mascarpone', src: '/images/menu/Pizze/mascarpone.webp', description: 'Mascarpone, szpinak i suszone pomidory na pomidorowej bazie.' },
  { name: 'Parma', src: '/images/menu/Pizze/parma.webp', description: 'Elegancka kompozycja z wyrazistymi włoskimi akcentami.' },
  { name: 'Pollo e Ananas', src: '/images/menu/Pizze/polo e ananas.webp', description: 'Kurczak i ananas w lekkim, słodko-słonym połączeniu.' },
  { name: 'Quattro Formaggi', src: '/images/menu/Pizze/quattro formaggi.webp', description: 'Intensywna, aksamitna kompozycja dla miłośników sera.' },
  { name: 'Sikalafą', src: '/images/menu/Pizze/sikalafa.webp', description: 'Nasza firmowa kompozycja — przygotowana po naszemu.' },
  { name: 'Tonno', src: '/images/menu/Pizze/Tonno.webp', description: 'Klasyczna pizza z tuńczykiem i śródziemnomorskim charakterem.' },
  { name: 'Wegetariana', src: '/images/menu/Pizze/wegetariana.webp', description: 'Kolorowa, lekka i pełna starannie dobranych warzyw.' },
];

const pastaPhotos: MenuPhoto[] = [
  {
    name: 'Penne con pollo e spinaci',
    src: '/images/menu/makarony zapiekane/penn con pollo e psanaci.webp',
    description: 'Zapiekane penne z kurczakiem i szpinakiem w kremowym sosie.',
  },
  {
    name: 'Spaghetti Bolognese',
    src: '/images/menu/makarony zapiekane/spaghetti bolognese.webp',
    description: 'Spaghetti z aromatycznym, długo doprawianym sosem bolońskim.',
  },
];

const saladPhotos: MenuPhoto[] = [
  { name: "Sałatka a'la grecka", src: "/images/menu/salatki/salatka a'la grecka.webp", description: 'Świeże warzywa i klasyczne śródziemnomorskie dodatki.' },
  {
    name: 'Sałatka z grillowanym kurczakiem',
    src: '/images/menu/salatki/salatka z kurczakiem grillowanym.webp',
    description: 'Syta, świeża sałatka z soczystym grillowanym kurczakiem.',
  },
  { name: 'Sałatka z tuńczykiem', src: '/images/menu/salatki/salatka z tunczykiem.webp', description: 'Lekka propozycja z tuńczykiem i wyrazistymi dodatkami.' },
  { name: 'Sałatka Sikalafą', src: '/images/menu/salatki/sikalafa.webp', description: 'Camembert, mandarynka, orzechy, pestki i żurawina.' },
];

function MenuList({ photos }: { photos: MenuPhoto[] }) {
  return (
    <div className="menu-dish-list">
      {photos.map((photo, index) => (
        <Reveal className="menu-dish-row" key={photo.src}>
          <span className="menu-dish-number">{String(index + 1).padStart(2, '0')}</span>
          <div className="menu-photo-frame">
            <Image
              src={photo.src}
              alt={`${photo.name} z menu Pizzerii Sikalafą`}
              fill
              sizes="(max-width: 520px) 112px, (max-width: 820px) 190px, 270px"
            />
          </div>
          <div className="menu-dish-copy">
            <h4>{photo.name}</h4>
            <p>{photo.description}</p>
          </div>
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
        <MenuList photos={pizzaPhotos} />
      </article>

      <article className="menu-photo-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">02</p>
          <div>
            <h3>Makarony</h3>
            <p>Kremowe i pomidorowe sosy — od włoskich klasyków po nasze autorskie propozycje.</p>
          </div>
        </Reveal>
        <MenuList photos={pastaPhotos} />
      </article>

      <article className="menu-photo-category">
        <Reveal className="menu-category-heading">
          <p className="category-number">03</p>
          <div>
            <h3>Sałatki</h3>
            <p>Świeże, lekkie i pełne różnorodnych dodatków.</p>
          </div>
        </Reveal>
        <MenuList photos={saladPhotos} />
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
