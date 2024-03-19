import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div>Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>Slide 3</div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;