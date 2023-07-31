import YouTubePlayer from "./YoutubePlay"
import { Swiper, SwiperSlide } from 'swiper/react';
// import styles bundle
import 'swiper/swiper-bundle.min.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const data = ["sVIW38y5HjA", "gH-FnFNH4PA","W139JHx-yME", "d1ZqHp-8Jvg", "483Z9xrvTXQ"]

const Comunicación = () => {
  return (
    <div class="container flex flex-col">
      <div class="flex w-full mb-10">
        <h1 class="sm:text-3xl text-36 font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Comunicación <br /> Anunciando el Evangelio</h1>
        <p class="lg:pl-6 lg:w-2/3 leading-relaxed text-gray-700">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
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