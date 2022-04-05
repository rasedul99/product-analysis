import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={review.img} alt="" />
      </div>
      <h4>{review.name}</h4>
      <p>{review.comment}</p>
      <p>{review.rating} star</p>
    </div>
  );
};

export default Review;
