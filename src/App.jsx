import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import InfluencerVideos from './components/InfluencerVideos.jsx';
import EventPhotography from './components/EventPhotography.jsx';
import ShortFilms from './components/ShortFilms.jsx';
import BrandPromotions from './components/BrandPromotions.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const observers = [];
    const elements = document.querySelectorAll('.fade-in');

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.15,
    });

    elements.forEach((el) => {
      observer.observe(el);
      observers.push(el);
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle hash scrolling when arriving to the main page
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/events') {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 50);
          return;
        }
      }

      if (!location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <About />
              <Events />
              <Contact />
            </>
          } />
          <Route path="/events" element={
            <>
              <Home />
              <Services />
              <About />
              <Events />
              <Contact />
            </>
          } />
          <Route path="/events/influencer" element={<InfluencerVideos />} />
          <Route path="/events/photography" element={<EventPhotography />} />
          <Route path="/events/shortfilms" element={<ShortFilms />} />
          <Route path="/events/brand" element={<BrandPromotions />} />
          <Route path="*" element={
            <>
              <Home />
              <Services />
              <About />
              <Events />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


