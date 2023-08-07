"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/swiper-bundle.min.css';

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Slider() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`h-screen w-full transition-all duration-300 ${scrolled ? "" : "lg:mt-[30vh]"}`}>
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
        {/* Jaire */}
        <SwiperSlide >
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690313565/WhatsApp_Image_2023-07-25_at_16.31.58_lhg64s.jpg"
            height={396} width={720} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        {/* Religio */}
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690919201/WhatsApp_Image_2023-07-25_at_17.46.06_2_vuew2e.jpg"
            height={768} width={1024} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        {/* Comunicación */}
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690318846/Dise%C3%B1o_sin_t%C3%ADtulo_19_wefhds.png"
            height={728} width={1640} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690315966/WhatsApp_Image_2023-07-25_at_17.00.35_su0ge2.jpg"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690318331/Dise%C3%B1o_sin_t%C3%ADtulo_18_pgpzlf.png"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690919240/WhatsApp_Image_2023-07-25_at_17.09.13_5_xnmk8f.jpg"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh] object-contain' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
