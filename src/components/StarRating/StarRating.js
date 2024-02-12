import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star__container">
    <div className="star">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
            ></input>
            <FaStar className="star__item" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={50} 
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
     
    </div>
    <p>The rating is {rating}</p>
    </div>
  );
}

export default StarRating;
