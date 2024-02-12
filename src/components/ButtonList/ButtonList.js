import React, {useState} from "react";
import "./ButtonList.css";

function ButtonList() {
    const [show, setShow] = useState(false);

   const handleClick = () =>{
      setShow(true)
   }

  return (
    <div className="button-list">
      <button className="btn btn-secondary btn-secondary_list " onClick={handleClick}>Кнопка выпадающего списка</button>
     {show && <ul className="button-list__items">
        <li className="button-list__item">Action</li>
        <li className="button-list__item">Another action</li>
        <li className="button-list__item">Something else here</li>
      </ul>}
    </div>
  );
}

export default ButtonList;
