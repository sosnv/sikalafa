import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  Bike,
  Check,
  Clock3,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { ImageReveal, Reveal } from '@/components/motion-primitives';
import { SiteHeader } from '@/components/site-header';

const pizzaItems = [
  ['Margherita', 'Klasyczna pizza z sosem pomidorowym i serem.'],
  ['Capricciosa', 'Klasyczna kompozycja pełna dobrze znanych smaków.'],
  ['Quattro Formaggi', 'Dla miłośników intensywnego, serowego smaku.'],
  ['Mascarpone', 'Sos pomidorowy, mozzarella i gouda, mascarpone, szpinak oraz suszone pomidory.'],
  ['Carbonara', 'Pizza inspirowana jednym z najbardziej znanych włoskich makaronów.'],
  ['Parma', 'Wyrazista pizza z włoskimi akcentami.'],
  ['Chorizo', 'Propozycja dla osób lubiących intensywniejsze smaki.'],
  ['Bolognese', 'Pizza inspirowana klasycznym sosem bolońskim.'],
  ['Sikalafą', 'Nasza firmowa kompozycja.'],
];

const pastaItems = [
  'Spaghetti Bolognese',
  'Spaghetti Carbonara',
  'Penne Quattro Formaggi',
  'Penne Quattro Formaggi e Pollo',
  'Penne Sikalafą',
  'Penne con pollo e spinaci',
  'Penne con pollo e gorgonzola',
  'Penne con gamberetti e spinaci',
];

const saladItems = [
  ['Sałatka Sikalafą', 'Pomidorki koktajlowe, camembert, mandarynka, orzechy, pestki i żurawina.'],
  ['Z grillowanym kurczakiem', 'Świeża, sycąca i przygotowywana na bieżąco.'],
  ['Z tuńczykiem', 'Lekka propozycja z wyrazistymi dodatkami.'],
  ["A'la grecka", 'Klasyczne, świeże smaki w lekkim wydaniu.'],
];

const monthlyIngredients = [
  'kaszanka',
  'czerwona cebula',
  'jabłko',
  'kapusta kiszona',
  'gorgonzola',
  'dressing musztardowo-miodowy',
];

