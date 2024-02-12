import React, { useState } from "react";
import "./Rectangle.css";

function Rectangle() {
  const [state, setState] = useState(false);

  function handlerColor() {
    setState(true);
  }

  function handlerColor2() {
    setState(false);
  }

  return (
    <div className="rectangle">
      <div className="rectangle_box rectangle_box-blue" />
      {!state && (
        <div
          className="rectangle_box rectangle_box-green"
          onClick={handlerColor}
        />
      )}
      {state && (
        <div
          className="rectangle_box rectangle_box-red"
          onClick={handlerColor2}
        />
      )}
    </div>
  );
}

export default Rectangle;
