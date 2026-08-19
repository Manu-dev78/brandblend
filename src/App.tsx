import './App.css';
import InteractiveDotGrid from './components/aicanvas/dot-grid';
import img3DSignatures from './assets/3D signatures.jpeg';
import imgNailProps from './assets/nail props.jpeg';
import imgNeonSignages from './assets/neon singnages.jpeg';
import imgNoCutPrinting from './assets/no cut printing.jpeg';
import imgPriceBooks from './assets/price books and catalogue.jpeg';
import imgVinnylPaySign from './assets/vinnyl pay sign.jpeg';

const SERVICES = [
  {
    title: '3D signatures',
    image: img3DSignatures,
    href: '#3d-signatures',
  },
  {
    title: 'nail props',
    image: imgNailProps,
    href: '#nail-props',
  },
  {
    title: 'neon singnages',
    image: imgNeonSignages,
    href: '#neon-signages',
  },
  {
    title: 'no cut printing',
    image: imgNoCutPrinting,
    href: '#no-cut-printing',
  },
  {
    title: 'price books and catalogue',
    image: imgPriceBooks,
    href: '#price-books-and-catalogue',
  },
  {
    title: 'vinnyl pay sign',
    image: imgVinnylPaySign,
    href: '#vinnyl-pay-sign',
  },
];

function App() {
  return (
    <div className="welcome-container">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <InteractiveDotGrid
          showLabel={false}
          colors={{
            background: '#060C17',
            dot: '241,241,248',
            highlight: '220,167,37',
            baseAlpha: 0.12,
            peakAlpha: 0.9,
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-links">
          <a href="#shop-all">Shop all</a>
          <a href="#sale">Sale</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="main-content">
        <div className="background-image-container">
          <div className="overlay-text">
            <h1>BrandBlend</h1>
          </div>
          <p className="hero-tagline">Embrace Your Authentic Self</p>
        </div>
      </main>

      {/* Experience intro */}
      <section className="experience-section">
        <span className="experience-eyebrow">What We Offer</span>
        <h2 className="experience-title">The BrandBlend Experience</h2>
        <p className="experience-subtitle">
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section" id="services">
        <div className="services-header">
          <span className="services-eyebrow">Discover</span>
          <h2 className="services-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-image">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <div className="service-body">
                <h3 className="service-name">{s.title}</h3>
                <a href={s.href} className="service-cta">
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer-cta">
          <a href="#collection" className="collection-link">
            Explore Full Collection →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <h3 className="footer-brand">BrandBlend</h3>
        <p className="footer-tagline">Elevating everyday life with curated luxury.</p>
        <nav className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <p className="footer-copy">© 2024 BrandBlend. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
