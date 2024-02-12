import React from "react";
import './Footer.css'


function Footer() {
  return (
    <footer className="footer">
     <p className="footer__copyright">&copy; Copyright {new Date().getFullYear()}</p>
     <p className="footer__text">Все права защищены</p>
    </footer>
  );
}

export default Footer;