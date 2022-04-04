import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-container">
      <div className="description">
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt=""
          />
        </div>
        <h4>sara jones</h4>
        <p>very good to use</p>
        <p>5 star</p>
      </div>
    </div>
  );
};

export default Review;
