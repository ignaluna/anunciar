"use client"
import { useState, useEffect, useContext } from "react";
import { menuOutline, moonOutline, sunnyOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Image from "next/image";
import { GlobalContext } from "@/app/contexts/context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const { globalState, setGlobalState } = useContext(GlobalContext);

  // Obtén dropdown del globalState
  const dropdown = globalState.dropdown;

  // Función para cambiar el valor de dropdown
  const handleDropdown = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      dropdown: !dropdown,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    if (dropdown) {
      // Si el dropdown está visible y hacemos clic para cerrarlo
      // Primero animamos hacia afuera y luego ocultamos el dropdown
      setAnimateIn(false);

      // Añadimos un pequeño retraso para permitir que la animación ocurra antes de ocultar el dropdown
      setTimeout(() => {
        handleDropdown(false);
      }, 400);
    } else {
      // Si el dropdown está oculto y hacemos clic para mostrarlo
      // Primero ocultamos el dropdown y luego animamos hacia adentro
      handleDropdown(true);
      setAnimateIn(true);
    }
  };

  return (
    <>
      <nav
        className={`navbar flex items-center justify-between px-12 fixed top-0 left-0 w-full z-40 bg-[#F1F1F1] shadow 
      transition-all duration-300 ${dropdown || !scrolled  ? "h-[20vh]" : "h-12"}`}
      >
        <IonIcon
          onClick={toggleDropdown} // Asegúrate de utilizar la sintaxis de eventos de React
          icon={menuOutline} // Asigna el ícono específico que deseas mostrar
          className="text-3xl cursor-pointer md:hidden h-lg"
        />
        <div className={`logo transition-all duration-700 flex items-center ${dropdown || !scrolled ? "scale-150" : "scale-75"}`} id="logo">
          <Image
            src="https://res.cloudinary.com/dvh8hozns/image/upload/v1688157403/Anunciar/qpi5qareodaxmmehor3u.png"
            alt="Logo"
            height={150}
            width={150}
          />
        </div>
        <div class="nav-links duration-500 min-h-fit flex items-center px-5 hidden md:flex">
          <ul class="hidden md:flex flex-row items-center gap-[4vw]">
            <li>
              <a class="hover:text-gray-500" href="#">Social</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">Peregrinaciones</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">Comunicación</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="#">Proyectos</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Donar</button>
          {/* <div
            className={`text-3xl cursor-pointer ${dark ? "text-gray-700" : "text-yellow-400"} transition-colors`}
            onClick={() => setDark(!dark)}
          >
            <IonIcon
              icon={dark ? moonOutline : sunnyOutline} // Asigna el ícono específico que deseas mostrar
            />
          </div> */}
        </div>
      </nav>
      {dropdown && (
        <>
          <div
            className={`menu bg-[#010718] text-white z-30 fixed top-0 left-0 h-screen w-screen ${animateIn ? "animate-slide-in" : "animate-slide-out"
              }`}
          >
            {/* Aquí puedes agregar los enlaces y contenido de la sidebar */}
            <ul className="my-8">
              <li>
                <a className="block text-lg font-semibold" href="#">Enlace 1</a>
              </li>
              <li>
                <a className="block text-lg font-semibold" href="#">Enlace 2</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
