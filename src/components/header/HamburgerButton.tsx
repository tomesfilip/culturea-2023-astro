interface Props {
  handleToggleMenu: () => void;
}

const HamburgerButton = ({ handleToggleMenu }: Props) => {
  return (
    <button
      className="absolute -translate-y-1/2 hamburger-button xl:hidden top-1/2 right-6"
      aria-label="zobraz menu"
      onClick={handleToggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="26"
        viewBox="0 0 46 26"
        fill="none"
      >
        <line
          x1="2"
          y1="2"
          x2="44"
          y2="2"
          stroke="#FF8400"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="13"
          x2="44"
          y2="13"
          stroke="#FF8400"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="24"
          x2="44"
          y2="24"
          stroke="#FF8400"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
