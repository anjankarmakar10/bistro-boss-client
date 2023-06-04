import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState(null);

  const getData = async () => {
    const response = await fetch(
      "https://bistro-boss-server-anjankarmakar.vercel.app/reviews"
    );
    const result = await response.json();
    setReviews(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return reviews;
};

export default useReviews;
