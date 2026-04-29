import '../styles/Footer.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/blackstonesproductionhouse/' },
  { label: 'Whatsapp', href: 'https://wa.me/919344399835' },
  { label: 'Email', href: 'mailto:blackstonesproduction@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Black Stones</p>
          <p className="footer-copy">
            A premium film production identity focused on cinematic storytelling.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Black Stones Production House. All rights reserved.
      </div>
    </footer>
  );
}