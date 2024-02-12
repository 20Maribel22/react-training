import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu() {
  return (
    <div className="navigation">
      <nav className="navigation__container">
        <ul className="navigation__list">
          <li className="navigation__link-container">
            <NavLink
              className={({ isActive }) => `navigation__link
              ${isActive && " navigation__link_active"}`}
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__link-container">
            <NavLink
              className={({ isActive }) => `navigation__link
              ${isActive && " navigation__link_active"}`}
              to="/about"
            >
              О нас
            </NavLink>
          </li>
          <li className="navigation__link-container">
            <NavLink
              className={({ isActive }) => `navigation__link
              ${isActive && " navigation__link_active"}`}
              to="/news"
            >
              Новости
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
