import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Blog.css";
import { imageData } from "../../data/blogImages";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function Blog() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imageData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageData[2]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
