import React from "react";
import useReviewFetch from "../../hooks/useReviewFetch";
import Review from "./Review";
import "./Reviews.css";

const Reviews = () => {
  const reviews = useReviewFetch();
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default Reviews;
