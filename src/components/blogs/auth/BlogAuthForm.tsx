import { useStore } from '@nanostores/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../config/firebase';
import { authErrorMap } from '../../../data/authErrorMap';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import ModalOverlay from '../../shared/ModalOverlay';
import LabelledInput from '../LabelledInput';
import BlogAuthFormHeader from './BlogAuthFormHeader';

const BlogAuthForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const $isAuthModalOpen = useStore(isAuthModalOpen);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError('');
      isAuthModalOpen.set(false);
    } catch (error: any) {
      // console.log(error.message);
      const errorKey =
        Object.keys(authErrorMap).find((key) => error.message.includes(key)) ??
        'something-wrong';
      return setAuthError(authErrorMap[errorKey]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login();
  };

  return (
    <ModalOverlay>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center flex-wrap gap-y-4 absolute w-[90%] md:w-[30vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-20"
      >
        <BlogAuthFormHeader />
        <LabelledInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          text="Email"
        />
        <LabelledInput
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          text="Heslo"
        />
        <button
          type="submit"
          className="bg-flushOrange px-4 py-2 text-white rounded-lg text-lg"
        >
          Přihlásit
        </button>
        {authError && <p className="text-red-700 text-center">{authError}</p>}
      </form>
    </ModalOverlay>
  );
};

export default BlogAuthForm;
