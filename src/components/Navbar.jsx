"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar flex items-center justify-between px-12 fixed top-0 left-0 w-full z-10 bg-white shadow 
      transition-all duration-300 ${
        scrolled ? "h-12" : "h-[20vh]"
      }`}
    >
      <div className={`logo transition-all duration-700  ${scrolled ? "scale-100" : "scale-150"}`} id="logo">
        <Image
          src="https://res.cloudinary.com/dvh8hozns/image/upload/v1688157403/Anunciar/qpi5qareodaxmmehor3u.png"
          alt="Logo"
          height={100} // Cambia el tamaño de acuerdo con el estado de "scrolled"
          width={100}  // Cambia el tamaño de acuerdo con el estado de "scrolled"
        />
      </div>
    </nav>
  );
};

export default Navbar;
