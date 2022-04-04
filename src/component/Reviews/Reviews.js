import React from "react";
import Review from "./Review";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <Review />
      <Review />
      <Review />
    </div>
  );
};

export default Reviews;
