import React from "react";
import { Link } from "react-router-dom";
import "./NavItems.css";

function NavItems({ item }) {
  return <li className="nav__links-type"><Link to={item.link}>{item.title}</Link></li>;
}

export default NavItems;
