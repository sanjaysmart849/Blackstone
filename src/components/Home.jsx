import '../styles/Home.css';

export default function Home() {
  return (
    <section id="home" className="home-section fade-in">
      <div className="hero-gradient" />
      <div className="hero-content">
        <p className="eyebrow">Cinematic Storytelling</p>
        <h1>Black Stones Production House</h1>
        <p className="hero-copy">We create visual stories that matter.</p>
        <a className="hero-cta" href="#services">
          Explore Services
        </a>
      </div>
    </section>
  );
}
