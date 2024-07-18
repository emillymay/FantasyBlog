import React from 'react';
import { Link } from 'react-router-dom';
import '../style/homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Fantasy Book Blog</h1>
      <p>A monthly book club to expand your book collection and connect with fellow readers</p>
      <Link to="/bookreviews">
        <button className="view-reviews-button">Go to This Month's Book Reviews</button>
      </Link>
    </div>
  );
};

export default HomePage;
