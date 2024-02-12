import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

import "./Content.css";

function Content({ cards }) {
  return (
    <div className="content">
      <div className="alert alert-primary" role="alert">
        Это основное уведомление с{" "}
        <Link to="#" className="alert-link">
          примером ссылки
        </Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Главный
      </button>
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}

export default Content;
