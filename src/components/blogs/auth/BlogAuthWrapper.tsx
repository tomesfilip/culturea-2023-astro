import { useStore } from '@nanostores/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import { user } from '../../../stores/userStore';
import BlogAuthButton from './BlogAuthButton';
import BlogAuthForm from './BlogAuthForm';

interface Props {
  children: React.ReactNode;
}

const BlogAuthWrapper = ({ children }: Props) => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);
  const $user = useStore(user);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(`Sign out error: ${error}`);
    }
  };

  return (
    <>
      {isAuthModalOpen.get() && <BlogAuthForm />}
      {children}
      {user.get() ? (
        <BlogAuthButton onClick={() => logout()}>Odhlásit se</BlogAuthButton>
      ) : (
        <BlogAuthButton onClick={() => isAuthModalOpen.set(true)}>
          Přihlásit se
        </BlogAuthButton>
      )}
    </>
  );
};

export default BlogAuthWrapper;
