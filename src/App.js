import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="/airbnb 1.png" alt="Airbnb Header" className="header-image" />
       
      </header>
      <div className="image-gallery">
        <div className="gallery-column">
          <img src="/image 28.png" alt="Image 28" className="image28" />
        </div>
        <div className="gallery-column">
          <img src="/image 30.png" alt="Image 30" className="image30" />
          <img src="/image 26.png" alt="Image 26" className="gallery-image" />
        </div>
        <div className="gallery-column">
          <img src="/image 27.png" alt="Image 27" className="image27" />
          <img src="/image 29.png" alt="Image 29" className="gallery-image" />
        </div>
        <div className="gallery-column">
          <img src="/image 22.png" alt="Image 22" className="image22" />
          <img src="/image 23.png" alt="Image 23" className="image23" />
        </div>
        <div className="gallery-column">
          <img src="/image 25.png" alt="Image 25" className="gallery-image" />
          <img src="/image 24.png" alt="Image 24" className="gallery-image" />
        </div>
      </div>
      <div className="text-content"> 
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    <div className="featured-images">
    <div className="featured-item">
      <img src="/image 12.png" alt="Life lessons with Katie Zaferes" className="featured-image" />
      <div className="image-label sold-out">Sold Out</div>
      <div className="image-details">
        <span className="star">★</span> 5.0 (6) * USA
      </div>
      <h3>Life lessons with Katie Zaferes</h3>
      <p className="price">From $156 / Person</p>
    </div>
    <div className="featured-item">
      <img src="/wedding-photography 1.png" alt="Learn wedding photography" className="featured-image" />
      <div className="image-label online">Online</div>
      <div className="image-details">
        <span className="star">★</span> 5.0 (30) * USA
      </div>
      <h3>Learn wedding photography</h3>
      <p className="price">From $125 / Person</p>
    </div>
    <div className="featured-item">
      <img src="/mountain-bike 1.png" alt="Group Mountain Biking" className="featured-im" />
      <div className="image-details">
        <span className="star">★</span> 4.8 (2) * USA
      </div>
      <h3>Group Mountain Biking</h3>
      <p className="price">From $50 / Person</p>
    </div>
  </div>
</div>
);
}

 



export default App;
