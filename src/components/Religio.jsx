import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, logoFacebook, logoInstagram } from "ionicons/icons";

const data = [
    {
        travel: "Jubileo de los Jóvenes y Camino de Santiago",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1734660435/Anunciar/n13qn1mzawfctnvsnnyg.png",
        fecha: "Julio 2025",
        desc: "Acompaña Padre Martin Nacusi",
    },
    {
        travel: "Santuarios Marianos Europeos - Roma",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1734659980/Anunciar/asc3lchf8t60beko66uf.png",
        fecha: "Abril 2025",
        desc: "Acompaña Padre Mario Sanchez",
    },
    {
        travel: "Santuarios Marianos Europeos - Portugal",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1734660115/Anunciar/rulhwb7wxprpsqxtd1dq.png",
        fecha: "Marzo-Abril 2025",
        desc: " Acompaña Padre Roberto Galleano",
    },
    {
        travel: "Jubileo de las Familias",
        img: "https://res.cloudinary.com/dvh8hozns/image/upload/v1734660290/Anunciar/tpdrutyuqrctzgk3vpi6.png",
        fecha: "Mayo 2025",
        desc: "Acompaña Padre Walter Posca",
    },
];


const Religio = () => {
    return (
        <section class="text-gray-400 bg-gradient-to-t body-font rounded-lg">
            <div class="container w-screen p-5">
                <div class="flex flex-col lg:flex-row text-center w-full items-center justify-center mb-7 lg:space-y-0 lg:mt-0 mt-5">
                    {/* <Image className="object-cover object-center"
                        src={"https://res.cloudinary.com/dvh8hozns/image/upload/v1690759753/Religio_Negro_PNG_3_f7kv7r.png"}
                        width={125} height={60} /> */}
                    <h2 class=" leading-relaxed text-2x1 text-black font-bold w-full text-center text-[40px]">Centro de Peregrinaciones Anunciar</h2>

                </div>
                <div className="hidden lg:flex flex-wrap -m-4">
                    {data.map((item, index) => (
                        <div key={index} className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center justify-start text-center sm:text-left bg-white bg-opacity-50 rounded-lg">
                                <Link target="_blank" href="https://religio.tur.ar/#!/-bienvenido-2/">
                                    <Image
                                        className="rounded-tl-lg rounded-bl-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                        src={item.img}
                                        width={4200}
                                        height={2100}
                                    />
                                </Link>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-700">{item.travel}</h2>
                                    <h3 className="text-gray-500 mb-3">{item.fecha}</h3>
                                    <p className="md:flex text-gray-900 mb-4">{item.desc}</p>
                                    <span className="inline-flex text-gray-700 gap-4">
                                        <Link target="_blank" href="https://www.instagram.com/religioperegrinaciones/">
                                            <IonIcon
                                                className="w-8 h-8"
                                                icon={logoInstagram} />
                                        </Link>
                                        <Link target="_blank" href="https://m.facebook.com/profile.php/?id=100063520482105&name=xhp_nt__fb__action__open_user">
                                            <IonIcon className="w-8 h-8"
                                                icon={logoFacebook} />
                                        </Link>
                                        <Link target="_blank" href="https://chat.whatsapp.com/FDp6FXngHwfKo75wj9ZHbm">
                                            <IonIcon
                                                className="w-8 h-8"
                                                icon={chatbubbleEllipsesOutline} />
                                        </Link>
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
                        autoplay={{
                            delay: 5000,
                        }}
                        className="w-full"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4 w-full h-1/2">
                                    <div className="h-full flex flex-col items-center justify-start  text-left bg-white bg-opacity-50 rounded-lg">
                                        <Image
                                            className="rounded-lg w-[200px] h-[200px] overflow-hidden object-cover"
                                            src={item.img}
                                            width={4200}
                                            height={2100}
                                            alt={"peregrinaciones religiosas"}
                                        />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">{item.travel}</h2>
                                            <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                            <p className="mb-4">{item.desc}</p>
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
        </section >
    );
};

export default Religio
