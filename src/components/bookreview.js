// src/components/Reviews.js
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';


const BookReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, 'bookreviews');
      const snapshot = await getDocs(reviewsCollection);
      const reviewsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Book Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.title}</h3>
            <p><strong>Author:</strong> {review.author}</p>
            <p><strong>Review:</strong> {review.review}</p>
            <p><strong>Published Date:</strong> {review.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookReviews;
