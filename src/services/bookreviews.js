// src/services/bookreviews.js
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const bookreviewsCollection = collection(db, 'bookreviews');

export const postReview = async (review) => {
  try {
    await addDoc(bookreviewsCollection, review);
  } catch (error) {
    console.error("Error posting review: ", error);
  }
};

export const getReviews = async () => {
  try {
    const snapshot = await getDocs(bookreviewsCollection);
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error getting reviews: ", error);
    return [];
  }
};
