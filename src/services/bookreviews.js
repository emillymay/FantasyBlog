// src/services/bookReviews.js
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const reviewsCollection = collection(db, 'reviews');

export const postReview = async (review) => {
  try {
    await addDoc(reviewsCollection, review);
  } catch (error) {
    console.error("Error posting review: ", error);
  }
};

export const getReviews = async () => {
  try {
    const snapshot = await getDocs(reviewsCollection);
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error getting reviews: ", error);
  }
};
