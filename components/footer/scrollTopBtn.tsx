"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollTopBtn() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Umbral de desplazamiento, ajusta según necesites
      if (scrollPosition > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el listener de evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className={`fixed bottom-4 hidden md:block text-text-200 right-4 hover:opacity-80 hover:scale-125 ${
        scrolled
          ? "opacity-50 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-200 ease-in size-fit`}
      onClick={ScrollTop}
    >
      <IoIosArrowDropupCircle size={48} />
    </button>
  );
}
