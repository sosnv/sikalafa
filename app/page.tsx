import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { ImageReveal, Reveal } from '@/components/motion-primitives';
import { SiteHeader } from '@/components/site-header';

const pizzas = [
  { name: 'Margherita Sikalafa', description: 'Pomidory San Marzano, fior di latte, bazylia, oliwa', price: '38' },
  { name: 'Bosco', description: 'Fior di latte, pieczarki, karczochy, pieczona papryka, rukola', price: '47' },
  { name: 'Piccante', description: 'Pomidory, pikantne salami, nduja, czerwona cebula, miód', price: '49' },
  { name: 'Bianca', description: 'Ricotta, fior di latte, ziemniaki, rozmaryn, pecorino', price: '46' },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <Image src="/sikalafa-hero.png" alt="Pizzeria Sikalafa rozświetlona ciepłym światłem nocą" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Wrocław · pizza, wino i dobre towarzystwo</p>
          <h1 id="hero-title">Przyjdź na pizzę.<br /><em>Zostań na dłużej.</em></h1>
          <p className="hero-intro">Mały lokal z wielkim sercem — ręcznie robiona pizza, stoliki w blasku świec i wieczory, którym się nie spieszy.</p>
          <div className="hero-actions">
            <a className="text-link" href="#menu">Zobacz menu <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="#reservations">Zarezerwuj stolik <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <p className="hero-note" aria-hidden="true">Bez pośpiechu.<br />Czuj się jak u siebie.</p>
        <a className="scroll-mark" href="#story" aria-label="Przejdź do naszej historii"><span>Przewiń</span><i /><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="story section-shell" id="story">
        <Reveal className="story-heading">
          <p className="section-kicker">01 · Nasza historia</p>
          <h2>Zaczęło się od<br />stołu <em>dla przyjaciół.</em></h2>
        </Reveal>
        <Reveal className="story-copy">
          <p className="lead-copy">Sikalafa nigdy nie miała być zwykłą restauracją. To miejsce, w którym można usiąść wygodnie, dzielić się pizzą i zapomnieć o czasie.</p>
          <p>Tu wszystko jest osobiste: ciasto, o które dbamy każdego dnia, płyty za barem i rośliny oplatające stare półki. Lokal powstawał powoli — jedno znalezione krzesło i jedna historia po drugiej.</p>
          <p className="hand-note">Robione ręcznie.<br />Najlepiej smakuje razem.</p>
        </Reveal>
      </section>

      <section className="pizza-feature" id="pizza">
        <ImageReveal src="/sikalafa-pizza.png" alt="Świeża pizza Sikalafa podana z winem przy blasku świecy" className="pizza-photo" position="63% center" />
        <div className="pizza-panel">
          <Reveal>
            <p className="section-kicker">02 · Pizza</p>
            <h2>Proste rzeczy,<br /><em>zrobione jak należy.</em></h2>
            <p>Długo dojrzewające ciasto. Lekki, wyrośnięty rant. Starannie dobrane składniki i połączenia, które zmieniają się wraz z porami roku.</p>
            <dl className="pizza-facts">
              <div><dt>48h</dt><dd>powolnej fermentacji</dd></div>
              <div><dt>450°</dt><dd>bardzo gorący piec</dd></div>
              <div><dt>100%</dt><dd>robimy na miejscu</dd></div>
            </dl>
            <a className="text-link dark-link" href="#menu">Poznaj nasze ulubione <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>

      <section className="place" id="place">
        <div className="place-copy section-shell">
          <Reveal>
            <p className="section-kicker">03 · Lokal</p>
            <h2>Miejsce z<br /><em>własnym rytmem.</em></h2>
            <p>Przygaszone światło, drewno z historią i muzyka grająca w sam raz. W każdym kącie można coś odkryć, ale najważniejsi są zawsze ludzie przy Twoim stole.</p>
          </Reveal>
        </div>
        <ImageReveal src="/sikalafa-interior.png" alt="Ciepłe, pełne roślin wnętrze Sikalafa" className="place-photo" />
        <p className="place-caption">Przysuń krzesło.<br />Rozgość się.</p>
      </section>

      <section className="menu-section section-shell" id="menu">
        <Reveal className="menu-intro">
          <p className="section-kicker">04 · Kilka ulubionych</p>
          <h2>Co dziś<br /><em>na stole.</em></h2>
          <p>Nasze menu zmienia się razem z porami roku i naszym nastrojem. Oto kilka pizz, do których stale wracamy.</p>
        </Reveal>
        <div className="menu-list">
          {pizzas.map((pizza, index) => (
            <Reveal className="menu-item" key={pizza.name}>
              <span className="menu-number">0{index + 1}</span>
              <div><h3>{pizza.name}</h3><p>{pizza.description}</p></div>
              <span className="menu-price">{pizza.price} zł</span>
            </Reveal>
          ))}
          <p className="menu-note">Zapytaj nas o dzisiejsze specjały, naturalne wina i coś słodkiego.</p>
        </div>
      </section>

      <section className="experience" id="experience">
        <ImageReveal src="/sikalafa-evening.png" alt="Stół w blasku świec przygotowany na wieczór w Sikalafa" className="experience-photo" position="70% center" />
        <div className="experience-shade" />
        <Reveal className="experience-copy">
          <p className="section-kicker">05 · Wieczór</p>
          <h2>Niech wieczór<br /><em>płynie swoim rytmem.</em></h2>
          <p>Przyjdź głodny. Zabierz kogoś, kogo lubisz. Resztą zajmiemy się my.</p>
          <a className="text-link" href="#reservations">Znajdź swój stolik <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </section>

      <section className="reservations section-shell" id="reservations">
        <Reveal className="reservation-heading">
          <p className="section-kicker">Wpadnij do nas</p>
          <h2>Twój stolik<br /><em>już czeka.</em></h2>
        </Reveal>
        <Reveal className="visit-details">
          <div className="visit-row">
            <MapPin aria-hidden="true" />
            <div><span>Znajdziesz nas</span><p>Wrocław, Polska</p></div>
          </div>
          <div className="visit-row">
            <Clock3 aria-hidden="true" />
            <div><span>Godziny otwarcia</span><p>Wtorek — niedziela<br />od 16:00 do późna</p></div>
          </div>
          <a className="reservation-button" href="tel:+48532997669">Zadzwoń i zarezerwuj <span>+48 532 997 669</span></a>
        </Reveal>
      </section>

      <footer>
        <a className="footer-mark" href="#top">Sikalafa <span>Pizzeria</span></a>
        <p>Pizza, ludzie i dobre chwile.</p>
        <a href="#top" className="back-top">Wróć na górę ↑</a>
      </footer>
    </main>
  );
}
