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
            <li key={links.key}>
              <a
                href={links.href}
                onClick={e => {
                  e.preventDefault();
                  window.location.href = links.href;
                }}
              >
                {links.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ToggleMenu>
  );
};
