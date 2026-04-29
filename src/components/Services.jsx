import '../styles/Services.css';

const serviceItems = [
  'Brand Advertisement',
  'Event Photography',
  'Personal Branding',
  'Short Films',
];

export default function Services() {
  return (
    <section id="services" className="services-section fade-in">
      <div className="section-header">
        <span className="section-label">Services</span>
        <h2>Premium Production Services</h2>
      </div>
      <div className="services-grid">
        {serviceItems.map((label) => (
          <article key={label} className="service-card">
            <div className="card-inner">
              <span className="service-index">0{serviceItems.indexOf(label) + 1}</span>
              <h3>{label}</h3>
              <p>Crafted to elevate your brand with cinematic visuals and polished storytelling.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
