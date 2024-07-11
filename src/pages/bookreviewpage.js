// src/pages/BookReviewsPage.js
import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/bookreviews';


const BookReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsData = await getReviews();
      setReviews(reviewsData);
    };
    fetchReviews();
  }, []);

  return (
    <div className="book-reviews">
      <h1>Book Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h2>{review.title}</h2>
          <h4>by {review.author}</h4>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BookReviewsPage;
