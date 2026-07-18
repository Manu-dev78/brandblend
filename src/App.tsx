import './App.css';

function App() {
  return (
    <div className="welcome-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-links">
          <a href="#shop-all">Shop All</a>
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
    </div>
  );
}

export default App;
