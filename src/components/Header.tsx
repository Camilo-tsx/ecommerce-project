import { useState } from "react";
import logo from "../assets/images/logo.png";
import "./Header.css";
import { navLinks } from "../constants";
import "../styles/BurgerMenuResponsive.css";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="header-container">
      <i className="bi bi-list burger-menu" onClick={toggleMenu}></i>
      <img className="image-Logo" src={logo} alt="image-logo" />
      <div
        className={`menu-container ${
          menuIsOpen ? "menu-is-open" : "menu-is-closed"
        }`}
      >
        <div className="d-flex justify-content-start p-3">
          <i className="bi bi-x-lg close-icon" onClick={toggleMenu}></i>
          <button className="close-button" onClick={toggleMenu}>
            <p>Cerrar</p>
          </button>
        </div>
        <div>
          <ul className="ul-links">
            {navLinks.map(links => (
              <a href={links.href} key={links.href}>
                {links.label}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {menuIsOpen && (
          <div className="overlay-menu" onClick={toggleMenu}></div>
        )}
      </div>
    </div>
  );
};
