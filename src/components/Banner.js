// src/Banner.js
import React from 'react';
import './Banner.css';
import bannerImage from '../img/b2b-ecommerce.webp'; // Adjust the path accordingly

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Software for product sales, services and repairs business.</h1>
        <p>Join more than 3500 businesses. 15 days free.</p>
        <button className="start-now-button">Start Now</button>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
