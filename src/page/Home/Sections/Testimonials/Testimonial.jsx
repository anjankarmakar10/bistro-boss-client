import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import img from "../../../../assets/home/icon/quote.svg";

const Testimonial = ({ review }) => {
  return (
    <article className="flex flex-col justify-center items-center p-4">
      <Rating style={{ maxWidth: 250 }} value={+review?.rating} readOnly />

      <img className="pb-10 pt-12" src={img} alt="" />
      <p className="text-center max-w-3xl mx-auto text-[#444] text-xl">
        {review?.details}
      </p>
      <h3 className="text-3xl text-[#CD9003] uppercase mt-2">{review?.name}</h3>
    </article>
  );
};

export default Testimonial;
