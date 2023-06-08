// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroSwiper from "../assets/img/BgHero.png";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={HeroSwiper} className="w-full h-[60vh] object-cover" />
      </SwiperSlide>
       <SwiperSlide>
        <img src={HeroSwiper} className="w-full h-[60vh] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={HeroSwiper} className="w-full h-[60vh] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={HeroSwiper} className="w-full h-[60vh] object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};
