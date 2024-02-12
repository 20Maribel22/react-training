import React, { useState } from "react";
import "./InputText.css";

function InputText() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("Вам нужно ввести минимум 3 символа");

  function handleInput(e) {
    setPassword(e.target.value);

    if (password.length < 3 || password.length > 8) {
      setError("Пароль должен быть длинее 3 и меньше 8")
    
    if (!e.target.value) {
        setError("Вам нужно ввести минимум 3 символа");
    }
 } else {
        setError('')
    }
  }

  return (
    <form className="form">
      <h3 className="form__title">Введите текст</h3>
      <input
        className="form__input"
        type="password"
        name="password"
        minLength="3"
        maxLength="8"
        value={password}
        onChange={e => handleInput(e)}
      />
      {password && error && <span className="form__input-error">{error}</span>}
      {/* <span className="form__input-error">{error}</span> */}
    </form>
  );
}

export default InputText;
