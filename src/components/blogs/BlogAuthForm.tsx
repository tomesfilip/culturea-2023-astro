import { useState } from 'react';
import LabelledInput from './LabelledInput';

const BlogAuthForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email: email, password: password });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col flex-wrap gap-y-4"
    >
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
    </form>
  );
};

export default BlogAuthForm;
