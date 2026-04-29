import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="about-grid">
        <div className="about-media" />
        <div className="about-copy">
          <span className="section-label">About Us</span>
          <h2>We bring premium visuals and storytelling to every frame.</h2>
          <p>
       
  Black Stones Production House is a creative production and branding agency specializing in influencer collaborations, commercial ad shoots, event photography, and digital storytelling. 
  We blend creativity and strategy to produce visually compelling content that elevates brands, builds identity, and drives audience engagement across digital platforms.
          </p>
          <div className="about-cards">
            <article>
              <h3>Mission</h3>
              <p>To craft impactful visual stories that elevate brands, influencers, and events through creative production and strategic storytelling.</p>
            </article>
            <article>
              <h3>Vision</h3>
              <p>To be a trusted name in creative media production, shaping strong visual identities that inspire and influence globally.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
