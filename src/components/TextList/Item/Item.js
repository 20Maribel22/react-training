import React from "react";

function Item({ text }) {
  return (
    <div>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Item;
