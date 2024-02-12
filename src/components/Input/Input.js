import React from "react";
import './Input.css'

function Input({ passwords }) {
  return (
    <div className="inpute">
      <input
        type="password"
        name="password"
        placeholder="пароль"
        defaultValue={passwords}
      />
    </div>
  );
}

export default Input;
