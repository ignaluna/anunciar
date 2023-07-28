"use client"
import { useState, useEffect, useRef, useContext } from "react";
import { menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Image from "next/image";
import { GlobalContext } from "../app/contexts/context";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const { dropdown, navBarHeight } = globalState;
  const [animateIn, setAnimateIn] = useState(false)
  const navbarRef = useRef(null);

  // Función para cambiar el valor de dropdown
  const handleDropdown = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      dropdown: !dropdown,
    }));
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleDropdown = (to) => {
    if (dropdown) {
      // Si el menú desplegable está abierto, lo cerramos antes de cambiar de sección
      setAnimateIn(false);
      setTimeout(() => {
        handleDropdown(false);
      }, 400);
    } else {
      handleDropdown(true);
      setAnimateIn(true);
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar flex items-center justify-between px-12 fixed top-0 left-0 w-full z-40 bg-[#F1F1F1] shadow 
      transition-all duration-300 ${dropdown || !scrolled ? "h-[20vh]" : "h-14"}`}
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
        <div className="nav-links duration-500 min-h-fit flex items-center px-5 hidden md:flex">
          <ul className="hidden md:flex flex-row items-center gap-[4vw]">
            <li>
              <Link
                activeClass="active"
                to="jaire"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-gray-500 cursor-pointer"
              >
                Social
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="religio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-gray-500 cursor-pointer"
              >
                Peregrinaciones
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="comunicacion"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-gray-500 cursor-pointer"
              >
                Comunicación
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="accordion"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="hover:text-gray-500 cursor-pointer"
              >
                Proyectos
              </Link>
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
