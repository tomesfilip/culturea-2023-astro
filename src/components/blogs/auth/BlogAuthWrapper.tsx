import { useStore } from '@nanostores/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import useMonitorAuthUser from '../../../hooks/useMonitorAuthUser';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import BlogAuthButton from './BlogAuthButton';
import BlogAuthForm from './BlogAuthForm';

interface Props {
  children: React.ReactNode;
}

const BlogAuthWrapper = ({ children }: Props) => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);
  const { loggedUser, isLoading, error } = useMonitorAuthUser();

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
      {loggedUser ? (
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
