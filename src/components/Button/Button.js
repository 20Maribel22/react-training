import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [value, setValue] = useState("Скрыть");
  const [title, setTitle] = useState(true);

  const handlerValue = () => {
    setValue("Показать");
    setTitle(false);
  };
  return (
    <div className="button">
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handlerValue}
      >
        {value}
      </button>
      {title && <p>123456</p>}
    </div>
  );
}

export default Button;
