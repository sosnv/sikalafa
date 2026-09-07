import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { ImageReveal, Reveal } from '@/components/motion-primitives';
import { SiteHeader } from '@/components/site-header';

const pizzas = [
  { name: 'Margherita Sikalafa', description: 'San Marzano tomato, fior di latte, basil, olive oil', price: '38' },
  { name: 'Bosco', description: 'Fior di latte, mushrooms, artichoke, roasted pepper, rocket', price: '47' },
  { name: 'Piccante', description: 'Tomato, spicy salami, nduja, red onion, honey', price: '49' },
  { name: 'Bianca', description: 'Ricotta, fior di latte, potato, rosemary, pecorino', price: '46' },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <Image src="/sikalafa-hero.png" alt="Sikalafa pizzeria glowing warmly at night" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Wrocław · pizza, wine &amp; good company</p>
          <h1 id="hero-title">Come for pizza.<br /><em>Stay for a while.</em></h1>
          <p className="hero-intro">A little house with a big heart — handmade pizza, candlelit tables and evenings that take their time.</p>
          <div className="hero-actions">
            <a className="text-link" href="#menu">See the menu <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="#reservations">Reserve a table <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <p className="hero-note" aria-hidden="true">No rush.<br />You&apos;re home.</p>
        <a className="scroll-mark" href="#story" aria-label="Scroll to our story"><span>Scroll</span><i /><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="story section-shell" id="story">
        <Reveal className="story-heading">
          <p className="section-kicker">01 · Our story</p>
          <h2>It started with<br />a table <em>for friends.</em></h2>
        </Reveal>
        <Reveal className="story-copy">
          <p className="lead-copy">Sikalafa was never meant to feel like a restaurant. It&apos;s a place to settle in, share a pizza and forget to check the time.</p>
          <p>Everything here is personal: the dough we tend to each day, the records behind the bar, the plants finding their way across old shelves. The room grew slowly, one found chair and one story at a time.</p>
          <p className="hand-note">Made by hand.<br />Best shared together.</p>
        </Reveal>
      </section>

      <section className="pizza-feature" id="pizza">
        <ImageReveal src="/sikalafa-pizza.png" alt="Fresh Sikalafa pizza served with wine by candlelight" className="pizza-photo" position="63% center" />
        <div className="pizza-panel">
          <Reveal>
            <p className="section-kicker">02 · The pizza</p>
            <h2>Simple things,<br /><em>done properly.</em></h2>
            <p>Long-fermented dough. A blistered, airy crust. Thoughtful ingredients and combinations that change with the season.</p>
            <dl className="pizza-facts">
              <div><dt>48h</dt><dd>slow fermentation</dd></div>
              <div><dt>450°</dt><dd>a very hot oven</dd></div>
              <div><dt>100%</dt><dd>made by us</dd></div>
            </dl>
            <a className="text-link dark-link" href="#menu">Explore our favourites <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>

      <section className="place" id="place">
        <div className="place-copy section-shell">
          <Reveal>
            <p className="section-kicker">03 · The place</p>
            <h2>A room with<br /><em>its own rhythm.</em></h2>
            <p>Low lights, well-worn wood and music playing just loud enough. Every corner has something to discover, but the best part is always the people around your table.</p>
          </Reveal>
        </div>
        <ImageReveal src="/sikalafa-interior.png" alt="The warm, plant-filled interior of Sikalafa" className="place-photo" />
        <p className="place-caption">Pull up a chair<br />and make it yours.</p>
      </section>

      <section className="menu-section section-shell" id="menu">
        <Reveal className="menu-intro">
          <p className="section-kicker">04 · A few favourites</p>
          <h2>What&apos;s on<br /><em>the table.</em></h2>
          <p>Our menu moves with the seasons and our mood. Here are a few pizzas we keep coming back to.</p>
        </Reveal>
        <div className="menu-list">
          {pizzas.map((pizza, index) => (
            <Reveal className="menu-item" key={pizza.name}>
              <span className="menu-number">0{index + 1}</span>
              <div><h3>{pizza.name}</h3><p>{pizza.description}</p></div>
              <span className="menu-price">{pizza.price} zł</span>
            </Reveal>
          ))}
          <p className="menu-note">Ask us about today&apos;s specials, natural wines and something sweet.</p>
        </div>
      </section>

      <section className="experience" id="experience">
        <ImageReveal src="/sikalafa-evening.png" alt="A candlelit table set for an evening at Sikalafa" className="experience-photo" position="70% center" />
        <div className="experience-shade" />
        <Reveal className="experience-copy">
          <p className="section-kicker">05 · The evening</p>
          <h2>Let the night<br /><em>take its time.</em></h2>
          <p>Come hungry. Bring someone you like. We&apos;ll take care of the rest.</p>
          <a className="text-link" href="#reservations">Find your table <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </section>

      <section className="reservations section-shell" id="reservations">
        <Reveal className="reservation-heading">
          <p className="section-kicker">Come by</p>
          <h2>Your table<br /><em>is waiting.</em></h2>
        </Reveal>
        <Reveal className="visit-details">
          <div className="visit-row">
            <MapPin aria-hidden="true" />
            <div><span>Find us</span><p>Wrocław, Poland</p></div>
          </div>
          <div className="visit-row">
            <Clock3 aria-hidden="true" />
            <div><span>Opening hours</span><p>Tuesday — Sunday<br />from 16:00 until late</p></div>
          </div>
          <a className="reservation-button" href="tel:+48532997669">Call to reserve <span>+48 532 997 669</span></a>
        </Reveal>
      </section>

      <footer>
        <a className="footer-mark" href="#top">Sikalafa <span>Pizzeria</span></a>
        <p>Pizza, people &amp; good times.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
