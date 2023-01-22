interface Props {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-stone-600/40 z-10">
      {children}
    </div>
  );
};

export default ModalOverlay;
