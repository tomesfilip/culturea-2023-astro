import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(`Sign out error: ${error}`);
  }
};