const deliveryZones = [
  {
    title: 'Białe Błota',
    price: '10 zł',
    free: 'Darmowa dostawa od 140 zł',
    places: 'Całe Białe Błota',
  },
  {
    title: 'Okoliczne miejscowości',
    price: '15 zł',
    free: 'Darmowa dostawa od 160 zł',
    places: 'Lipniki, Murowaniec, Drzewce, Kruszyn Krajeński, Ciele i Trzciniec',
  },
  {
    title: 'Dalsza strefa',
    price: '20 zł',
    free: 'Darmowa dostawa od 180 zł',
    places: 'Lisi Ogon, Prądki, Zielonka, Przyłęki, Zamość, Rynarzewo, Małe Rudy, Łochowo, Łochowice i Szkocja',
  },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <Image
            src="/sikalafa-hero.png"
            alt="Pizza, makaron i sałatka przygotowane w Pizzerii Sikalafą"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Białe Błota · pizza · makarony · sałatki</p>
          <h1 id="hero-title">Twój smak.<br /><em>Twoja historia.</em></h1>
          <p className="hero-intro">Pizza na cienkim cieście, aromatyczne makarony i świeże sałatki — przygotowane z sercem i ze starannie dobranych składników.</p>
          <div className="hero-actions">
            <a className="primary-action" href="tel:+48532997669"><Phone aria-hidden="true" /> Zamów: 532 997 669</a>
            <a className="text-link" href="#menu">Zobacz nasze menu <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <p className="hero-note" aria-hidden="true">Przygotowane<br />z sercem.</p>
      </section>

      <section className="about section-shell" id="about">
        <Reveal className="about-heading">
          <p className="section-kicker">01 · O nas</p>
          <h2>Lokalnie.<br /><em>Po swojemu.</em></h2>
        </Reveal>
        <Reveal className="about-copy">
          <p className="lead-copy">Sikalafą to lokalna pizzeria w Białych Błotach, stworzona z pasji do dobrego jedzenia i wspólnego spędzania czasu.</p>
          <p>Stawiamy na proste, pełne smaku dania ze starannie wybranych składników. W menu łączymy klasyczne pizze z autorskimi kompozycjami, aromatycznymi makaronami i świeżymi sałatkami.</p>
          <p>Chcemy być miejscem, do którego wraca się z rodziną, znajomymi albo po prostu po swoją ulubioną pizzę.</p>
        </Reveal>
      </section>

      <section className="about-visual" aria-label="Wnętrze Pizzerii Sikalafą">
        <ImageReveal src="/sikalafa-interior.png" alt="Przytulne wnętrze lokalnej pizzerii" className="about-photo" />
        <p className="about-visual-note">Dobre jedzenie.<br />Dobre spotkania.</p>
      </section>

      <section className="food-menu section-shell" id="menu">
        <Reveal className="menu-heading">
          <p className="section-kicker">02 · Nasze menu</p>
          <h2>Każdy znajdzie<br /><em>coś dla siebie.</em></h2>
          <p>Od dobrze znanych klasyków po nasze własne kompozycje. Wszystko przygotowujemy na bieżąco, z dbałością o smak i jakość.</p>
        </Reveal>

        <article className="food-category pizza-category">
          <ImageReveal src="/menu-pizza.png" alt="Pizza na cienkim cieście" className="category-photo" />
          <Reveal className="category-copy">
            <p className="category-number">01</p>
            <h3>Pizza</h3>
            <p className="category-lead">Cienkie ciasto, sos pomidorowy, ser i starannie dobrane dodatki.</p>
            <div className="dish-grid pizza-list">
              {pizzaItems.map(([name, description]) => (
                <div className="dish" key={name}><h4>{name}</h4><p>{description}</p></div>
              ))}
            </div>
          </Reveal>
        </article>

        <article className="food-category reverse pasta-category">
          <ImageReveal src="/menu-pasta.png" alt="Kremowy makaron penne z kurczakiem i szpinakiem" className="category-photo" />
          <Reveal className="category-copy">
            <p className="category-number">02</p>
            <h3>Makarony</h3>
            <p className="category-lead">Kremowe, pomidorowe i serowe sosy — od włoskich klasyków po nasze autorskie propozycje.</p>
            <div className="simple-dish-list">
              {pastaItems.map((name) => <p key={name}>{name}</p>)}
            </div>
          </Reveal>
        </article>

        <article className="food-category salad-category">
          <ImageReveal src="/menu-salad.png" alt="Sałatka Sikalafą z camembertem, mandarynką i żurawiną" className="category-photo" />
          <Reveal className="category-copy">
            <p className="category-number">03</p>
            <h3>Sałatki</h3>
            <p className="category-lead">Świeże, lekkie i pełne różnorodnych dodatków.</p>
            <div className="dish-grid">
              {saladItems.map(([name, description]) => (
                <div className="dish" key={name}><h4>{name}</h4><p>{description}</p></div>
              ))}
            </div>
          </Reveal>
        </article>
      </section>

      <section className="monthly" id="month">
        <ImageReveal src="/pizza-month.png" alt="Wrześniowa pizza miesiąca z kaszanką, jabłkiem i gorgonzolą" className="monthly-photo" position="center" />
        <div className="monthly-panel">
          <Reveal>
            <p className="section-kicker">03 · Tylko przez ograniczony czas</p>
            <h2>Pizza miesiąca.<br /><em>Wrzesień.</em></h2>
            <p>Margherita w odważnym, sezonowym wydaniu. Spróbuj, zanim zniknie z menu.</p>
            <ul className="ingredient-list">
              {monthlyIngredients.map((ingredient) => <li key={ingredient}><Check aria-hidden="true" />{ingredient}</li>)}
            </ul>
            <a className="primary-action dark-action" href="tel:+48532997669"><Phone aria-hidden="true" /> Zamów: 532 997 669</a>
          </Reveal>
        </div>
      </section>

      <section className="order-section section-shell" id="order">
        <Reveal className="order-heading">
          <p className="section-kicker">04 · Zamówienia</p>
          <h2>Na miejscu,<br /><em>z odbiorem lub dostawą.</em></h2>
        </Reveal>
        <Reveal className="order-details">
          <p>Masz ochotę na pizzę, makaron lub sałatkę? Zadzwoń — przygotujemy Twoje zamówienie z odbiorem osobistym albo dostawą.</p>
          <div className="order-benefits">
            <div><ShoppingBag aria-hidden="true" /><span>Odbiór osobisty</span></div>
            <div><Bike aria-hidden="true" /><span>Dostawa od 50 zł<br /><small>+ koszt dostawy</small></span></div>
            <div><CreditCard aria-hidden="true" /><span>Karta i BLIK<br /><small>w lokalu i przy dostawie</small></span></div>
          </div>
          <a className="order-phone" href="tel:+48532997669"><span>Zamów telefonicznie</span>532 997 669 <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </section>

      <section className="delivery section-shell" id="delivery">
        <Reveal className="delivery-heading">
          <p className="section-kicker">05 · Dostawa</p>
          <h2>Dowieziemy<br /><em>prosto do Ciebie.</em></h2>
        </Reveal>
        <div className="delivery-zones">
          {deliveryZones.map((zone, index) => (
            <Reveal className="zone-card" key={zone.title}>
              <span className="zone-number">0{index + 1}</span>
              <div className="zone-title"><h3>{zone.title}</h3><strong>{zone.price}</strong></div>
              <p>{zone.places}</p>
              <div className="zone-free"><Bike aria-hidden="true" />{zone.free}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="delivery-note">
          <Sparkles aria-hidden="true" />
          <p>Przy zamówieniach od <strong>250 zł</strong> otrzymasz <strong>10% rabatu</strong>. Promocje nie łączą się.</p>
        </Reveal>
      </section>

      <section className="promo section-shell" id="promo">
        <Reveal className="promo-copy">
          <p className="section-kicker">Aktualna promocja</p>
          <h2>Dwie pizze zamawiasz.<br /><em>Trzecią jesz 50% taniej.</em></h2>
          <p>Przy zamówieniu dwóch pizz możesz otrzymać trzecią pizzę Margherita z rabatem 50%. Zapytaj o szczegóły podczas składania zamówienia.</p>
        </Reveal>
        <div className="promo-badge" aria-hidden="true"><strong>−50%</strong><span>na trzecią<br />Margheritę</span></div>
      </section>

      <section className="contact section-shell" id="contact">
        <Reveal className="contact-heading">
          <p className="section-kicker">06 · Kontakt</p>
          <h2>Wpadnij albo<br /><em>zadzwoń.</em></h2>
        </Reveal>
        <div className="contact-columns">
          <Reveal className="contact-card">
            <MapPin aria-hidden="true" />
            <span>Adres</span>
            <h3>Pizzeria Sikalafą</h3>
            <p>Szosa Szubińska 87<br />Białe Błota</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Szosa+Szubi%C5%84ska+87%2C+Bia%C5%82e+B%C5%82ota" target="_blank" rel="noreferrer">Pokaż na mapie <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
          <Reveal className="contact-card">
            <Phone aria-hidden="true" />
            <span>Zamówienia i kontakt</span>
            <a className="contact-large-link" href="tel:+48532997669">532 997 669</a>
            <a className="contact-email" href="mailto:sikalafamanager@gmail.com">sikalafamanager@gmail.com</a>
          </Reveal>
          <Reveal className="contact-card hours-card">
            <Clock3 aria-hidden="true" />
            <span>Godziny otwarcia</span>
            <dl>
              <div><dt>Poniedziałek</dt><dd>nieczynne</dd></div>
              <div><dt>Wtorek – czwartek</dt><dd>12:00–21:00</dd></div>
              <div><dt>Piątek – sobota</dt><dd>12:00–22:00</dd></div>
              <div><dt>Niedziela</dt><dd>12:00–21:00</dd></div>
            </dl>
            <small>Przy dużej liczbie zamówień możliwość ich składania może zakończyć się wcześniej.</small>
          </Reveal>
        </div>
      </section>

      <section className="career section-shell" id="career">
        <Reveal className="career-heading">
          <p className="section-kicker">07 · Kariera</p>
          <h2>Dołącz do<br /><em>naszego zespołu.</em></h2>
          <p>Lubisz gotować i dobrze czujesz się w pracy zespołowej? Być może szukamy właśnie Ciebie.</p>
        </Reveal>
        <Reveal className="career-details">
          <div className="qualities">
            {['rzetelność', 'uczciwość', 'zaangażowanie', 'gotowość do nauki', 'dyspozycyjność', 'odporność na większy ruch'].map((quality) => <span key={quality}><Check aria-hidden="true" />{quality}</span>)}
          </div>
          <p>Doświadczenie w gastronomii będzie dodatkowym atutem. Oferujemy przyjazny zespół, elastyczny grafik, zniżki pracownicze oraz warunki zależne od doświadczenia i zaangażowania.</p>
          <a className="primary-action dark-action" href="mailto:sikalafamanager@gmail.com?subject=CV%20%E2%80%94%20Pizzeria%20Sikalaf%C4%85"><Mail aria-hidden="true" /> Wyślij swoje CV</a>
        </Reveal>
      </section>

      <footer>
        <div className="footer-brand"><a className="footer-mark" href="#top">Sikalafą <span>Pizzeria</span></a><p>Pizza · Makarony · Sałatki</p></div>
        <div className="footer-address"><MapPin aria-hidden="true" /><p>Szosa Szubińska 87<br />Białe Błota</p></div>
        <div className="footer-links"><a href="tel:+48532997669">Tel. 532 997 669</a><a href="mailto:sikalafamanager@gmail.com">Napisz do nas</a></div>
        <a href="#top" className="back-top">Wróć na górę ↑</a>
        <div className="footer-bottom"><span>© Pizzeria Sikalafą</span><span>Dostawa · Odbiór osobisty</span></div>
      </footer>
    </main>
  );
}
