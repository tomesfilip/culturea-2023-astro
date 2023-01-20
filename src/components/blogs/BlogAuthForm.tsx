import { useState } from 'react';

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
      <div className="email flex gap-x-2 items-center">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-black border-[1px] outline-none p-1 rounded-lg"
          required
        />
      </div>
      <div className="password flex gap-x-2 items-center">
        <label htmlFor="password">Heslo</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-black border-[1px] outline-none p-1 rounded-lg"
          required
        />
      </div>
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
