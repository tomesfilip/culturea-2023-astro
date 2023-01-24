import { logout } from '../../../utils/logout';

const BlogAuthLogoutButton = () => {
  return (
    <button
      className="bg-flushOrange text-2xl text-white  px-4 py-2 rounded-lg"
      onClick={() => logout()}
    >
      Odhlásit se
    </button>
  );
};

export default BlogAuthLogoutButton;
