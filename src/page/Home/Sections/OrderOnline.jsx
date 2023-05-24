import SectionHeader from "../../../components/SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <section className="container mx-auto px-4 slide mb-20">
      <SectionHeader
        heading={"---From 11:00am to 10:00pm---"}
        title={"ORDER ONLINE"}
      />
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide img={slide1} tag={"Salads"} />
          </SwiperSlide>

          <SwiperSlide>
            <Slide img={slide2} tag={"Soups"} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide img={slide3} tag={"pizzas"} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide img={slide4} tag={"desserts"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const Slide = ({ img, tag }) => {
  return (
    <article className="relative slide text-black ">
      <img src={img} alt="" />
      <div className="absolute bottom-0 left-0 right-0 py-8 hover:text-white hover:bg-[#1515157f] bg-transparent  transition-all">
        <h5 className="font2 uppercase text-4xl font-bold mx-auto w-fit">
          {tag}
        </h5>
      </div>
    </article>
  );
};

export default OrderOnline;
