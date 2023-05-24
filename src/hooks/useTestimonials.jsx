import { useEffect, useState } from "react";

const useTestimonials = () => {
  const [reviews, setReviews] = useState(null);

  const getData = async () => {
    const response = await fetch("reviews.json");
    const result = await response.json();
    setReviews(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return reviews;
};

export default useTestimonials;
