import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "./main-slider.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import slide from "./slide.jpg";
import smallSlide from "./slide-small.jpg";

const IntroTitle = () => {
  return (
    <div className="intro">
      <div className="intro__inner">
        <h1 className="intro__title">
          Высокоточное изготовление изделий из металла по чертежам
        </h1>
      </div>
    </div>
  );
};

SwiperCore.use([Pagination]);

const MainSlider = () => {
  return (
    <Swiper slidesPerView={1} speed={800} pagination={{ clickable: true }}>
      <SwiperSlide>
        <IntroTitle />
        <img src={slide} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
