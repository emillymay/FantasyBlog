// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Book Blog</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/bookreviews">Reviews</Link></li>
          <li className="nav-item"><Link to="/post-review">Post a Review</Link></li>
          <li className="nav-item"><Link to="/signup">Sign Up</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
