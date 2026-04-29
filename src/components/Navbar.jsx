import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setOpen(false);

    const hash = href.startsWith('#') ? href : `#${href}`;

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash });
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', hash);
      return;
    }

    window.location.hash = hash;
  };

  return (
    <header className={`navbar ${scrolled ? 'solid' : 'transparent'}`}>
      <div className="navbar-inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
        >
          Black Stones
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className={`nav-toggle ${open ? 'active' : ''}`} onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
