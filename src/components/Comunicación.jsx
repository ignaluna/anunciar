import YouTubePlayer from "./YoutubePlay"
import { Swiper, SwiperSlide } from 'swiper/react';
// import styles bundle
import 'swiper/swiper-bundle.min.css';

// import required modules
import { Autoplay, Pagination } from "swiper";

const data = ["sVIW38y5HjA", "gH-FnFNH4PA","W139JHx-yME", "d1ZqHp-8Jvg", "483Z9xrvTXQ"]

const Comunicación = () => {
  return (
    <div class="container flex flex-col">
      <div class="flex flex-col lg:flex-row w-full mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center flex justify-center">Comunicación <br /> Anunciando el Evangelio</h1>
        <p class="lg:pl-6 lg:w-2/3 leading-relaxed text-gray-700">El area de comunicación de Anunciar tiene como objetivo anunciar la palabra de Dios y comunicar un mensaje de amor. Anunciando el evangelio estuvo 10 años al aire y produjo +10000 horas de grabación</p>
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000,
        }
        }
        className="w-full"
      >
        {data.map((url, i) => {
          return (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <YouTubePlayer height={300} width={500} url={url} alt="Anunciando el evangelio" class="w-full object-cover h-full object-center block rounded-lg justify-center items-center" src="https://dummyimage.com/500x300" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Comunicación;