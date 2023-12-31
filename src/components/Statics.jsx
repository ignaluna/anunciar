"use client"
import { useState, useEffect } from "react";
import {
  airplaneOutline, walkOutline, peopleOutline, bulbOutline, buildOutline,
  personOutline, playOutline, pauseOutline, pause
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const data = [
  { id: 1, area: "Peregrinaciones", count: "+10K", text: "Peregrinos", icon: airplaneOutline, icon2: walkOutline },
  { id: 2, area: "Social", count: "+500", text: "Personas", icon: peopleOutline, icon2: personOutline },
  { id: 3, area: "Comunicación", count: "+10K", text: "horas de tv", icon: playOutline, icon2: pauseOutline },
  { id: 4, area: "Proyectos", count: "+20", text: "Proyectos", icon: bulbOutline, icon2: buildOutline },
  // Add more objects with different data for each div
];

const Statics = () => {
  const [hoverStates, setHoverStates] = useState([]);
  const [icon, setIcon] = useState([]);


  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  const handleIcon = (index) => {
    setIcon((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index]; // Cambiar el valor booleano del ícono en el índice seleccionado
      return newStates;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("statics");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.left < window.innerWidth; // El componente está dentro de la ventana
        if (isVisible) {
          element.classList.add("slideIn"); // Agregar la clase de animación CSS
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section className="text-gray-600 body-font transition-transform duration-300 p-4" id="statics">
      <div className="container sm:px-5 sm:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-3 sm:mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Asociación Civil Anunciar
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Entidad sin fines de lucro tiene como objetivo mejorar la calidad de vida de los 
          ciudadanos a través de actividades que incluyen la difusión del evangelio y 
          fortalecer principios y valores comunitarios.
          </p>
        </div>
        <div className="flex flex-wrap text-center">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="p-2 md:p-4 md:w-1/4 sm:w-1/2 w-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <h2 className="mb-3 font-bold title-font">{item.area}</h2>
              <div
                className={`border-2 border-gray-200 px-4 py-2 md:py-6 rounded-lg`}
              >
                <IonIcon
                  onClick={() => handleIcon(index)}
                  icon={icon[index] ? item.icon2 : item.icon} // Asigna el ícono específico que deseas mostrar
                  className={`text-indigo-500 w-12 h-12 mb-3 cursor-pointer inline-block ${hoverStates[index] ? "md:transform md:-translate-y-2 md:transition-transform duration-300" : "md:transform md:transition-transform md:duration-300"
                    }`} />
                <h2
                  className={`title-font font-medium text-3xl text-gray-900 w-full ${hoverStates[index] ? "md:transform md:scale-150 md:transition-transform md:duration-300" : "md:transform md:transition-transform md:duration-300"
                    }`}
                >
                  {item.count}
                </h2>
                <p
                  className={`leading-relaxed ${hoverStates[index] ? "md:transform md:translate-y-2 md:transition-transform md:duration-300" : "md:transform md:transition-transform md:duration-300"
                    }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statics;
