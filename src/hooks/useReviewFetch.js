import { useEffect, useState } from "react";

const useReviewFetch = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.JSON")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return reviews;
};
export default useReviewFetch;
