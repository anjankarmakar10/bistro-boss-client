import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/reviews");
    const result = await response.json();
    setReviews(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return reviews;
};

export default useReviews;
