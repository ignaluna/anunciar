"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/swiper-bundle.min.css';

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';

export default function Slider() {
  return (
    <div className="h-screen w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className=""
      >
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvh8hozns/image/upload/v1688230117/Anunciar/vboqpoo1tt0i2week4h1.jpg"
          height={1000} width={1000} alt="Asociación Civil anunciar"/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
