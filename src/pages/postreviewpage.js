import React, { useState } from 'react';
import { postReview } from '../services/bookreviews';
import { useAuth } from '../components/authcontent';

const PostReviewPage = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { title, author, content };
    await postReview(review);
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div className="post-review">
      <h1>Post a Review</h1>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Review:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>User must login to post a review.</p>
      )}
    </div>
  );
};

export default PostReviewPage;
