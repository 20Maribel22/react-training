import React, { useState } from "react";
import "./TextList.css";
import Item from "./Item/Item";

function TextList({list}) {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showTree, setShowTree] = useState(false);

  const handleClickOne = () => {
    setShowOne(true);
    setShowTwo(false);
    setShowTree(false);
  };

  const handleClickTwo = () => {
    setShowOne(false);
    setShowTwo(true);
    setShowTree(false);
  };

  const handleClickTree = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowTree(true);
  };

  return (
    <div className="text-list">
      <div className="card w-75">
        <div className="card-body">
          <button className="btn btn-secondary" onClick={handleClickOne}>
            Разворачиваемая панель #1
          </button>

          
           {showOne && list.slice(0,1).map((item) => {
            return(<Item text={item.text} key={item.id} />)
           })}
          
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <button className="btn btn-secondary" onClick={handleClickTwo}>
            Разворачиваемая панель #2
          </button>
          {showTwo && list.slice(1,2).map((item) => {
            return(<Item text={item.text} key={item.id} />)
           })}
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <button className="btn btn-secondary" onClick={handleClickTree}>
            Разворачиваемая панель #3
          </button>
          {showTree && list.slice(2,3).map((item) => {
            return(<Item text={item.text} key={item.id} />)
           })}
        </div>
      </div>
    </div>
  );
}

export default TextList;
