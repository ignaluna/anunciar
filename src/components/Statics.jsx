"use client"
import { useState } from "react";

const Statics = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

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

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Areas Anunciar
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
            tile poke farm-to-table. Franzen you probably haven't heard of them man bun
            deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {hoverStates.map((isHovered, index) => (
            <div
              key={index}
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className={`border-2 border-gray-200 px-4 py-6 rounded-lg`}
              >
                <svg
                  fill="none"
                  className={`text-indigo-500 w-12 h-12 mb-3 inline-block ${
                    isHovered ? "transform -translate-y-2 transition-transform duration-300" : "transform transition-transform duration-300"
                  }`}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2
                  className={`title-font font-medium text-3xl text-gray-900 ${
                    isHovered ? "transform scale-150 transition-transform duration-300" : "transform transition-transform duration-300"
                  }`}
                >
                  2.7K
                </h2>
                <p
                  className={`leading-relaxed ${
                    isHovered ? "transform translate-y-2 transition-transform duration-300" : "transform transition-transform duration-300"
                  }`}
                >
                  Religio
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
