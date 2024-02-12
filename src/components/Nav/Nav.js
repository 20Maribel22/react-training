import React from "react";
import NavItems from "../NavItems/NavItems";
import "./Nav.css";

function Nav({items}) {


  return (
    <nav className="nav">
      <ul className="nav__links">
        {items.map(item => {
            return <NavItems item={item} key={item.id} />
        })}
        
       
      </ul>
    </nav>
  );


}

export default Nav;


