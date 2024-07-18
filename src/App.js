// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/homepage';
import PostReviewPage from './pages/postreviewpage';
import BookReviewsPage from './pages/bookreviewpage';
import SignUp from './pages/signuppage';
import LoginPage from './pages/loginpage';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { AuthProvider, useAuth } from './components/authcontent';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookreviews" element={<BookReviewsPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/post-review" element={<PostReviewPage />} />
            {/* Private route logic */}
            <Route
              path="/post-review"
              element={<PrivateRoute fallback={<Navigate to="/login" replace />} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ element, fallback }) => {
  const { user } = useAuth();

  return user ? element : fallback;
};

export default App;