"use client"
import { IonIcon } from '@ionic/react';
import { chatbubbleEllipsesOutline, logoFacebook, logoInstagram } from 'ionicons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const jaire = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`transition-all duration-300 h-auto mt-[20vh]`}>
            <div className="flex flex-col justify-center items-center">
                <div className="relative flex flex-col h-auto items-center rounded-lg w-full md:w-[400px] p-4 bg-[#f5f5f5] shadow-3xl shadow-shadow-500 ">
                    <div
                        className={`relative flex flex-col items-center rounded-lg w-full mx-auto`}
                    >
                        <div className={`flex w-full justify-center rounded-xl bg-cover`}>
                            <Image
                                width={400}
                                className="rounded-lg"
                                height={560}
                                alt="talleres"
                                src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690998124/WhatsApp_Image_2023-08-01_at_19.00.34_ubbdhy.jpg"
                            />
                        </div>
                        <div className=" flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <Image
                                height={371}
                                width={371}
                                className="h-full w-full rounded-full"
                                src="https://res.cloudinary.com/dvh8hozns/image/upload/v1690737624/descarga-removebg-preview_3_1_haajts.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">Jaire</h4>
                        <p className="text-base font-normal text-gray-600">Ancasti 5750</p>
                    </div>
                    <span className="inline-flex text-black flex items-center space-x-12 mt-4">
                        <Link target="_blank" href="https://www.instagram.com/centrojaire/">
                            <IonIcon
                                className="w-12 h-12"
                                icon={logoInstagram} />
                        </Link>
                        <Link target="_blank" href="https://www.facebook.com/CentroJaireAnunciar/?locale=es_LA">
                            <IonIcon className="w-12 h-12"
                                icon={logoFacebook} />
                        </Link>
                        <Link target="_blank" href="https://wa.link/4ffj0q">
                            <IonIcon
                                className="w-12 h-12"
                                icon={chatbubbleEllipsesOutline} />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default jaire;