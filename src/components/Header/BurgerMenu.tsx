import { navLinks } from "../../constants";
import "./Header.css";
import { ToggleMenu } from "./ToggleMenu";

interface BurgerMenuProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ menuIsOpen, toggleMenu }: BurgerMenuProps) => {
  return (
    <ToggleMenu position="left" menuIsOpen={menuIsOpen} toggleMenu={toggleMenu}>
      <div>
        <ul className="ul-links">
          {navLinks.map(links => (
            <a href={links.href} key={links.key}>
              {links.label}
            </a>
          ))}
        </ul>
      </div>
    </ToggleMenu>
  );
};
