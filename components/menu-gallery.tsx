import Image from 'next/image';
import { Reveal } from '@/components/motion-primitives';

type MenuPhoto = {
  name: string;
  src: string | null;
  description: string;
  price?: string;
  note?: string;
  badges?: string[];
};

const pizzaPhotos: MenuPhoto[] = [
  { name: 'Margherita', src: '/images/menu/Pizze/margaritha.webp', description: 'Sos pomidorowy, mozzarella + gouda.', price: '33 zł', badges: ['wege'] },
  { name: 'Dello Chef', src: '/images/gallery/1.webp', description: 'Sos pomidorowy, mozzarella + gouda, podwędzane pomidorki rossi, marynowane oliwki, szynka dojrzewająca crudo, taleggio, patisony, parmezan, oliwa czosnkowa.', price: '55 zł', note: 'Zdjęcie poglądowe', badges: ['specjalność'] },
  { name: 'Duka', src: '/images/menu/Pizze/duka.webp', description: 'Sos pomidorowy, mozzarella + gouda, salami, pieczarki, cebula.', price: '44 zł' },
  { name: 'Foggiana', src: '/images/menu/Pizze/foggiana.webp', description: 'Sos pomidorowy, mozzarella + gouda, pieczarki.', price: '39 zł' },
  { name: 'Havaiana', src: '/images/menu/Pizze/havaina.webp', description: 'Sos pomidorowy, mozzarella + gouda, szynka, ananas.', price: '44 zł' },
  { name: 'Capricciosa', src: '/images/menu/Pizze/capriciosa.webp', description: 'Sos pomidorowy, mozzarella + gouda, szynka, pieczarki, cebula czerwona.', price: '44 zł' },
  { name: 'Tonno', src: '/images/menu/Pizze/Tonno.webp', description: 'Sos pomidorowy, mozzarella + gouda, tuńczyk, kapary, cebula czerwona.', price: '47 zł' },
  { name: 'Wegetariana', src: '/images/menu/Pizze/wegetariana.webp', description: 'Sos pomidorowy, mozzarella + gouda, pomidor, cebula czerwona, oliwki, pieczarki, kapary.', price: '47 zł', badges: ['wege'] },
  { name: 'Gamberetti', src: '/images/menu/Pizze/gamberetti.webp', description: 'Sos pomidorowy, mozzarella + gouda, szynka, krewetki koktajlowe.', price: '51 zł' },
  { name: 'Pollo e Ananas', src: '/images/menu/Pizze/polo e ananas.webp', description: 'Sos pomidorowy, mozzarella + gouda, kurczak grillowany, ananas, curry.', price: '47 zł' },
  { name: 'Della Campania', src: '/images/menu/Pizze/della campania.webp', description: 'Sos pomidorowy, mozzarella + gouda, boczek, szynka, kiełbasa, salami, cebula, czosnek.', price: '51 zł' },
  { name: 'Calabresa', src: '/images/menu/Pizze/calabresa.webp', description: 'Sos pomidorowy, mozzarella + gouda, salami lub boczek, pieczarki, jalapeño, sos sriracha.', price: '49 zł', badges: ['pikantna ×3'] },
  { name: 'Mascarpone', src: '/images/menu/Pizze/mascarpone.webp', description: 'Sos pomidorowy, mozzarella + gouda, mascarpone, szpinak, suszone pomidory.', price: '47 zł', badges: ['wege'] },
  { name: 'Quattro Formaggi', src: '/images/menu/Pizze/quattro formaggi.webp', description: 'Sos pomidorowy, mozzarella + gouda, gorgonzola, taleggio, parmezan.', price: '51 zł', badges: ['wege'] },
  { name: 'Bolognese', src: '/images/menu/Pizze/bolognese.webp', description: 'Sos pomidorowy, mozzarella + gouda, sos bolognese, cebula czerwona, suszone pomidory, parmezan.', price: '50 zł' },
  { name: 'Carbonara', src: '/images/menu/Pizze/carbonara.webp', description: 'Sos śmietanowy, mozzarella + gouda, boczek, cebula, żółtko, parmezan.', price: '50 zł' },
  { name: 'Chorizo', src: '/images/menu/Pizze/chorizo.webp', description: 'Sos pomidorowy, mozzarella + gouda, hiszpańska chorizo, szpinak, parmezan.', price: '50 zł' },
  { name: 'Gallinaccio', src: '/images/menu/Pizze/gallianccio.webp', description: 'Sos śmietanowy z boczkiem, mozzarella + gouda, kurki, cebula, por, świeżo mielony pieprz.', price: '51 zł' },
  { name: 'Parma', src: '/images/menu/Pizze/parma.webp', description: 'Sos pomidorowy, mozzarella + gouda, włoska szynka dojrzewająca, pomidorki koktajlowe, rukola, parmezan.', price: '49 zł', note: 'Na bardzo cienkim cieście' },
  { name: 'Mascarpone e Pollo', src: '/images/menu/Pizze/mascarpone e pollo.webp', description: 'Sos pomidorowy, mozzarella + gouda, mascarpone, szpinak, suszone pomidory, kurczak grillowany.', price: '50 zł' },
  { name: 'Calzone', src: '/images/menu/Pizze/calzone.webp', description: 'Sos pomidorowy, mozzarella + gouda, szynka, pieczarki.', price: '42 zł', note: 'Pieróg 20 cm · tylko w lokalu' },
  { name: 'Sikalafa', src: '/images/menu/Pizze/sikalafa.webp', description: 'Sos pomidorowy, mozzarella + gouda, szynka, ser camembert, rukola, żurawina lub powidła śliwkowe.', price: '49 zł', note: 'Na bardzo cienkim cieście' },
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
        <Reveal className="menu-dish-row" key={photo.name}>
          <span className="menu-dish-number">{String(index + 1).padStart(2, '0')}</span>
          <div className={`menu-photo-frame${photo.src ? '' : ' menu-photo-frame--special'}`}>
            {photo.src ? (
              <Image
                src={photo.src}
                alt={`${photo.name} z menu Pizzerii Sikalafą`}
                fill
                sizes="(max-width: 520px) 102px, (max-width: 820px) 155px, (max-width: 1100px) 190px, (max-width: 1439px) 18vw, 285px"
              />
            ) : (
              <span className="menu-photo-special-mark"><small>Specjalność szefa</small>{photo.name}</span>
            )}
          </div>
          <div className="menu-dish-copy">
            <div className="menu-dish-title-row">
              <div>
                <h4>{photo.name}</h4>
                {photo.badges?.length ? (
                  <div className="menu-dish-badges">
                    {photo.badges.map((badge) => <span key={badge}>{badge}</span>)}
                  </div>
                ) : null}
              </div>
              {photo.price ? <data className="price-value menu-dish-price" value={photo.price}>{photo.price}</data> : null}
            </div>
            {photo.note ? <p className="menu-dish-note">{photo.note}</p> : null}
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
        <Reveal className="pizza-extras">
          <p>Do każdej pizzy jeden sos gratis (80 g). <strong className="price-value">Dodatkowy sos — 2 zł.</strong></p>
          <p><span>Sosy</span> czosnkowy, pomidorowy, koperkowy, chrzanowy, ostry.</p>
          <p>Wymiana składnika na pizzy z menu traktowana jest jako kompozycja własna, czyli Margherita plus dodatki.</p>
          <div className="pizza-extras-heading"><h4>Dodatki</h4><strong className="price-value">6 zł</strong></div>
          <p>Szynka, włoska szynka dojrzewająca, boczek, salami, kiełbasa polska pieczona, kurczak grillowany, chorizo, tuńczyk, mozzarella, taleggio, camembert, parmezan, ser biały, gorgonzola, mascarpone, pomidorki koktajlowe, suszone pomidory, sos bolognese, kapary, kurki, oliwki, pieczarki, cebula, pomidor, kukurydza, czosnek, rukola, ananas, jalapeño, banan, szpinak, por.</p>
          <p className="pizza-extras-premium">Krewetki koktajlowe <strong className="price-value">12 zł</strong></p>
        </Reveal>
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
