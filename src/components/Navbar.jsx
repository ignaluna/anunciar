"use client"
import { useState, useEffect, useRef, useContext } from "react";
import { arrowUpOutline, menuOutline, volumeMuteOutline, volumeHighOutline, arrowBack } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Image from "next/image";
import { GlobalContext } from "../app/contexts/context";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const { dropdown, navBarHeight } = globalState;
  const [animateIn, setAnimateIn] = useState(false)
  const navbarRef = useRef(null);
  const [top, setTop] = useState(false);
  const [audio, setAudio] = useState(false);
  const audioRef = useRef(null);
  const pathname = usePathname()


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

    };
  }, [pathname]);

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

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const sectionPosition = section.getBoundingClientRect().top;
    const offset = 50;

    const scrollDirection = sectionPosition < 100 ? 'up' : 'down';

    if (scrollDirection === 'up') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleToggleAudio = () => {
    setAudio(!audio);
    if (audio) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };


  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar flex items-center justify-between px-12 fixed top-0 left-0 w-full z-40 bg-[#F1F1F1] shadow 
      transition-all duration-300 ${dropdown || !scrolled ? "h-[20vh]" : "h-14"}`}
      >
        {pathname === "/" && (
          <IonIcon
            onClick={toggleDropdown} // Asegúrate de utilizar la sintaxis de eventos de React
            icon={menuOutline} // Asigna el ícono específico que deseas mostrar
            className="text-3xl cursor-pointer md:hidden h-lg"
          />
        )}
        {pathname !== "/" && (
          <Link href="/"
          >
            <IonIcon
              icon={arrowBack} // Asigna el ícono específico que deseas mostrar
              className="text-3xl cursor-pointer text-gray-700"
            />
          </Link>
        )}

        <Link href="/" className={`logo transition-all duration-700 flex items-center ${dropdown || !scrolled ? "scale-150" : "scale-75"} ${ pathname !== "/" ? "md:ml-28" : ""}`} id="logo">
          <Image
            src="https://res.cloudinary.com/dvh8hozns/image/upload/v1688157403/Anunciar/qpi5qareodaxmmehor3u.png"
            alt="Logo"
            height={150}
            width={150}

          />
        </Link>
        {pathname === "/" && (

          < div className="nav-links duration-500 min-h-fit flex items-center px-5 hidden md:flex">
            <ul className="hidden md:flex flex-row items-center gap-[4vw]">
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#jaire");
                  }
                  }
                  className="hover:text-gray-500 cursor-pointer"
                >
                  Social
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#comunicacion");
                  }
                  }
                  className="hover:text-gray-500 cursor-pointer"
                >
                  Comunicación
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#religio");
                  }
                  }
                  className="hover:text-gray-500 cursor-pointer"
                >
                  Peregrinaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("#accordion");
                  }
                  }
                  className="hover:text-gray-500 cursor-pointer"
                >
                  Proyectos
                </button>
              </li>

            </ul>
          </div>
        )
        }
        <div className="flex items-center gap-4">
          <Link target="_blank" href={"https://wa.link/4ffj0q"}>
            <button className="md:flex hidden bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Donar</button>
          </Link>
          <audio ref={audioRef} src="/intro.mp3" loop />
          <div
            className={`text-3xl cursor-pointer ${audio ? "text-yellow-400" : "text-gray-700"} transition-colors`}
            onClick={() => handleToggleAudio()}
          >
            <IonIcon
              icon={audio ? volumeHighOutline : volumeMuteOutline} // Asigna el ícono específico que deseas mostrar
            />
          </div>
        </div>
      </nav >
      {dropdown && (
        <>
          <div
            className={`menu bg-[#010718] text-white z-30 fixed mt-[20vh] top-0 left-0 h-screen w-screen ${animateIn ? "animate-slide-in" : "animate-slide-out"
              }`}
          >
            {/* Aquí puedes agregar los enlaces y contenido de la sidebar */}
            <ul className="my-8 flex flex-col items-center justify-evenly h-[70vh]">
              <li>
                <Link
                  href="/#jaire"
                  onClick={toggleDropdown}
                >Social</Link>
              </li>
              <li>
                <Link
                  href="/#comunicacion"
                  onClick={toggleDropdown}
                >Comunicación</Link>
              </li>
              <li>
                <Link
                  onClick={toggleDropdown}
                  href="/#religio">Peregrinaciones</Link>
              </li>
              <li>
                <Link
                  onClick={toggleDropdown}
                  href="/#accordion">Proyectos</Link>
              </li>
            </ul>
          </div>
        </>
      )
      }
      {
        top && (
          <Link
            className="back-to-top bg-black-800 rounded-full w-12 h-12 flex items-center justify-center fixed bottom-8 right-8 cursor-pointer z-index-40"
            href="/"
            onClick={() => setTop(false)}
          >
            <IonIcon icon={arrowUpOutline} className="text-white" />
          </Link>
        )
      }
    </>
  );
};

export default Navbar;
