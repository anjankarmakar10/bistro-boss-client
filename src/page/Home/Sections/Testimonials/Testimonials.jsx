import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useTestimonials from "../../../../hooks/useTestimonials";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = useTestimonials();

  return (
    <section className="mb-32">
      <SectionHeader
        heading={"---What Our Clients Say---"}
        title={"TESTIMONIALS"}
      />

      <div className="container mx-auto px-8">
        <Swiper
          autoplay={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <Testimonial review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
