import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Pagination } from "swiper";

const data = [
    {
        travel: "Tierra Santa",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1690311576/tierra-santa_vzxh7z.jpg",
        fecha: "10/10/10",
        desc: "blablabla",
    },
    {
        travel: "Camino de Santiago",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1690759075/Camino-Santiago-Frances-Pirineos-1030x686_n4xsab.webp",
        fecha: "10/10/10",
        desc: "blablabla",
    },
    {
        travel: "Roma y Asis",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1690759628/ASIS_WEB_RELIGIO_2022_lfvrjj.jpg",
        fecha: "10/10/10",
        desc: "blablabla",
    },
    {
        travel: "Jordania",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1690760585/pexels-photo-3214958_zrb3mg.jpg",
        fecha: "10/10/10",
        desc: "blablabla",
    },
];


const Religio = () => {
    return (
        <section class="text-gray-400 bg-gradient-to-t body-font rounded-lg">
            <div class="container w-screen p-5">
                <div class="flex flex-col lg:flex-row text-center w-full items-center justify-center mb-20 sm:mb-4">
                    <Image className="object-cover object-center"
                        src={"https://res.cloudinary.com/dvh8hozns/image/upload/v1690759753/Religio_Negro_PNG_3_f7kv7r.png"}
                        width={125} height={60} />
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p>
                </div>

                <div className="hidden lg:flex flex-wrap -m-4">
                    {data.map((item, index) => (
                        <div key={index} className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center justify-start text-center sm:text-left bg-white bg-opacity-50 rounded-lg">
                                <Image
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                    src={item.img}
                                    width={4200}
                                    height={2100}
                                />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{item.travel}</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="hidden md:flex mb-4">{item.desc}</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden flex m-4">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        // autoplay={{
                        //     delay: 5000,
                        // }}
                        className="w-full"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4 w-full h-1/2">
                                    <div className="h-full flex flex-row items-center justify-start text-center text-left bg-white bg-opacity-50 rounded-lg">
                                        <Image
                                            className="rounded-lg w-[200] h-[100] overflow-hidden object-cover"
                                            src={item.img}
                                            width={4200}
                                            height={2100}
                                        />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">{item.travel}</h2>
                                            <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                            <p className="hidden md:flex mb-4">{item.desc}</p>
                                            <span className="inline-flex">
                                                <a className="text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Religio
