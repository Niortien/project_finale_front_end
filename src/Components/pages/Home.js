import React from 'react';
import image from '../../images/img1.jpeg';
import Navigation from '../Navigation';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navigation />
      <div className="image-container">
        <img src={image} alt="" className="image" />
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
