"use client"
import React, { useState } from "react";

const sectionsData = [
  {
    title: "Cepla",
    content:
      "Primer Centro Ecuménico de Peregrinaciones Latinoamericano, con más de 30 países integrantes.A través de viajes y peregrinaciones, buscan contribuir al fortalecimiento espiritual y la conexión entre personas en América Latina.",
  },
  {
    title: "Mujeres en marcha",
    content: "Espacio cooperativo de trabajo para mujeres en el desarrollo de una panadería",
  },
  {
    title: "Keller Cultural",
    content: "Keller fue un espacio que forma parte del proyecto cultural de la Asociación Civil Anunciar, enfocado en generar un impacto social a través del desarrollo artístico y la promoción de valores culturales.",
  },
];

const Accordion = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    if (openSectionIndex === index) {
      // Si la sección actualmente abierta es la misma que se hizo clic, la cerramos.
      setOpenSectionIndex(null);
    } else {
      // Si se hizo clic en una nueva sección, la abrimos y cerramos la sección anterior.
      setOpenSectionIndex(index);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-gradient-to-br rounded-lg shadow-xl transition-transform hover:-translate-y-1">
        <div className="max-w-md mx-auto">
        
          <h1 className="text-gray-600 w-full text-center text-[40px]">Proyectos</h1>

          {sectionsData.map((section, index) => (
            <div key={index}>
              <div
                onClick={() => toggleSection(index)}
                className="flex items-center text-gray-600 w-full border-b overflow-hidden mt-0 mb-5 mx-auto cursor-pointer"
              >
                <div className="w-10 border-r px-2 transform transition duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      openSectionIndex === index ? "rotate-90" : ""
                    } transition-transform`}
                  >
                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </div>
                <div className="flex items-center px-2 py-3  w-full justify-center items-center text-center">
                    <button className="hover:underline">{section.title}</button>                
                </div>
              </div>

              <div
                className={`flex justify-center items-center text-center w-full overflow-hidden transition-all duration-500 ${
                  openSectionIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
