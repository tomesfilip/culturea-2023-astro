import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: 'culturea-2023.firebaseapp.com',
  projectId: 'culturea-2023',
  storageBucket: 'culturea-2023.appspot.com',
  messagingSenderId: '316930466507',
  appId: '1:316930466507:web:261729d7669e39fe0a714e',
  measurementId: 'G-214HX4R0W9',
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const blogCollectionRef = collection(db, 'blog-articles');
