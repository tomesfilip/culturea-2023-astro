interface Props {
  onClick: () => void;
}

const BlogAuthButton = ({ onClick }: Props) => {
  return (
    <button
      className="bg-flushOrange text-2xl text-white fixed bottom-4 right-4 px-4 py-2 rounded-lg"
      onClick={onClick}
    >
      Přihlásit se
    </button>
  );
};

export default BlogAuthButton;
