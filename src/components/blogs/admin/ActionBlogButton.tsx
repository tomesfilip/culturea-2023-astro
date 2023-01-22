interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const ActionBlogButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="px-2 py-1 my-2 outline-none border-[1px] border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionBlogButton;
