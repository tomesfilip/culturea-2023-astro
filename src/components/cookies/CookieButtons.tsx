interface Props {
  handleDeclineCookies: () => void;
  handleAcceptCookies: () => void;
}

const CookieButtons = ({
  handleDeclineCookies,
  handleAcceptCookies,
}: Props) => {
  return (
    <div className="buttons flex gap-x-4 gap-y-2 flex-wrap">
      <button
        className="px-6 py-2 text-white bg-flushOrange border-white rounded-lg border-[1px]"
        onClick={handleDeclineCookies}
      >
        Odmítnout
      </button>
      <button
        className="px-6 py-2 text-flushOrange bg-white rounded-lg border-[1px]"
        onClick={handleAcceptCookies}
      >
        Přijmout cookies
      </button>
    </div>
  );
};

export default CookieButtons;
