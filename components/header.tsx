"use client";
import React, { useState } from "react";
import ThemeBtn from "./header/themeSwitch";
import { navLinks, RedesSociales } from "./header/navLinks";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowDropright,
  IoIosArrowDropleft,
} from "react-icons/io";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import Link from "next/link";
import SubNavMobile from "./header/subNav/subNavMobile";

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState("nosotros");
  const [prevSelectedMenu, setPrevSelectedMenu] = useState("nosotros");
  const [menu, setMenu] = useState(true);
  const [navMenu, setNavMenu] = useState(true);

  function setActiveMenu(menuKey: string) {
    setSelectedMenu(menuKey);
    if (prevSelectedMenu !== menuKey) {
      setPrevSelectedMenu(selectedMenu);
    } else if (prevSelectedMenu === menuKey) {
      setMenu(!menu);
    }
  }

  return (
    <header className="relative flex items-center justify-between w-full py-4 h-fit">
      <h1 className="ml-4 text-lg font-bold">LOGO</h1>
      <nav className="flex flex-col items-center gap-2 w-fit h-fit md:flex-row">
        <button
          onClick={() => setNavMenu(!navMenu)}
          className="text-text-100 size-fit md:hidden"
        >
          {navMenu ? (
            <GiTireIronCross size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
        <ul
          className={`flex flex-col gap-8 p-4 md:hidden absolute left-0 top-12 w-full bg-bg-200 transition-all duration-150 ease-out ${
            navMenu
              ? "h-screen opacity-100 pointer-events-auto"
              : "pointer-events-none h-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => setActiveMenu(link.key)}
                className="flex items-center"
              >
                {menu && selectedMenu === link.key ? (
                  <IoIosArrowDropleft />
                ) : (
                  <IoIosArrowDropright />
                )}
                <h2 className="text-lg font-bold">{link.name}</h2>
              </button>
            </li>
          ))}
          <ul className="flex flex-col gap-4 px-2 size-fit">
            {RedesSociales.map((social) => (
              <li className="text-4xl" key={social.key}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >{social.symbol}</a>
              </li>
            ))}
          </ul>
        </ul>
        {/* links PC*/}
        <ul className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => setActiveMenu(link.key)}
                className="flex items-center"
              >
                {menu && selectedMenu === link.key ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
                <h2 className="text-lg font-bold">{link.name}</h2>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`absolute top-16 right-4 bg-bg-300 size-fit md:hidden flex p-4 transition-all duration-100 ease-out ${
          navMenu && menu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <SubNavMobile menu={selectedMenu} />
      </div>
      <div
        className={`absolute top-10 bg-bg-200 w-full hidden md:flex p-4 transition-all duration-200 ease-in ${
          selectedMenu === "nosotros" && menu
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        nos menu
      </div>

      {/*<div className={`absolute ${selectedMenu==='especial'?'bg-accent-1':'bg-tone-100'}`}>nos menu</div>
      <div className={`absolute ${selectedMenu==='comunidad'?'bg-accent-1':'bg-tone-100'}`}>nos menu</div>
          <div className={`absolute ${selectedMenu==='novedades'?'bg-accent-1':'bg-tone-100'}`}>nos menu</div>*/}
      <div className="mr-4">
        <ThemeBtn />
      </div>
    </header>
  );
}
