"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/swiper-bundle.min.css';

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SliderSmall() {
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
        <SwiperSlide >
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690313565/WhatsApp_Image_2023-07-25_at_16.31.58_lhg64s.jpg"
            height={720} width={1280} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690919224/WhatsApp_Image_2023-07-25_at_17.09.13_4_dsndrx.jpg"
            height={728} width={1640} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690315966/WhatsApp_Image_2023-07-25_at_17.00.35_su0ge2.jpg"
            height={728} width={1640} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1691449388/WhatsApp_Image_2023-07-25_at_17.10.19_1_pciutb.jpg"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide className='hidden'>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1691449261/WhatsApp_Image_2022-12-19_at_18.06.51_1_bp4kos.jpg"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh]' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src=
            "https://res.cloudinary.com/dvh8hozns/image/upload/v1690314266/WhatsApp_Image_2023-07-25_at_16.39.06_tfv0v3.jpg"
            height={1600} width={1200} alt="Asociación Civil anunciar" className='h-[100vh] object-contain' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
