import { useStore } from '@nanostores/react';
import { isAuthModalOpen } from '../../../stores/authModalStore';

const BlogAuthLoginButton = () => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);

  return (
    <button
      className="bg-flushOrange text-2xl text-white  px-4 py-2 rounded-lg"
      onClick={() => isAuthModalOpen.set(true)}
    >
      Přihlásit se
    </button>
  );
};

export default BlogAuthLoginButton;
