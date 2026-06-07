  import { useNavigate } from 'react-router-dom';
import '../styles/Events.css';

const categories = [
  {
    id: 'influencer',
    name: 'Influencer Videos',
    thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Professional influencer content creation'
  },
  {
    id: 'photography',
    name: 'Event Photography',
    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    description: 'Capturing memorable event moments'
  },
  {
    id: 'shortfilms',
    name: 'Short Films',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.vx7dvGHI8-3CySgapMipKgHaEK?pid=Api&P=0&h=180',
    description: 'Creative short film productions'
  },
  {
    id: 'brand',
    name: 'Brand Promotions',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    description: 'Brand storytelling and promotions'
  }
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <section id="events" className="events-section">
      <div className="section-header">
        <span className="section-label">Events</span>
        <h2>Our Production Categories</h2>
        <p>Explore our diverse portfolio of creative productions</p>
      </div>

      <div className="categories-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(`/events/${category.id}`)}
          >
            <div className="category-thumbnail">
              <img src={category.thumbnail} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
