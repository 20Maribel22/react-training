import React, { useState } from "react";
import "./Count.css";

function Count() {
  const [countSecond, setCountSecond] = useState(0);
  const [countThird, setCountThird] = useState(0);
  const [countFourth, setCountFourth] = useState(0);
  

  return (
    <div className="count">
      <h2>Счетчик: {countSecond}</h2>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCountSecond((prev) => prev + 1);
        }}
      >
        Добавить
      </button>

      <p>{countSecond <= 10 ? "Счетчик меньше 10" : "Счетчик больше 10"}</p>

      <h3>Счетчик: {countThird}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCountThird((prev) => prev + 1);
        }}
      >
        Добавить 
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          setCountThird((prev) => prev - 1);
        }}
      >
       Убрать
      </button>



      <h3>Счетчик: {countFourth}</h3>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setCountFourth((prev) => prev + 1);
        }}
      >
        Добавить 1
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
            setCountFourth((prev) => prev + 5);
        }}
      >
        Добавить 5
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
            setCountFourth((prev) => prev + 10);
        }}
      >
        Добавить 10
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
            setCountFourth((prev) => prev * prev);
        }}
      >
        Умножить
      </button>
      <button className="btn btn-danger" onClick={() => setCountFourth(prev =>!prev)}>Очистить</button>
      
    </div>
  );
}

export default Count;
