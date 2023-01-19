import type { TMenuLink } from '../../lib/types/TMenuLink';

interface Props {
  menuItem: TMenuLink;
  onClick: () => void;
}

const MenuLink = ({ menuItem, onClick }: Props) => {
  return (
    <li onClick={onClick}>
      <a href={menuItem.url} className="text-[19px] font-headline">
        {menuItem.title}
      </a>
    </li>
  );
};

export default MenuLink;
