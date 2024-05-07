"use client";
import React, { useState } from "react";
import ThemeBtn from "./header/themeSwitch";
import { navLinks, RedesSociales } from "./navLinks";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowDropright,
  IoIosArrowDropleft,
} from "react-icons/io";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { MdPhone } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import SubNavMobile from "./header/subNav/subNavMobile";
import SubNavPC from "./header/subNav/subNavPC";
import Link from "next/link";
import Image from "next/image";
import logoColor from "./logo-color.svg"
import logoInvert from "./logo-invert.svg"
import { useTheme } from "next-themes";

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState(""); // manejar estado de que menu se seleccionó
  const [prevSelectedMenu, setPrevSelectedMenu] = useState(""); //guardar estado anterior para logica de funcion
  const [menu, setMenu] = useState(false); // abrir cerrar submenu
  const [navMenu, setNavMenu] = useState(false); // abrir cerrar menu hamburguesa de movil
  const {theme} = useTheme();

  function setActiveMenu(menuKey: string) {
    setSelectedMenu(menuKey); //setear valor de menu al menu actual
    if (prevSelectedMenu !== menuKey) {
      setPrevSelectedMenu(selectedMenu); //si el menu anterior no es igual al menu entrante, guardar estado
    } else if (prevSelectedMenu === menuKey) {
      setMenu(!menu); //si lo es, entonces invertir estado de menu
    }
  }

  return (
    <header className="relative flex items-center justify-between w-full py-4 shadow-sm shadow-bg-200 h-fit">
      <Image className="ml-4 -my-2" src={theme==="light"?logoColor:logoInvert} height={40} width={40} alt="LOGO"/>
      <nav className="flex flex-col items-center gap-4 w-fit h-fit md:flex-row">
        <Link
          className="hidden md:flex text-3xl transition-all duration-100 ease-in hover:text-tone-200 hover:scale-110"
          href="/"
        >
          <TiHome/>
        </Link>
        <button
          onClick={() => setNavMenu(!navMenu)} // abrir cerrar menu
          className="text-text-100 size-fit md:hidden"
        >
          {navMenu ? ( // si el menu esta abierto, mostrara la X, sino, mostrara la hamburguesa
            <GiTireIronCross size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
        <ul
          className={`flex flex-col gap-8 p-4 md:hidden absolute left-0 top-12 w-full bg-bg-200 transition-all duration-150 ease-out ${
            navMenu // cambio de estilo condicional
              ? "h-screen opacity-100 pointer-events-auto"
              : "pointer-events-none h-0 opacity-0"
          }`}
        >
          <Link
          className="text-3xl -mb-4"
          href="/"
        >
          <TiHome/>
        </Link>
          {navLinks.map(
            (
              link //mapeamos los links de la constante
            ) => (
              <li key={link.key}>
                <button
                  onClick={() => setActiveMenu(link.key)}
                  className="flex items-center"
                >
                  {menu && selectedMenu === link.key ? ( // si el menu esta abierto y el menu seleccionado es el de la key, entonces se cambia el icono
                    <IoIosArrowDropleft />
                  ) : (
                    <IoIosArrowDropright />
                  )}
                  <h2 className="text-lg font-bold">{link.name}</h2>
                </button>
              </li>
            )
          )}
          <ul className="flex flex-col gap-4 px-2 size-fit">
            {RedesSociales.map(
              (
                social // mapeamos las redes sociales
              ) => (
                <li className="text-4xl" key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.symbol}
                  </a>
                </li>
              )
            )}
          </ul>
          <Link
            className="flex items-center text-lg font-bold"
            href="/contacto"
          >
            <MdPhone size={20} />
            Contáctanos
          </Link>
        </ul>
        {/* links PC*/}
        <ul className="items-center hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => setActiveMenu(link.key)}
                className="flex items-center group"
              >
                {menu && selectedMenu === link.key ? (
                  <i className="group-hover:animate-bounce">
                    <IoIosArrowUp />
                  </i>
                ) : (
                  <i className="group-hover:animate-bounce">
                    <IoIosArrowDown />
                  </i>
                )}
                <h2 className="text-lg font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-tone-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
                  {link.name}
                </h2>
              </button>
            </li>
          ))}
          <Link
            className="flex items-center justify-center group"
            href="/contacto"
          >
            <i className="transition-transform duration-200 group-hover:rotate-90">
              <MdPhone size={20} />
            </i>
            <h2 className="text-lg font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-tone-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
              Contáctanos
            </h2>
          </Link>
        </ul>
      </nav>
      <div
        className={`absolute top-16 right-4 bg-bg-300 size-fit md:hidden flex p-4 transition-all duration-100 ease-out ${
          navMenu && menu // para version movil, si el menu hamburguesa esta desplegado y el submenu esta abierto, aplicar estos estilos
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <SubNavMobile menu={selectedMenu} />
      </div>
      <div
        className={`absolute top-14 bg-bg-200 w-full hidden md:flex p-4 transition-all duration-200 ease-in ${
          menu // si el submenu esta activo, aplicar estos estilos
            ? "h-24 opacity-100 pointer-events-auto"
            : "h-6 opacity-0 pointer-events-none"
        }`}
      >
        <SubNavPC menu={selectedMenu} />
      </div>
      <div className="mr-4">
        <ThemeBtn />
      </div>
    </header>
  );
}
