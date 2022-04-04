import React from "react";
import "./Review.css";

const Review = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="review-container">
      <div className="description">
        <div className="img-container">
          <img src={reviews.img} alt="" />
        </div>
        <h4>{reviews.name}</h4>
        <p>{reviews.comment}</p>
        <p>{reviews.rating} star</p>
      </div>
    </div>
  );
};

export default Review;
