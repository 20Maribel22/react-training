import React from "react";
import logo from "../../images/panda_logo.png";
import "./Header.css";


function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <h1 className="header_title">Panda.com</h1>
    </header>
  );
}

export default Header;
