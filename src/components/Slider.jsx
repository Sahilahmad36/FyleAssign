
import React from "react";
import "./Slider.css";
import pixel2 from "../asset/pexel2.jpg";
import pixel3 from "../asset/pexel3.jpg";
import pixel4 from "../asset/pexel4.jpg";
import pixel5 from "../asset/pexel5.jpg";
import pixel6 from "../asset/pexel6.jpg";
import pixel7 from "../asset/pexel7.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperComponent = () => {
    return (
      <div>
      <div className="Head">
      <h1>
        WHAT WE DO
      </h1>
      </div>
      <div className="service">
        SERVICES PROVIDE FOR YOU
        <p>Managing expenses has always been painful, frustrating, and time-consuming. Despite the fact that the world has changed over the last few decades, expense management remains manual.</p>
      </div>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
        >
            <SwiperSlide>
                <img src={pixel2} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pixel3} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pixel4} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pixel5} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pixel6} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pixel7} alt="Slide 4" />
            </SwiperSlide>
            <br />
            <br />
        </Swiper>
        </div>
    );
};

export default SwiperComponent;
