// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/homepage';
import BookReviewsPage from './pages/bookreviewpage';
import PostReviewPage from './pages/postreviewpage';
import SignUpPage from './pages/signuppage';
import LoginPage from './pages/loginpage';
import Footer from './components/footer';
import Navbar from './components/navbar';

// Import Reviews component
import Reviews from './components/bookreview';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Navigation links */}
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookreviews" element={<Reviews />} /> {/* Route for Reviews page */}
          <Route path="/post-review" element={<PostReviewPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
