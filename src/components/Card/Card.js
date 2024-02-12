import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ card }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">{card.text}</p>
        <Link to="#" className="card-link"><img className="card-img" src={card.link} alt={card.name}/>
        </Link>
      </div>
    </div>
  );
}

export default Card;
