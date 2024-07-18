// src/pages/bookreviewpage.js
import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/bookreviews';

const BookReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
      } catch (error) {
        setError('Error fetching reviews. Please try again later.');
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="book-reviews">
      <h1>Book Reviews</h1>
      {error && <p>{error}</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h2>{review.title}</h2>
            <h4>by {review.author}</h4>
            <p>{review.review}</p>
            <p>Published Date: {review.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookReviewsPage;
