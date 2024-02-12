import React from "react";
import './Rating.css'

function Rating() {
  return (
    <div className="rating">
      <div className="rating__item">5&#9733;</div>
      <div className="rating__item">4&#9733;</div>
      <div className="rating__item">3&#9733;</div>
      <div className="rating__item">2&#9733;</div>
      <div className="rating__item">1&#9733;</div>
    </div>
  );
}

export default Rating;
