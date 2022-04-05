import React from "react";
import { Link } from "react-router-dom";
import useReviewFetch from "../../hooks/useReviewFetch";
import Review from "../Reviews/Review/Review";
import "./Home.css";

const Home = () => {
  const reviews = useReviewFetch();
  return (
    <>
      <div className="container">
        <div className="half">
          <h1>Watch gallary</h1>
          <p>Explore best watches for your smartness.</p>
        </div>
        <div className="half">
          <div className="img">
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8353645/2019/4/23/015c672e-43ad-4e67-85a4-2cc52ac9530a1556021953748-Roadster-Men-Black-Analogue-Watch-MFB-PN-LB-9323-63515560219-1.jpg"
              alt="watch"
            ></img>
          </div>
        </div>
      </div>
      <div className="customer-reviews-container">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} />
          ))}
        </div>
        <Link to="/reviews" className="Reviews-btn">
          See all Reviews
        </Link>
      </div>
    </>
  );
};

export default Home;
