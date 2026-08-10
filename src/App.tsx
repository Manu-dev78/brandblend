import './App.css';

function App() {
  return (
    <div className="welcome-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-links">
          <a href="#shop-all">Shop all</a>
          <a href="#sale">Sale</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <main className="main-content">
        {/* 
          The background image is set in App.css under .background-image-container 
          You can replace './assets/hero.png' in App.css with your actual uploaded photo path!
        */}
        <div className="background-image-container">
           <div className="overlay-text">
             <h1>BrandBlend</h1>
           </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-header">
          <span className="services-eyebrow">What We Offer</span>
          <h2 className="services-title">The BrandBlend Experience</h2>
          <p className="services-subtitle">
            From curated collections to white-glove delivery, every detail is crafted for the discerning few.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h3 className="service-name">Personal Styling</h3>
            <p className="service-desc">One-on-one sessions with our luxury curators who handpick pieces that match your unique aesthetic.</p>
            <a href="#styling" className="service-link">Learn More →</a>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </div>
            <h3 className="service-name">Global Shipping</h3>
            <p className="service-desc">Premium insured delivery to over 120 countries — your treasures arrive safely, swiftly, and in style.</p>
            <a href="#shipping" className="service-link">Learn More →</a>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="service-name">Authentication</h3>
            <p className="service-desc">Every piece verified by expert appraisers. Your confidence in authenticity is our highest commitment.</p>
            <a href="#auth" className="service-link">Learn More →</a>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <h3 className="service-name">VIP Membership</h3>
            <p className="service-desc">Unlock early access, exclusive drops, and invitations to private brand events around the globe.</p>
            <a href="#vip" className="service-link">Learn More →</a>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <h3 className="service-name">Gift Wrapping</h3>
            <p className="service-desc">Bespoke packaging with handwritten notes — make every gift an unforgettable moment of luxury.</p>
            <a href="#gifts" className="service-link">Learn More →</a>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="service-name">Concierge Support</h3>
            <p className="service-desc">24/7 dedicated support from specialists who understand luxury — available by chat, email, or phone.</p>
            <a href="#concierge" className="service-link">Learn More →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
