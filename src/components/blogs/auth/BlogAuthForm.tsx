import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../config/firebase';
import { authErrorMap } from '../../../data/authErrorMap';
import LabelledInput from '../LabelledInput';
import BlogAuthFormHeader from './BlogAuthFormHeader';

const BlogAuthForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.toJSON());
        setAuthError('');
      })
      .catch((error) => {
        const errorKey =
          Object.keys(authErrorMap).find((key) =>
            error.message.includes(key)
          ) ?? 'something-wrong';
        return setAuthError(authErrorMap[errorKey]);
      });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center flex-wrap gap-y-4 absolute w-[90%] md:w-[30vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-black border-[1px] rounded-lg p-4"
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
  );
};

export default BlogAuthForm;
