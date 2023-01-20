import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

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
