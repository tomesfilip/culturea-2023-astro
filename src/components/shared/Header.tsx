import { useState } from 'react';

import HamburgerButton from '../header/HamburgerButton';
import LogoLink from '../header/LogoLink';
import MenuLink from '../header/MenuLink';
import TicketButton from '../header/TicketButton';

import { menuItems } from '../../data/menuItems';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="w-full bg-white border-b-2">
      <nav className="relative z-10 flex flex-col items-center h-24 py-6 xl:flex-row xl:justify-between xl:py-4 xl:px-12 xl:h-auto">
        <LogoLink />
        <HamburgerButton handleToggleMenu={() => setMenuActive(!menuActive)} />
        <ul
          className={`flex flex-col items-center bg-white py-6 gap-y-4 xl:hidden absolute w-full top-24 transition-all duration-500  ${
            menuActive ? 'right-0' : '-right-[100vw]'
          }`}
        >
          {menuItems.map((menuItem) => (
            <MenuLink
              key={menuItem.title}
              menuItem={menuItem}
              onClick={() => setMenuActive(false)}
            />
          ))}
          <TicketButton />
        </ul>
        <ul className="flex-row items-center hidden space-x-8 bg-white xl:flex">
          {menuItems.map((menuItem) => (
            <MenuLink
              key={menuItem.title}
              menuItem={menuItem}
              onClick={() => setMenuActive(false)}
            />
          ))}
          <TicketButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
