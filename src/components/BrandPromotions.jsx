import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { videos } from '../data/brandPromotionsVideos.js';
import '../styles/CategoryPage.css';

export default function BrandPromotions() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  

  
  return (
    <div className="category-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
        <span className="breadcrumb-separator">&gt;</span>
        <span onClick={() => navigate('/')} className="breadcrumb-link">Events</span>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">Brand Promotions</span>
      </div>

      <div className="category-header">
        <h1>Brand Promotions</h1>
        <p>Strategic brand storytelling and promotional content</p>
      </div>

     

      {/* Video Grid */}
      <div className="videos-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card" onClick={() => openModal(video)}>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-overlay">
                <div className="play-icon">▶</div>
              </div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="modal-video"
            />
            <button className="close-modal" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}