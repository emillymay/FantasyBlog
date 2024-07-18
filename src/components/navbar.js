import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/authcontent'; // Ensure this path is correct
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/bookreviews">Book Reviews</Link>
      {user ? (
        <>
          <Link to="/post-review">Post a Review</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
