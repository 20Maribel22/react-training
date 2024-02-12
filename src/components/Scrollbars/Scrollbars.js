import React, { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import "./Scrollbars.css";

function Scrollbars() {
  // const [value, setValue] = useState(0)
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const handleClickPlus = () => {
    if (count + 10 > 100) return;
    setCount(count + 10);
  };

  const handleClickMinus = () => {
    if (count - 10 < 0) return;
    setCount(count - 10);
  };
  
  useEffect(() => {
    // console.log(count);
  }, [count]);

  return (
    <div className="scrollbars">
      <Progress percent={count + "%"} />
      <div className="scrollbars__input-container">
        <input
          className="scrollbars__input"
          type="number"
          id="tentacles"
          name="tentacles"
          min="1"
          max="100"
          onChange={handleChange}
          value={count}
        />
        <div className="btn-container">
          <button
            className="btn btn-secondary btn-secondary__scroll"
            onClick={handleClickPlus}
          >
            Прибавить 10%
          </button>
          <button
            className="btn btn-secondary btn-secondary__scroll"
            onClick={handleClickMinus}
          >
            Убавить 10%
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scrollbars;
