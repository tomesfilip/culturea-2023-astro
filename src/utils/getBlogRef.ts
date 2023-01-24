import { doc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getDocRef = (blogId: string) => {
  return doc(db, 'blog-articles', blogId);
};
